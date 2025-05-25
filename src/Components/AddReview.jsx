import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import rating from "../assets/icon/Group 154.png"

const AddReview = () => {
    const handleSubmit = () => {
        console.log("checking");
    }
    return (
        <div>
            <SectionTitle subHeading={"Sharing is Caring"} heading={"Give a review"}></SectionTitle>
            <div className="md:m-20 md:mt-0 bg-gray-200">
                <h3 className="md:text-4xl font-semibold text-xl text-center py-8">Rate Us!</h3>
                <div className="flex items-center justify-center">
                    <img src={rating} alt="" />
                </div>
                <form onSubmit={handleSubmit} className="mx-20 space-y-6 pb-20">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold py-2">Which recipe you liked most?</legend>
                        <input type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Which recipe you liked most?" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold py-2">Do you have any suggestion for us?</legend>
                        <input type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Suggesition" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold py-2 ">Kindly express your care in a short way.</legend>
                        <textarea className="textarea h-24 w-full" placeholder="Review in details"></textarea>
                    </fieldset>
                        <button
                            type="submit"
                            className="bg-[#D1A054] text-white px-6 py-2 rounded hover:bg-yellow-800 transition "
                        >
                            Send Review
                        </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;