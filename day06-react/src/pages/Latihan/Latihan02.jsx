function HasilUjian({ nilai }) {

    let status = "";
    let warna = "";

    if (nilai === '' || nilai === null) return null;

    const angkaNilai = parseInt(nilai);

    if (angkaNilai < 60) {
        status = "Tidak lulus";
        warna = "#ef4444";
    } else if (angkaNilai >= 60 && angkaNilai <= 79) {
        status = "Lulus";
        warna = "#f59e0b";
    } else {
        status = "Lulus dengan Pujian";
        warna = "#10b981";
    }

    return (
        <div className="mini-card" style={{ textAlign: 'center', width: '250px', marginTop: '15px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Nilai: {angkaNilai}</h3>
            <p style={{ color: warna, fontWeight: 'bold', margin: 0, fontSize: '1.2rem' }}>
                {status}
            </p>
        </div>
    );
}

export default HasilUjian