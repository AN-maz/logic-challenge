import { useState, useEffect } from "react";

function Pencarian() {
  const [query, setQuery] = useState('');
  const [hasil, setHasil] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      setHasil([]);
      return;
    }
    setLoading(true);
    const timeout = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setHasil(data);
          setLoading(false);
        });
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="mini-card">
      <h4>Pencarian API (Debounce)</h4>
      <input type="text" className="input-field" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari nama (cth: Leanne)..." />
      {loading && <p className="muted">Mencari...</p>}
      <ul className="simple-list">
        {hasil.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default function UseEffectExamples() {
  const [count, setCount] = useState(0);
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    document.title = `Hitungan: ${count}`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => setWaktu(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="materi-card">
      <h2 className="materi-title">3. useEffect Hook</h2>

      <div className="demo-section">
        <h3>Efek pada State (Update Judul Tab)</h3>
        <p>Nilai: {count} (Coba lihat judul tab browsermu)</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Tambah Hitungan</button>
      </div>

      <div className="demo-section">
        <h3>Efek Timer & Cleanup</h3>
        <h1 style={{ fontWeight: 300, color: '#4f46e5' }}>{waktu.toLocaleTimeString('id-ID')}</h1>
      </div>

      <div className="demo-section">
        <Pencarian />
      </div>
    </div>
  );
}