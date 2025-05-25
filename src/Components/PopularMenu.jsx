import useMenu from "../Hooks/useMenu";
import MenuItemCard from "../Shared/MenuItemCard";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === "popular");
    return (
        <div>
                <MenuItemCard items={popularMenu} title="salad"></MenuItemCard>
        </div>
    );
};

export default PopularMenu;