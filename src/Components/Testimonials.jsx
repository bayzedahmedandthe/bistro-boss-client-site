import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [rating, setRating] = useState([]);
    useEffect(() => {
        fetch("/reviews")
            .then(res => res.json())
            .then(data => setRating(data))
    }, [])
    return (
        <div className="max-w-[1000px] mx-auto pb-12">
            <section>
                <SectionTitle subHeading={"What nOur Client Say"} heading={"Testimonials"}></SectionTitle>
            </section>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >

                {
                    rating.map(item =>
                        <SwiperSlide key={item._id}>
                            <div className="py-8">
                                <div className="flex justify-center pb-6">
                                    <Rating
                                        style={{ maxWidth: 160 }}
                                        value={item.rating}
                                        readOnly
                                    />
                                </div>
                                <p className="px-16">{item.details}</p>
                                <h3 className="text-yellow-700 text-xl mb-2 text-center">{item.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;