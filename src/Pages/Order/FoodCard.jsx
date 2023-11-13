import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <p className='bg-slate-900 absolute right-0 mx-5 mt-5 px-2 text-white rounded-lg text-lg'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FoodCard;




