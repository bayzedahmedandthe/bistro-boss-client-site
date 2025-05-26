import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data } = useQuery({
        queryKey: ["payments", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    console.log(data)
    return (
        <div>
            <SectionTitle subHeading={"At a Glance"} heading={"Payment history"}></SectionTitle>
            <div className='md:m-20 md:mt-0 bg-white'>
                <h2 className='md:text-3xl font-semibold text-xl p-4'>Total Payments: {data?.length}</h2>
                <div className="overflow-x-auto p-4">
                    <table className="table table-lg">
                        <thead>
                            <tr className='md:text-lg text-md font-semibold bg-[#D1A054] text-white rounded-t-lg'>
                                <th>No.</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Transaction ID</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, idx) => (
                                    <tr key={item?._id}>
                                        <td>{idx + 1}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.price}</td>
                                        <td>{item?.transactionId}</td>
                                        <td>{item?.date}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;