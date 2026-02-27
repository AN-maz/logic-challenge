import { useState } from "react";

function MovieForm({ onAdd }) {

    const [judul, setJudul] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();

        if (!judul || !genre || !rating) return alert('Semua field harus diisi');


        const bukuBaru = {
            id: Date.now(),
            judul,
            genre,
            rating: Number(rating),
            favorit: false,
        };

        onAdd(bukuBaru);

        setJudul("");
        setGenre("");
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
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
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