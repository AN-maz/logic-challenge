function MovieCard({ film, onDelete, onToggle }) {
    return (
        <div className="movie-card">
            <div className="movie-info">
                <span className="movie-genre">{film.genre}</span>
                <h3 className="movie-title">{film.judul}</h3>
                <p className="movie-rating">{'⭐'.repeat(film.rating)}</p>
                {film.favorit && <div className="badge-favorit">❤️ Paporit Pilem</div>}
            </div>

            <div className="card-actions">
                <button 
                    className={`btn ${film.favorit ? 'btn-outline' : 'btn-primary'}`} 
                    onClick={() => onToggle(film.id)}
                >
                    {film.favorit ? 'Batal Paporit 💔' : 'Jadikan Paporit ❤️'}
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(film.id)}>
                    Hapus 🗑️
                </button>
            </div>
        </div>
    )
}

export default MovieCard;