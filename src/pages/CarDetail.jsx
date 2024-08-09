import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/css/CarDetail.css';
import Footer from '../components/Footer';
import { user } from '../assets/Index';

export default function CarDetail() {
    const params = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            const cachedCars = localStorage.getItem('CARS');
            const parsedCars = JSON.parse(cachedCars);
            const car = parsedCars.find(e => e.id === parseInt(params.id));
            setData(car);
            setLoading(false);
        };

        fetchData();
    }, [params.id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return <p>Car not found.</p>;
    }

    return (
        <>
            <Header />
            <section className="car-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="car-details">
                                <h3>Tentang Paket</h3>
                                <ul>
                                    <li><strong>Include:</strong></li>
                                    <li><i className="bullet"></i> Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li><i className="bullet"></i> Sudah termasuk bensin selama 12 jam</li>
                                    <li><i className="bullet"></i> Sudah termasuk Tiket Wisata</li>
                                    <li><i className="bullet"></i> Sudah termasuk pajak</li>
                                    <li><strong>Exclude:</strong></li>
                                    <li><i className="bullet"></i> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li><i className="bullet"></i> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li><i className="bullet"></i> Tidak termasuk akomodasi penginapan</li>
                                    <li><i className="bullet"></i> Driver tip</li>
                                    <li><strong>Refund, Reschedule, Overtime:</strong></li>
                                    <li><i className="bullet"></i> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li><i className="bullet"></i> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li><i className="bullet"></i> Tidak termasuk akomodasi penginapan</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="car-image-section">
                                <img src={data.image} alt={data.name} className="car-image" />
                                <div className="price-overlay">
                                    <h2 className="car-price-overlay">Rp {data.price}</h2>
                                </div>
                                <div className="car-info-overlay">
                                    <h2 className="car-name-overlay">{data.name}</h2>
                                    <div className="car-capacity-overlay">
                                        <img src={user} alt="Passenger Icon" className="passenger-icon" />
                                        <span>{data.capacity - 2} - {data.capacity} orang</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
