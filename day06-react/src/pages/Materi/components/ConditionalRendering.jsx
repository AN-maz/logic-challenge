import { useState } from "react";

function StatusLogin({ isLoggedIn }) {
  return isLoggedIn ? <h4 className="success">Selamat datang kembali!</h4> : <h4 className="danger">Silahkan login terlebih dahulu</h4>;
}

function Badge({ isAdmin }) {
  return (
    <div className="mini-card">
      <p>Peran: <strong>{isAdmin ? 'Admin' : 'User'}</strong></p>
      {isAdmin ? <button className="btn btn-sm">Kelola Pengguna</button> : <p className="muted">Anda tidak memiliki akses admin</p>}
    </div>
  );
}

function Notifikasi({ jumlahPesan }) {
  return (
    <div className="mini-card">
      <h4>Kotak Masuk</h4>
      {jumlahPesan > 0 && <p className="info">Kamu memiliki {jumlahPesan} pesan baru!</p>}
    </div>
  );
}

function WarningBanner({ show, message }) {
  if (!show) return null;
  return <div className="warning">⚠️ {message}</div>;
}


export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [jumlahPesan, setJumlahPesan] = useState(0);
  const [showWarning, setShowWarning] = useState(true);

  return (
    <div className="materi-card">
      <h2 className="materi-title">1. Conditional Rendering & Event Handling</h2>
      
      <div className="demo-section">
        <StatusLogin isLoggedIn={isLoggedIn} />
        <button className="btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      </div>

      <div className="demo-section">
        <Badge isAdmin={isAdmin} />
        <button className="btn" onClick={() => setIsAdmin(!isAdmin)}>Toggle Role</button>
      </div>

      <div className="demo-section">
        <Notifikasi jumlahPesan={jumlahPesan} />
        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => setJumlahPesan(jumlahPesan + 1)}>Tambah Pesan</button>
          <button className="btn btn-danger" onClick={() => setJumlahPesan(0)}>Reset Pesan</button>
        </div>
      </div>

      <div className="demo-section">
        <WarningBanner show={showWarning} message="Ini adalah peringatan penting!" />
        <button className="btn" onClick={() => setShowWarning(!showWarning)}>Toggle Warning</button>
      </div>
    </div>
  );
}