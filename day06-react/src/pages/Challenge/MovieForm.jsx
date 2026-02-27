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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="judul"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
            />

            <input
                type="text"
                placeholder="kategori"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
            />

            <input
                type="number"
                min="1"
                max="5"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />

            <button type="submit">Tambah Film</button>
        </form>
    )
}

export default MovieForm