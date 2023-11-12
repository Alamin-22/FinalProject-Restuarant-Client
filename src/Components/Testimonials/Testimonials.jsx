import SectionTile from "../SectionTitle/SectionTile";
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/reviews.json")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])




    return (
        <div className="my-20">
            <SectionTile subHeading={"---What Our Clients Say---"} heading={"TESTIMONIALS"}></SectionTile>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=" flex flex-col items-cente mx-24r m-16">
                            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly ></Rating>
                            <p className="my-4 ">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;