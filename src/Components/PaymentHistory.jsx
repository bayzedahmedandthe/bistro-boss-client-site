import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data} = useQuery({
        queryKey: ["payments" ,user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h2>{data?.length}</h2>
        </div>
    );
};

export default PaymentHistory;