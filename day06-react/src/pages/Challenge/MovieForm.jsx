import { useState } from "react";

function MovieForm({ onAdd }) {

    const [judul, setJudul] = useState('');
    const [kategori, setKategori] = useState('');
    const [rating, setRating] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();

        if (!judul || !kategori || !rating) return alert('Semua field harus diisi');


        const bukuBaru = {
            id: Date.now(),
            judul,
            kategori,
            rating: Number(rating),
            favorit: false,
        };

        onAdd(bukuBaru);

        setJudul("");
        setKategori("");
        setRating("");
    }

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Tambah Film Baru</h3>
            <div className="form-inputs">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Judul"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                />
                <input
                    type="text"
                    className="input-field"
                    placeholder="Kategori"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                />
                <input
                    type="number"
                    className="input-field"
                    min="1"
                    max="5"
                    placeholder="Rating (1-5)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">Tambah Film</button>
            </div>
        </form>
    )
}

export default MovieForm