import MenuItem from "../../Components/PolpularMenu/MenuItem";
import Cover from "./Cover";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, title, Img }) => {
    return (
        <div>
            {title && <Cover img={Img} title={title}></Cover>}
            <div className=" grid md:grid-cols-2 gap-10 my-12">
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;