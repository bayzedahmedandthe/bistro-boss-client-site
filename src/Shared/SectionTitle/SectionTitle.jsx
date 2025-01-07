
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="flex justify-center py-14">
            <div>
            <p className="border-b-4 pb-6 text-yellow-700 text-center px-12">----{subHeading}----</p>
            <h2 className="uppercase text-3xl font-medium py-6 text-center px-12 border-b-4">{heading}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;