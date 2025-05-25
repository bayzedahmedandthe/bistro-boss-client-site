import wallet from "../assets/icon/wallet 1.png"
import store from "../assets/icon/store 1.png"
import group from "../assets/icon/Group.png"
import orders from "../assets/icon/Group 121.png"
import reviews from "../assets/icon/Group 118.png"
import booking from "../assets/icon/Group 113.png"
import payment from "../assets/icon/Group 114.png"
import useMenu from "../Hooks/useMenu";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext);
    const [menu] = useMenu();
    const totalMenu = menu?.length
    const userImage = user?.photoURL;
    const userName = user?.displayName;
    return (
        <div className="md:m-6 m-2">
            {/* firest part */}
            <div className='flex justify-between'>
                {/* menu */}
                <div className='bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]'>
                    <div className='md:flex items-center justify-center gap-4 md:px-28 md:py-8 px-5 py-4 rounded-md'>
                        <img src={wallet} alt="" />
                        <div>
                            <p className="text-white text-2xl font-semibold">{totalMenu}</p>
                            <p className="text-white font-semibold">Menu</p>
                        </div>
                    </div>
                </div>
                {/* shop */}
                <div className='bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'>
                    <div className='md:flex items-center justify-center gap-4 md:px-28 md:py-8 px-5 py-4 rounded-md'>
                        <img src={store} alt="" />
                        <div>
                            <p className="text-white text-2xl font-semibold">15</p>
                            <p className="text-white font-semibold">shop</p>
                        </div>
                    </div>
                </div>
                {/* contact */}
                <div className='bg-gradient-to-r from-[#FE4880] to-[#FECDE9]'>
                    <div className='md:flex items-center justify-center gap-4 md:px-28 md:py-8 px-5 py-4 rounded-md'>
                        <img src={group} alt="" />
                        <div>
                            <p className="text-white text-2xl font-semibold">03</p>
                            <p className="text-white font-semibold">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Secend part */}
            <div className="md:flex md:mt-6 mt-2">
                <div className="bg-[#FFEDD5] flex-1 md:flex items-center justify-center md:py-20 md:p-0 p-4 border-r-2 border-r-yellow-500">
                    <div>
                        <img className="border-[#D1A054] border rounded-full" src={userImage} alt="" />
                        <p className="md:text-2xl text-xl font-semibold py-6">{userName}</p>
                    </div>
                </div>
                <div className="flex-1 bg-[#FEF9C3] md:p-12 p-4 md:mt-0 mt-2">
                    <h3 className="md:text-2xl text-xl font-semibold pb-4">Your Activites</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <img src={orders} alt="" />
                            <p className="text-blue-500 md:text-lg font-semibold">orders: 6</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={reviews} alt="" />
                            <p className="text-green-500 md:text-lg font-semibold">Reviews: 5</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={booking} alt="" />
                            <p className="text-yellow-600 md:text-lg font-semibold">Booking: 3</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={payment} alt="" />
                            <p className="text-orange-600 md:text-lg font-semibold">Payment: 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;