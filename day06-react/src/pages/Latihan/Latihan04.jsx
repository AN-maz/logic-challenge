import { useState, useEffect } from 'react';

function DaftarPost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timeout = setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data);
                    setLoading(false);
                });
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    if (loading) return <p className="muted" >Memuat post...</p>

    return (
        <div className="mini-card" style={{ marginTop: '20px' }}>
            <h3 style={{ marginBottom: '15px' }}>Daftar Post dari API</h3>
            <ul className="simple-list">
                {posts.map((post) => (
                    <li key={post.id} style={{ display: 'flex', flexDirection: 'column', padding: '10px 0' }}>
                        <strong>{post.id}. {post.title}</strong>
                        <span className="muted">{post.body}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DaftarPost