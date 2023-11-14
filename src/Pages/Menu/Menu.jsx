import { Helmet } from 'react-helmet-async';
import Cover from './Cover';
import img from "../../assets/menu/banner3.jpg"
import imgDessert from "../../assets/menu/dessert-bg.jpeg"
import imgPizza from "../../assets/menu/pizza-bg.jpg"
import imgSalad from "../../assets/menu/salad-bg.jpg"
import imgSoup from "../../assets/menu/salad-bg.jpg"
import useMenu from '../../Hooks/useMenu';
import SectionTile from '../../Components/SectionTitle/SectionTile';
import MenuCategory from './MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "desserts");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Menu</title>
            </Helmet>
            <Cover img={img} title={"Our menu"}></Cover>
            <SectionTile subHeading={"Dont't Miss"} heading={"Today's Offer"}></SectionTile>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title={"deserts"} Img={imgDessert}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} Img={imgPizza}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} Img={imgSoup}></MenuCategory>
            <MenuCategory items={salad} title={"salads"} Img={imgSalad}></MenuCategory>

        </div>
    );
};

export default Menu;