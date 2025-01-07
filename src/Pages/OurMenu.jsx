import { Helmet } from "react-helmet-async";
import MenuHeader from "../Components/MenuHeader";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuItemCard from "../Shared/MenuItemCard";
import Cover from "../Shared/Cover";
import headerImg from "../assets/menu/banner3.jpg"
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import soupdImg from "../assets/menu/soup-bg.jpg"

const OurMenu = () => {
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* MenuPage Header start */}
            <Cover img={headerImg} title={"Our Menu"} description={"Would you like to try a dish?"}></Cover>
            {/* MenuPage Header start */}
            {/* Offered section start */}
            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
                <MenuItemCard  items={offered} title={"offered"}></MenuItemCard>  
            {/* Offered section end */}
            {/* dessert section start */}
            <Cover img={dessertImg} title={"dessert"} description={"Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette"}></Cover>
            <MenuItemCard items={dessert} title={"dessert"}></MenuItemCard>
            {/* dessert section end */}
            {/* pizza section start */}
            <Cover img={pizzaImg} title={"Pizza"} description={"Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing"}></Cover>
            <MenuItemCard items={pizza} title={"pizza"}></MenuItemCard>
            {/* pizza section end */}
            {/* Salad section start */}
            <Cover img={saladImg} title={"Salad"} description={"Sautéed breaded veal escalope with watercress, lemon and veal jus."}></Cover>
            <MenuItemCard items={salads} title={"salad"}></MenuItemCard>
            {/* Salad section end */}
            {/* Soup section start */}
            <Cover img={soupdImg} title={"Soup"} description={"Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce"}></Cover>
            <MenuItemCard items={soups} title={"soup"}></MenuItemCard>
            {/* Soup section end */}
        </div>
    );
};

export default OurMenu;