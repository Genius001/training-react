import { icon24H, iconComplete, iconPrice, iconProfessional, imgPhoto, imgPhoto2, imgService, rate, } from '../assets/Index';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
export default function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <section id="our-services">
                <div className="container py-5 my-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                            <img
                                src={imgService}
                                className="img-fluid"
                                alt="TMMIN Car Rental Services"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                            <p>
                                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                                wedding, meeting, dll.
                            </p>
                            <ul>
                                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                                <li>Layanan Airport Transfer / Drop In Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why-us">
                <div className="container py-5 my-5">
                    <h2 className="mb-3">Why Us?</h2>
                    <p className="mb-4">Mengapa harus pilih Binar Car Rental?</p>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={iconComplete}
                                        className="mb-4"
                                        alt="TMMIN Car Rental - Mobil Lengkap"
                                    />
                                    <h3 className="mb-4">Mobil Lengkap</h3>
                                    <p>
                                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                        terawat
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={iconPrice}
                                        className="mb-4"
                                        alt="TMMIN Car Rental - Harga Murah"
                                    />
                                    <h3 className="mb-4">Harga Murah</h3>
                                    <p>
                                        Harga murah dan bersaing, bisa bandingkan harga kami dengan
                                        rental mobil lain
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={icon24H}
                                        className="mb-4"
                                        alt="TMMIN Car Rental - Layanan 24 Jam"
                                    />
                                    <h3 className="mb-4">Layanan 24 Jam</h3>
                                    <p>
                                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                        tersedia di akhir minggu
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={iconProfessional}
                                        className="mb-4"
                                        alt="TMMIN Car Rental - Sopir Profesional"
                                    />
                                    <h3 className="mb-4">Sopir Profesional</h3>
                                    <p>
                                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                        tepat waktu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonial">
                <div className="py-5 my-5">
                    <div className="text-center">
                        <h2 className="mb-3">Testimonial</h2>
                        <p className="mb-4">Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="card bg-red text-light">
                                    <div className="card-body py-5">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-3 text-center">
                                                <img
                                                    src={imgPhoto}
                                                    alt="TMMIN Car Rental - Customer"
                                                />
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <img
                                                    src={rate}
                                                    alt="TMMIN Car Rental - Rate"
                                                />
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Dicta quisquam eaque autem obcaecati, reprehenderit modi
                                                    accusamus praesentium ea quam quo a velit temporibus
                                                    quia delectus ipsam deserunt tenetur suscipit. Sint?
                                                </p>
                                                <label>John Dee 32, Bromo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card bg-red text-light">
                                    <div className="card-body py-5">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-3 text-center">
                                                <img
                                                    src={imgPhoto2}
                                                    alt="TMMIN Car Rental - Customer"
                                                />
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <img
                                                    src={rate}
                                                    alt="TMMIN Car Rental - Rate"
                                                />
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Dicta quisquam eaque autem obcaecati, reprehenderit modi
                                                    accusamus praesentium ea quam quo a velit temporibus
                                                    quia delectus ipsam deserunt tenetur suscipit. Sint?
                                                </p>
                                                <label>John Dee 32, Bromo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card bg-red text-light">
                                    <div className="card-body py-5">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-3 text-center">
                                                <img
                                                    src={imgPhoto2}
                                                    alt="TMMIN Car Rental - Customer"
                                                />
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <img
                                                    src={rate}
                                                    alt="TMMIN Car Rental - Rate"
                                                />
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Dicta quisquam eaque autem obcaecati, reprehenderit modi
                                                    accusamus praesentium ea quam quo a velit temporibus
                                                    quia delectus ipsam deserunt tenetur suscipit. Sint?
                                                </p>
                                                <label>John Dee 32, Bromo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card bg-red text-light">
                                    <div className="card-body py-5">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-md-3 text-center">
                                                <img
                                                    src={imgPhoto}
                                                    alt="TMMIN Car Rental - Customer"
                                                />
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <img
                                                    src={rate}
                                                    alt="TMMIN Car Rental - Rate"
                                                />
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Dicta quisquam eaque autem obcaecati, reprehenderit modi
                                                    accusamus praesentium ea quam quo a velit temporibus
                                                    quia delectus ipsam deserunt tenetur suscipit. Sint?
                                                </p>
                                                <label>John Dee 32, Bromo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-navigation">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="sewa-mobil">
                <div className="container py-5 my-5 d-flex justify-content-center">
                    <div className="text-center">
                        <h2 className="mb-3 col-12">Sewa Mobil di (Lokasimu) Sekarang</h2>
                        <p className="mb-3 col-12">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                            cumque, quod atque ipsum accusantium alias odit temporibus? Id minus
                            adipisci, nihil accusamus consectetur magnam excepturi fugit
                            consequatur ea. Quos, saepe?
                        </p>
                        <a href="#" className="btn btn-success">Mulai Sewa Mobil</a>
                    </div>
                </div>
            </section>
        </>
    );
}
