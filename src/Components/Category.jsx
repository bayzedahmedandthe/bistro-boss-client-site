import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../assets/home/slide1.jpg"
import img2 from "../assets/home/slide2.jpg"
import img3 from "../assets/home/slide3.jpg"
import img4 from "../assets/home/slide4.jpg"
import img5 from "../assets/home/slide5.jpg"
const Category = () => {
    return (
        <div className='max-w-[1000px] mx-auto pb-12'>
            <div className=''>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                        <h2 className='md:text-3xl font-medium text-white -mt-16 flex justify-center uppercase'>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h2 className='md:text-3xl font-medium text-white -mt-16 flex justify-center uppercase'>Dessert</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h2 className='md:text-3xl font-medium text-white -mt-16 flex justify-center uppercase'>soup</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h2 className='md:text-3xl font-medium  text-white  -mt-16 flex justify-center uppercase'>pizza</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h2 className='md:text-3xl font-medium  text-white  -mt-16 flex justify-center uppercase'>Salads</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;