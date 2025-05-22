import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import img from "../assets/home/featured.jpg"

const ReadMore = () => {
    return (
        <div className="bg-fixed bg-[url('https://i.ibb.co/B6R5Vb8/featured.jpg')] my-12  py-36">
            <section className="bg-slate-800 bg-opacity-70 max-w-[1000px] mx-auto text-white">
                <SectionTitle subHeading={"Cheek it out"} heading={"From Our Menu"}></SectionTitle>
            </section>
            <div className="md:flex md:items-center pb-16 px-12 md:justify-center lg:gap-8 md:gap-6 max-w-[1000px] mx-auto bg-slate-800 bg-opacity-70">
                <img className="h-[220px] w-[500px]" src={img} alt="" />
                <div className="text-white ">
                    <p className="pb-4">
                        <span className="text-lg">March 20, 2028</span><br />
                        <span className="text-xl uppercase">Where Can I get some.</span>
                           Our restaurant offers a warm and inviting atmosphere with exceptional service. Our menu features fresh, locally-sourced ingredients crafted into delicious dishes. We prioritize customer satisfaction, ensuring every meal is a memorable experience. Enjoy attentive service and a delightful dining experience with us.
                    </p>
                    <button className="uppercase px-4 py-2 border-b-2 border-b-white rounded-lg hover:bg-slate-800">
                        <Link to="/orderfood/salad">Order now</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReadMore;