import PropTypes from 'prop-types';
import FoodCard from '../Pages/Order/FoodCard';



const OrderTabs = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

OrderTabs.propTypes = {
    items: PropTypes.array.isRequired,
};

export default OrderTabs;


