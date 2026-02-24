import { useState } from "react";

function AccordionItem({ judul, isi }) {
  const [terbuka, setTerbuka] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={() => setTerbuka(!terbuka)}>
        {judul} <span>{terbuka ? '▲' : '▼'}</span>
      </button>
      {terbuka && <p className="accordion-content">{isi}</p>}
    </div>
  );
}

function ProductCard({ name, price, category }) {
  return (
    <div className="product-card">
      <span className="badge">{category}</span>
      <h4>{name}</h4>
      <p className="price">Rp {price.toLocaleString('id-ID')}</p>
    </div>
  );
}

export default function ListAndKeys() {
  const products = [
    { id: 1, name: 'Laptop ASUS', price: 12000000, category: 'Elektronik' },
    { id: 2, name: 'Mouse Logitech', price: 350000, category: 'Aksesoris' },
    { id: 3, name: 'Keyboard Mechanical', price: 800000, category: 'Aksesoris' },
  ];

  const produk = [
    { id: 1, nama: 'Laptop', kategori: 'Elektronik' },
    { id: 2, nama: 'Baju', kategori: 'Fashion' },
    { id: 3, nama: 'Mouse', kategori: 'Elektronik' },
    { id: 4, nama: 'Sepatu', kategori: 'Fashion' },
  ];

  const [kategori, setKategori] = useState('Semua');
  const produkTerfilter = kategori === 'Semua' ? produk : produk.filter((p) => p.kategori === kategori);

  return (
    <div className="materi-card">
      <h2 className="materi-title">2. List & Keys</h2>

      <div className="demo-section">
        <h3>Accordion</h3>
        <AccordionItem judul="Apa itu React?" isi="React adalah library JavaScript untuk membangun UI." />
        <AccordionItem judul="Apa itu JSX?" isi="JSX adalah sintaks yang memungkinkan kita menulis HTML di dalam JavaScript." />
      </div>

      <div className="demo-section">
        <h3>Product Grid (Map)</h3>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h3>Filter Data</h3>
        <div className="btn-group" style={{ marginBottom: '10px' }}>
          {['Semua', 'Elektronik', 'Fashion'].map((kat) => (
            <button key={kat} onClick={() => setKategori(kat)} className={`btn ${kategori === kat ? 'btn-primary' : ''}`}>
              {kat}
            </button>
          ))}
        </div>
        <ul className="simple-list">
          {produkTerfilter.map((p) => (
            <li key={p.id}><strong>{p.nama}</strong> - <span className="muted">{p.kategori}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}