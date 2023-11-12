import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import Featured from "../../Components/Featured/Featured";
import PopularMenu from "../../Components/PolpularMenu/PopularMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;