import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItems = () => {
    const navigate = useNavigate();
    const { name, price, category, recipe, _id } = useLoaderData();
    // console.log(menuData);
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imgFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                "content-Type": "multipart/form-data"
            }
        });
        console.log(res.data);
        if (res.data.success) {
            // now send the menu item data to the server with image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                navigate("/deshboard/manageItems")
                Swal.fire({
                    title: `${data.name} is updated to the menu`,
                    icon: "success",
                    draggable: true
                });
            }
        }
    }
    return (
        <div>
            <h1 className='text-center text-xl md:text-3xl md: md:py-20 py-4'>Update Item</h1>
            <div>
                <div className='bg-white w-4/5 mx-auto mb-20'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full md:px-8 md:py-4">
                            <span className="label-text py-2 text-lg">Recipe name*</span>
                            <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="recipe name" className="input input-bordered w-full bg-gray-100" />
                        </label>
                        <div className='md:flex md:items-center md:justify-between '>
                            <label className="form-control w-full md:px-8 md:py-4">
                                <span className="label-text py-2 text-lg">Select a category*</span>
                                <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full bg-gray-100">
                                    <option disabled value="default">Category</option>
                                    <option>Salad</option>
                                    <option>Pizza</option>
                                    <option>Soup</option>
                                    <option>Dessert</option>
                                    <option>Drinks</option>
                                </select>
                            </label>
                            <label className='w-full form-control md:px-8 md:py-4'>
                                <span className="label-text py-2 text-lg">Price*</span>
                                <input defaultValue={price} {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered w-full bg-gray-100" />
                            </label>
                        </div>
                        <label className="form-control w-full md:px-8 md:py-4">
                            <span className="label-text py-2 text-lg">Recipe Details</span>
                            <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-28 bg-gray-100 " placeholder="Recipe Details"></textarea>
                        </label>
                        <div className=' md:px-8 md:py-4'>
                            <input {...register("image", { required: true })} type="file" className="file-input bg-gray-100 w-full max-w-xs" />
                        </div>

                        <div className="md:px-8 md:py-4">
                            <button className='bg-[#D1A054] py-2 px-4 text-lg btn'>
                                Update Menu Item <FaEdit></FaEdit>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItems;