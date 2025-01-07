import React from 'react';
import headerImg from "../assets/shop/banner2.jpg"
import Cover from '../Shared/Cover';
import CategoryTabs from '../Components/CategoryTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const FoodOrder = () => {
    const {category} = useParams();
    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            {/* OrderPage Header start */}
            <Cover img={headerImg} title={"Our Shop"} description={"Would you like to try a dish?"}></Cover>
            {/* OrderPage Header end */}
            {/* Tab section start */}
            <CategoryTabs category={category}></CategoryTabs>
            {/* Tab section end */}
        </div>
    );
};

export default FoodOrder;