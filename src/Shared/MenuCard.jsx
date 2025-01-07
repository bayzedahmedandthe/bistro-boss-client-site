

const MenuCard = ({ item }) => {
    return (
        <div className="bg-slate-100">
            <div className="relative">
                <img src={item.image} alt="" />
                <p className="bg-black text-white px-4 absolute right-4 top-4">${item.price}</p>
            </div>
            <h3 className="text-2xl font-medium py-4 text-center">{item.name}</h3>
            <p className="text-center ">{item.recipe}</p>
            <div className="flex justify-center">
                <button className="border-b-2 border-b-yellow-700 rounded-lg hover:bg-slate-800 hover:text-white text-yellow-700 bg-slate-300 uppercase px-6 py-2 my-8 text-center">Add To Cart</button>
            </div>
        </div>
    );
};

export default MenuCard;