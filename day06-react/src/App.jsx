import { useState } from "react"
import './App.css'

function StatusLogin({ isLoggedIn }) {

  if (isLoggedIn) {
    return <h2 className="success">Selamat datang kembali!</h2>
  }
  return <h2 className="danger">Silahkan login terlebih dahulu</h2>
}

function Badge({ isAdmin }) {

  return (
    <div className="card">
      <p>
        Peran: <strong>{isAdmin ? 'Admin' : 'User'}</strong>
      </p>

      {isAdmin ? (
        <button className="btn">kelola Pengguna</button>
      ) : (
        <p className="muted">anda tidak memiliki akses admin</p>
      )}
    </div>
  );
}

function Notifikasi({ jumlahPesan }) {

  return (
    <div className="card">
      <h3>Kontak Masuk</h3>

      {jumlahPesan > 0 && (
        <p className="info">Kamu memiliki {jumlahPesan} pesan baru!</p>
      )}
    </div>
  )
}

function WarningBanner({ show, message }) {
  if (!show) {
    return null
  }

  return <div className="warning">⚠️ {message}</div>
}

function AccordionItem({ judul, isi }) {
  const [terbuka, setTerbuka] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '8px', padding: '8px' }}>
      <button onClick={() => setTerbuka(!terbuka)}>
        {judul} {terbuka ? '▲' : '▼'}
      </button>
      {terbuka && (
        <p style={{ marginTop: '8px' }}>{isi}</p>
      )}
    </div>
  );
}

function ProductCard({ id, name, price, category }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <span style={{ fontSize: '12px', color: '#888' }}>{category}</span>
      <h3>{name}</h3>
      <p>Rp {price.toLocaleString('id-ID')}</p>
    </div>
  );
}

function App() {

  const [isLoggedIn, setIsLoggenId] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [jumlahPesan, setJumlahPesan] = useState(0);
  const [showWarning, setShowWarning] = useState(true);

  const products = [
    { id: 1, name: 'Laptop ASUS', price: 12000000, category: 'Elektronik' },
    { id: 2, name: 'Mouse Logitech', price: 350000, category: 'Aksesoris' },
    { id: 3, name: 'Keyboard Mechanical', price: 800000, category: 'Aksesoris' },
  ];

  return (
    <div className="container">
      <h1>Contoh Condisional Rendering</h1>

      <StatusLogin isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggenId(!isLoggedIn)}>
        Toggle Login
      </button>

      <hr />

      <Badge isAdmin={isAdmin} />
      <button onClick={() => setIsAdmin(!isAdmin)}>
        Toggle Role
      </button>

      <hr />

      <Notifikasi jumlahPesan={jumlahPesan} />
      <div className="btn-group">
        <button onClick={() => setJumlahPesan(jumlahPesan + 1)}>
          Tambah Pesan
        </button>

        <button onClick={() => setJumlahPesan(0)}>
          Reset Pesan
        </button>
      </div>

      <hr />

      <WarningBanner
        show={showWarning}
        message="Ini adalah peringatan penting!" />

      <button onClick={() => setShowWarning(!showWarning)}>
        Toggle Warning
      </button>

      <AccordionItem judul="Apa itu React?" isi="React adalah library JavaScript untuk membangun UI." />
      <AccordionItem judul="Apa itu JSX?" isi="JSX adalah sintaks yang memungkinkan kita menulis HTML di dalam JavaScript." />

      <div style={{ display: 'grid', gap: '16px' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>

    </div>
  )

}

export default App