import { Link } from "react-router-dom";

const MenuItemCard = ({ items, title }) => {
    console.log(items?.category);
    return (
        <div>
            <div className="md:max-w-[1000px] max-w-[90%] mx-auto grid md:grid-cols-2 gap-4 mt-16">
                {
                    items.map(item =>
                        <div key={item._id} className="flex items-center gap-4">
                            <img className="h-20 w-20 rounded-b-full rounded-r-full" src={item.image} alt="" />
                            <div>
                                <h3 className="text-2xl font-medium md:py-2">{item.name}------</h3>
                                <p className="text-gray-600">{item.recipe}</p>
                            </div>
                            <p className="text-yellow-600">${item.price}</p>

                        </div>
                    )
                }
            </div>
            <div className="flex justify-center  py-14">
                <Link to={`/orderfood/${title}`}>
                    <button className="uppercase text-xl font-medium px-12 py-2 border-b-black border-b-4 hover:text-yellow-700  text-center rounded-2xl ">Order Your Favorite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuItemCard;

