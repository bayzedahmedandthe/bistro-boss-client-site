import React from 'react';
import SectionTitle from "../Shared/SectionTitle/SectionTitle"
import { useForm } from "react-hook-form"
import { FaUtensils } from 'react-icons/fa';


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <SectionTitle heading="Add An Item" subHeading="What's new?"></SectionTitle>
            <div className='bg-white w-4/5 mx-auto mb-20'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full md:px-8 md:py-4">
                        <span className="label-text py-2 text-lg">Recipe name*</span>
                        <input {...register("name", {required: true})} type="text" placeholder="recipe name" className="input input-bordered w-full bg-gray-100" />
                    </label>
                    <div className='md:flex md:items-center md:justify-between '>
                        <label className="form-control w-full md:px-8 md:py-4">
                            <span className="label-text py-2 text-lg">Select a category*</span>
                            <select {...register("category", {required: true})} className="select select-bordered w-full bg-gray-100">
                                <option disabled selected>Category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </label>
                        <label className='w-full form-control md:px-8 md:py-4'>
                            <span className="label-text py-2 text-lg">Price*</span>
                            <input {...register("price", {required: true})} type="text" placeholder="price" className="input input-bordered w-full bg-gray-100" />
                        </label>
                    </div>
                    <label className="form-control w-full md:px-8 md:py-4">
                        <span className="label-text py-2 text-lg">Recipe Details</span>
                        <textarea {...register("recipe", {required: true})} className="textarea textarea-bordered h-28 bg-gray-100 " placeholder="Recipe Details"></textarea>
                    </label>
                    <div className=' md:px-8 md:py-4'>
                        <input {...register("image", {required: true})} type="file" className="file-input bg-gray-100 w-full max-w-xs" />
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