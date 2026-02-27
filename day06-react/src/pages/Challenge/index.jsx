import { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import MovieCard from './MovieCard'
import './Challenge.css';

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
    const [search, setsearch] = useState('');

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

    const kategoriUnik = ['semua', ...new Set(films.map((f) => f.genre))];

    const filterFilms = films.filter((f) => {
        const matchFilm = filter === 'semua' || f.genre === filter;

        const matchSearch = f.judul.toLowerCase().includes(search.toLocaleLowerCase());

        return matchFilm && matchSearch;
    });

    const total = films.length;
    const totalFavorit = films.filter((f) => f.favorit).length;

    return (
        <div className="movie-app-container">

            <div className="movie-stats">
                <div className="stat-box">
                    <span>Total Films</span>
                    <h2>{total} 🎬</h2>
                </div>
                <div className="stat-box highlight">
                    <span>Paporit</span>
                    <h2>{totalFavorit} ❤️</h2>
                </div>
            </div>


            <div className="form-section">
                <MovieForm onAdd={handleAdd} />
            </div>


            <div className="movie-controls">
                <input
                    type="text"
                    className="input-field search-input"
                    placeholder=" Cari film..."
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                />
                <select className="input-field filter-select" onChange={(e) => setFilter(e.target.value)}>
                    {kategoriUnik.map((k) => (<option key={k} value={k}>{k}</option>))}
                </select>
            </div>


            <div className="movie-grid">
                {filterFilms.map((f) => (
                    <MovieCard
                        key={f.id}
                        film={f}
                        onDelete={handleDelete}
                        onToggle={handleToggle}
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieList