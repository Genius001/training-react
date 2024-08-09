import { zenix } from '../assets/Index';
import Search from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/animation.css';

const location = "Karawang";

export default function Sewa() {
    return (
        <>
            <Header />
            <section id="hero" className="bg-red">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center text-light">
                            <div>
                                <h1 className="mb-4">Sewa & Rental Mobil Terbaik di kawasan {location}</h1>
                                <p className="mb-4">
                                    Selamat datang di TMMIN Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={zenix} className="img-fluid" alt="Innova Zenix" />
                        </div>
                    </div>
                </div>
            </section>
            <Search />
            <Footer />
        </>
    );
}
