// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Carousel({ images }) {
    return (
        <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            className="w-[100%] md-[100%] lg:w-[100%] xl-[100%] 2xl:w-[100%] h-[90%]"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div
                        style={{
                            backgroundColor: 'white',
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            margin: 'auto',
                        }}
                        className='w-[60%] sm:[w-50%] md:w-[53%] lg:w-[80%] xl:w-[90%] h-[15rem] sm:h-[20rem] lg:h-[20rem] xl:h-[30rem]'
                    ></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
