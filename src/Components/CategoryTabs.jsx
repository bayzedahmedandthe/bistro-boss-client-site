import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hooks/useMenu';
import MenuCard from '../Shared/MenuCard';


const CategoryTabs = ({category}) => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div className="py-16 md:max-w-[1000px] mx-auto">
            <Tabs className="md:pl-0 pl-3" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 py-12 gap-6'>
                        {
                            salads.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 py-12 gap-6'>
                        {
                            pizza.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 py-12 gap-6'>
                        {
                            soups.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 py-12 gap-6'>
                        {
                            dessert.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 py-12 gap-6'>
                        {
                            drinks.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;