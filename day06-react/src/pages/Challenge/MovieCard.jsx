function MovieCard({ film, onDelete, onToggle }) {

    return (
        <div className="card">
            <h3>{film.judul}</h3>
            <p>Kategori: {film.genre}</p>
            <p>Rating: {'⭐'.repeat(film.rating)}</p>

            {film.favorit && <span>Paporit pilem</span>}

            <button onClick={() => onToggle(film.id)}>
                {film.favorit ? 'Belum paporit' : 'sudah paporit'}
            </button>

            <button onClick={() => onDelete(film.id)}>
                Hapus
            </button>
        </div>
    )
}

export default MovieCard