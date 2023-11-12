import SectionTile from "../SectionTitle/SectionTile";
import featuredImg from "../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    return (
        <div className="featured-items text-white pt-8 my-20 bg-fixed ">
            <SectionTile subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTile>;
            <div className="md:flex justify-center items-center py-20 px-36  bg-[#151515B2] " >
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis perferendis sint assumenda obcaecati optio aspernatur saepe eum eaque. Esse ipsum tempora et fugit aliquam quisquam mollitia numquam eligendi enim, non nemo velit magnam fugiat expedita! At vero accusantium dolores aspernatur assumenda distinctio optio iusto quod! Maiores earum delectus temporibus!</p>
                    <button className=" btn btn-outline border-0 border-b-2 mt-3 text-white">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;