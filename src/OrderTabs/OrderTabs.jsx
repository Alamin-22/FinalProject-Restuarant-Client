import PropTypes from 'prop-types';
import FoodCard from '../Pages/Order/FoodCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const OrderTabs = ({ items }) => {

    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper"></Swiper>
            <SwiperSlide>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3">
                    {
                        items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                </div>
            </SwiperSlide>
        </div>
    );
};

OrderTabs.propTypes = {
    items: PropTypes.array.isRequired,
};

export default OrderTabs;


