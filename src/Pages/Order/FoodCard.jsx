import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const axiosSecure = useAxios();
    const { user } = useAuth();
    const { name, price, image, recipe, _id } = item;
    const navigate = useNavigate()

    const [, refetch] = useCart();


    const handleAddToCart = () => {

        if (user && user.email) {
            console.log(user.email,)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image, price,
            }

            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire("Success", `Your ${cartItem.name} Successfully added.`, "success")
                    }

                    refetch();
                })
                .catch(err => {
                    console.log(err);
                })


        } else {
            Swal.fire({
                title: "You are not login!",
                text: "Please login to add a cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user to the login page
                    navigate("/login")
                }
            });
        }
    }



    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <p className='bg-slate-900 absolute right-0 mx-5 mt-5 px-2 text-white rounded-lg text-lg'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4  border-orange-400 ">Add To Cart</button>
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




