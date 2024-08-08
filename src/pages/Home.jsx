import { Link } from 'react-router-dom';
import { icon24H, iconComplete, iconPrice, iconProfessional, imgService, checkBullet } from '../assets/Index';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import { Accordion } from "react-bootstrap";
import '../assets/css/animation.css';

const location = "Karawang";

export default function Home() {
    return (
        <>
            <Header />

            <Hero />

            <section id="our-services" aria-labelledby="our-services-heading" className="fade-in">
                <div className="container py-5 my-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                            <img
                                src={imgService}
                                className="img-fluid"
                                alt="Car Rental Services"
                                onError={(e) => e.target.src = 'fallback-image-path.jpg'}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2 id="our-services-heading">Best Car Rental for Any Kind of Trip in {location}!</h2>
                            <p>
                                Sewa mobil di {location} bersama TMMIN Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                            </p>
                            <ul className="list-unstyled">
                                {[
                                    "Sewa Mobil Dengan Supir di Bali 12 Jam",
                                    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
                                    "Sewa Mobil Jangka Panjang Bulanan",
                                    "Gratis Antar - Jemput Mobil di Bandara",
                                    "Layanan Airport Transfer / Drop In Out"
                                ].map((service, index) => (
                                    <li key={index} className="d-flex align-items-center mb-2">
                                        <img src={checkBullet} className="img-fluid me-2 pulse" alt="Check Icon" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why-us" aria-labelledby="why-us-heading" className="slide-up">
                <div className="container py-5 my-5">
                    <h2 id="why-us-heading" className="mb-3">Why Us?</h2>
                    <p className="mb-4">Why choose TMMIN Car Rental?</p>
                    <div className="row">
                        {[
                            { icon: iconComplete, title: "Mobil Lengkap", description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat" },
                            { icon: iconPrice, title: "Harga Murah", description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain" },
                            { icon: icon24H, title: "Layanan 24 Jam", description: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu" },
                            { icon: iconProfessional, title: "Sopir Profesional", description: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu" }
                        ].map((item, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 my-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img
                                            src={item.icon}
                                            className="mb-4 pulse"  // Apply pulse animation
                                            alt={`${item.title} Icon`}
                                            onError={(e) => e.target.src = 'fallback-icon-path.jpg'}
                                        />
                                        <h3 className="mb-4">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonial />

            <section id="sewa-mobil" className="fade-in">
                <div className="container p-5 my-5 d-flex justify-content-center bg-red text-light rounded-4">
                    <div className="text-center p-4">
                        <h2 className="mb-4 col-12">Sewa Mobil di {location} Sekarang</h2>
                        <p className="mb-5 col-12">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                            cumque, quod atque ipsum accusantium alias odit temporibus? Id
                            minus adipisci, nihil accusamus consectetur magnam excepturi fugit
                            consequatur ea. Quos, saepe?
                        </p>
                        <Link to="/contact" className="btn btn-success">
                            Mulai Sewa Mobil
                        </Link>
                    </div>
                </div>
            </section>

            <section id="faq" aria-labelledby="faq-heading" className="slide-up">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <h2 id="faq-heading">Frequently Asked Questions</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-12 col-md-7">
                            <Accordion defaultActiveKey="0">
                                {[
                                    "What are the requirements?",
                                    "What is the minimum rental period?",
                                    "How early should I book a car?",
                                    "Is there a delivery fee?",
                                    "What if an accident occurs?"
                                ].map((question, index) => (
                                    <Accordion.Item key={index} eventKey={index.toString()}>
                                        <Accordion.Header>{question}</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
