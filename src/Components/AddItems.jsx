import React from 'react';
import SectionTitle from "../Shared/SectionTitle/SectionTitle"
import { useForm } from "react-hook-form"
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imgFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                "content-Type": "multipart/form-data"
            }
        })
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
            const menuRes = await axiosSecure.post("/menu", menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    title: `${data.name} is added to the menu`,
                    icon: "success",
                    draggable: true
                });
            }
        }
    }
    return (
        <div>
            <SectionTitle heading="Add An Item" subHeading="What's new?"></SectionTitle>
            <div className='bg-white w-4/5 mx-auto mb-20'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full md:px-8 md:py-4">
                        <span className="label-text py-2 text-lg">Recipe name*</span>
                        <input {...register("name", { required: true })} type="text" placeholder="recipe name" className="input input-bordered w-full bg-gray-100" />
                    </label>
                    <div className='md:flex md:items-center md:justify-between '>
                        <label className="form-control w-full md:px-8 md:py-4">
                            <span className="label-text py-2 text-lg">Select a category*</span>
                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full bg-gray-100">
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
                            <input {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                    <label className="form-control w-full md:px-8 md:py-4">
                        <span className="label-text py-2 text-lg">Recipe Details</span>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-28 bg-gray-100 " placeholder="Recipe Details"></textarea>
                    </label>
                    <div className=' md:px-8 md:py-4'>
                        <input {...register("image", { required: true })} type="file" className="file-input bg-gray-100 w-full max-w-xs" />
                    </div>

                    <div className="md:px-8 md:py-4">
                        <button className='bg-[#D1A054] py-2 px-4 text-lg btn'>
                            Add Item <FaUtensils></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;