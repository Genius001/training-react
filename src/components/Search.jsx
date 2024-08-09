import { useState } from "react";
import { Link } from "react-router-dom";
import { listCars } from "../utils/GetCars";
import { calendar, user, setting } from "../assets/Index";

export default function Search() {
    const [cars, setCars] = useState(null);
    const [inputData, setInputData] = useState({
        typeDriver: "",
        tanggal: new Date().toISOString().split('T')[0],
        jam: "",
        capacity: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
    };

    const handleSearch = async (event) => {
        event.preventDefault();

        if (
            inputData.typeDriver === "" ||
            inputData.tanggal === "" ||
            inputData.jam === ""
        ) {
            return alert("Mohon dipilih Tipe Driver, Tanggal dan waktu jemput");
        }

        const capacity = Math.min(Math.max(inputData.capacity || 1, 1), 7);

        const selectedDate = new Date(inputData.tanggal);
        const today = new Date();
        if (selectedDate < today) {
            setInputData({
                ...inputData,
                tanggal: today.toISOString().split('T')[0]
            });
        }

        try {
            const data = await listCars((el) => {
                return (inputData.capacity
                    ? el.capacity >= capacity
                    : true) &&
                    (inputData.typeDriver === "" || el.typeDriver === inputData.typeDriver) &&
                    el.availableAt >= new Date(inputData.tanggal) &&
                    el.availableAt.getHours() >= Number(inputData.jam);
            });

            setCars(data);
        } catch (error) {
            console.error("Error fetching cars:", error);
            alert("Terjadi kesalahan saat mencari mobil. Silahkan coba lagi.");
        }
    };

    return (
        <>
            <section id="search" style={{ marginTop: '-45px' }}>

                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <form className="row g-3 justify-content-center" id="form-search">
                                <div className="col-auto">
                                    <label className="form-label">
                                        Tipe Driver<span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="tipedriver"
                                        name="typeDriver"
                                        value={inputData.typeDriver}
                                        required
                                        onChange={handleChange}
                                    >
                                        <option value="">Pilih Tipe Driver</option>
                                        <option value="Dengan Supir">Dengan Supir</option>
                                        <option value="Lepas Kunci">
                                            Tanpa Supir (Lepas Kunci)
                                        </option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <label className="form-label">
                                        Tanggal<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="tanggal"
                                        name="tanggal"
                                        className="form-control"
                                        placeholder="Pilih Tanggal"
                                        min={new Date().toISOString().split('T')[0]}
                                        value={inputData.tanggal}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-auto">
                                    <label className="form-label">
                                        Waktu / Jam Jemput<span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="jam"
                                        name="jam"
                                        value={inputData.jam}
                                        required
                                        onChange={handleChange}
                                    >
                                        <option value="">Pilih Jam Jemput</option>
                                        <option value="8">08.00</option>
                                        <option value="9">09.00</option>
                                        <option value="10">10.00</option>
                                        <option value="11">11.00</option>
                                        <option value="12">12.00</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <label className="form-label">
                                        Jumlah Penumpang (optional)
                                    </label>
                                    <input
                                        type="number"
                                        id="penumpang"
                                        className="form-control"
                                        placeholder="Jumlah Penumpang"
                                        name="capacity"
                                        min="1"
                                        max="7"
                                        value={inputData.capacity}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-auto">
                                    <label className="form-label invisible">cari mobil</label>
                                    <button
                                        type="button"
                                        id="cari"
                                        className="btn btn-success d-block"
                                        onClick={handleSearch}
                                    >
                                        Cari Mobil
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section id="search-result" className="my-5">
                <div className="container">
                    <div className="row">
                        {cars && cars.length > 0
                            ? cars.map((e, index) => (
                                <div className="col-10 col-md-3 mb-3" key={index}>
                                    <div className="card pb-2" style={{ minWidth: '300px', maxWidth: '300px', minHeight: '500px', maxHeight: '500px', display: 'flex', flexDirection: 'column' }}>
                                        <img src={e.image} className="card-img-top img-fluid" alt={e.name} style={{ maxHeight: '200px', objectFit: 'cover' }} />
                                        <div className="card-body d-flex flex-column">
                                            <h6>{e.name}</h6>
                                            <label>{e.price}</label>
                                            <p className="flex-grow-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, accusamus!</p>
                                            <ul className="list-unstyled">
                                                <li className="d-flex align-items-center mb-2">
                                                    <img src={user} alt="User Icon" className="me-2" />
                                                    <span>{e.capacity} Orang</span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <img src={setting} alt="Setting Icon" className="me-2" />
                                                    <span>Manual</span>
                                                </li>
                                                <li className="d-flex align-items-center mb-2">
                                                    <img src={calendar} alt="Calendar Icon" className="me-2" />
                                                    <span>Tahun 2020</span>
                                                </li>
                                            </ul>
                                            <Link to={`/rent/detail/${e.id}`} className="btn btn-success d-block">Pilih Mobil</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <p className="text-center">Hasil Tidak Ditemukan, Silahkan Melakukan Pencarian Ulang!</p>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
