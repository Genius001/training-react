import { zenix } from "../assets/Index"
const location = "Karawang"
import { NavLink } from "react-router-dom"

export default function Hero() {
    return (
        <section id="hero" className="bg-red">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center text-light">
                        <div>
                            <h1 className="mb-4">
                                Sewa & Rental Mobil Terbaik di kawasan {location}
                            </h1>
                            <p className="mb-4">
                                Selamat datang di TMMIN Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            <NavLink className="btn btn-success" to="/rent">
                                Mulai Sewa Mobil
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img
                            src={zenix}
                            className="img-fluid"
                            alt="Innova Zenix"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}