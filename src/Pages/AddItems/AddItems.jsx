import SectionTile from "../../Components/SectionTitle/SectionTile";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxios();
    const onSubmit = async (data) => {
        console.log("checking hosting key", image_hosting_key);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_api, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                if (res.success) {
                    // now send the menu item data to the server with the image url
                    const menuItem = {
                        name: data.name,
                        category: data.category,
                        price: parseFloat(data.price),
                        recipe: data.recipe,
                        image: res.data.display_url,
                    }
                    // 
                    axiosSecure.post('/menu', menuItem)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.insertedId) {
                                // show success popup
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `${data.name} is added to the menu.`,
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })

                }
            })


    };
    return (
        <div>
            <SectionTile subHeading={"add an item"} heading={"what's new ?"} ></SectionTile>
            <div className="bg-[#F3F3F3] rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="p-5" >
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-outline">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;