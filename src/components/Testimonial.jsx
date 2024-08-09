import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { imgPhoto, imgPhoto2, imgPhoto3, rate } from "../assets/Index";

export default function Testimonial() {
    const [slideItems] = useState([
        {
            img: imgPhoto,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  quisquam eaque autem obcaecati, reprehenderit modi accusamus
                  praesentium ea quam quo a velit temporibus quia delectus ipsam
                  deserunt tenetur suscipit. Sint?`,
            name: "John Doe, 32, Bromo",
        },
        {
            img: imgPhoto2,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  quisquam eaque autem obcaecati, reprehenderit modi accusamus
                  praesentium ea quam quo a velit temporibus quia delectus ipsam
                  deserunt tenetur suscipit. Sint?`,
            name: "Clara Style, 18, Prambanan",
        },
        {
            img: imgPhoto3,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  quisquam eaque autem obcaecati, reprehenderit modi accusamus
                  praesentium ea quam quo a velit temporibus quia delectus ipsam
                  deserunt tenetur suscipit. Sint?`,
            name: "Henry Star, 18, Bali",
        },
        // Duplicate items for demonstration
        {
            img: imgPhoto,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  quisquam eaque autem obcaecati, reprehenderit modi accusamus
                  praesentium ea quam quo a velit temporibus quia delectus ipsam
                  deserunt tenetur suscipit. Sint?`,
            name: "John Doe, 32, Bromo",
        },
        {
            img: imgPhoto2,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  quisquam eaque autem obcaecati, reprehenderit modi accusamus
                  praesentium ea quam quo a velit temporibus quia delectus ipsam
                  deserunt tenetur suscipit. Sint?`,
            name: "Clara Style, 18, Prambanan",
        },
        {
            img: imgPhoto3,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  quisquam eaque autem obcaecati, reprehenderit modi accusamus
                  praesentium ea quam quo a velit temporibus quia delectus ipsam
                  deserunt tenetur suscipit. Sint?`,
            name: "Henry Star, 18, Bali",
        },
    ]);

    return (
        <section id="testimonial">
            <div className="py-5 my-5">
                <div className="text-center">
                    <h2 className="mb-3">Testimonial</h2>
                    <p className="mb-4">
                        Berbagai review positif dari para pelanggan kami
                    </p>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.1,
                        },
                        1400: {
                            slidesPerView: 2.5,
                        },
                    }}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="mySwiper"
                >
                    {slideItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card bg-red text-light">
                                <div className="card-body py-5">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-3 text-center">
                                            <img
                                                src={item.img}
                                                alt={`Customer testimonial ${item.name}`}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="col-12 col-md-9">
                                            <img
                                                src={rate}
                                                alt="Rating"
                                                className="pulse-rating mb-3"
                                            />
                                            <p>{item.description}</p>
                                            <label>{item.name}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-navigation">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    );
}
