// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTile from '../SectionTitle/SectionTile';




const Category = () => {
    return (
        <>
            <section>
                <SectionTile heading={"Order Online"} subHeading={"---From 11:00am to 10:00pm---"} ></SectionTile>
            </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-4xl text-center -mt-20 mb-14 text-white uppercase'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-4xl text-center -mt-20 mb-14 text-white uppercase'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-4xl text-center -mt-20 mb-14 text-white uppercase'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-4xl text-center -mt-20 mb-14 text-white uppercase'>cake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-4xl text-center -mt-20 mb-14 text-white uppercase'>Salads</h3>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Category;