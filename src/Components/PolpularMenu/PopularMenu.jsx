
import SectionTile from "../SectionTitle/SectionTile";
import MenuItem from "./MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular= menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch("/public/menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const PopularItems = data.filter(item => item.category === "popular");
    //             setMenu(PopularItems);
    //         })

    // }, [])

    // console.log(menu)


    return (
        <>
            <section className="mb-12">
                <SectionTile
                    heading={"FROM OUR MENU"}
                    subHeading={"---Check it out---"}
                >
                </SectionTile>
            </section>
            <div className="grid md:grid-cols-2  gap-10">
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </>
    );
};

export default PopularMenu;