import { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import MovieCard from './MovieCard'

const filmAwal = [
    { id: 1, judul: 'Laskar Pelangi', genre: 'Drama', rating: 5, favorit: false },
    { id: 2, judul: 'Avengers: Endgame', genre: 'Action', rating: 4, favorit: false },
    { id: 3, judul: 'Interstellar', genre: 'Sci-Fi', rating: 5, favorit: false },
    { id: 4, judul: 'The Dark Knight', genre: 'Action', rating: 5, favorit: false },
    { id: 5, judul: 'Parasite', genre: 'Thriller', rating: 4, favorit: false },
];

function MovieList() {
    const [films, setFilms] = useState(() => {
        const saved = localStorage.getItem('movies');
        return saved ? JSON.parse(saved) : filmAwal;
    });

    const [filter, setFilter] = useState("semua");
    const [seacrh, setsearch] = useState('');

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(films));
    }, [films]);

    function handleAdd(film) {
        setFilms([...films, film]);
    }

    function handleDelete(id) {
        setFilms(films.filter((f) => f.id !== id));
    }

    function handleToggle(id) {
        setFilms(
            films.map((f) => f.id === id ? { ...f, favorit: !f.favorit } : f)
        )
    }

    const kategoriUnik = ['semua', ...new Set(films.map((f) => f.kategori))];

    const filterFilms = films.filter((f) => {
        const matchFilm = filter === 'semua' || f.kategori === filter;

        const matchSearch = f.judul.toLowerCase().includes(seacrh.toLocaleLowerCase());

        return matchFilm && matchSearch;
    });

    const total = films.length;
    const totalFavorit = films.filter((f) => f.favorit).length;

    return (
        <div>
            <h2>Total Films: {total}</h2>
            <h3>Paporit: {totalFavorit}</h3>

            <MovieForm onAdd={handleAdd} />

            <input
                type="text"
                placeholder="cari film"
                value={seacrh}
                onChange={(e) => setsearch(e.target.value)}
            />

            <select onChange={(e) => setFilter(e.target.value)}>
                {kategoriUnik.map((k) => (<option key={k}>{k}</option>))}
            </select>

            {filterFilms.map((f) => (
                <MovieCard
                    key={f.id}
                    film={f}
                    onDelete={handleDelete}
                    onToggle={handleToggle} />
            ))}
        </div>
    )
}

export default MovieList