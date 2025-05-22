import useMenu from "../Hooks/useMenu";
import MenuCard from "../Shared/MenuCard";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Recommends = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === "popular")
    return (
        <div>
            <section>
                <SectionTitle subHeading={"Should Try"} heading={"Recommends"}></SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-[1000px] max-w-[90%] mx-auto">
                {
                    popularMenu.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Recommends;