
const Cover = ({ img, title, description }) => {
    return (
        <div>
            <div className="bg-fixed px-48 pt-44 pb-28 " style={{backgroundImage: `url("${img}")`}}>
                <div className="px-20 py-20 text-white bg-slate-900 bg-opacity-70">
                    <h2 className="uppercase text-3xl font-medium py-6 text-center">{title}</h2>
                    <p className=" font-medium text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;