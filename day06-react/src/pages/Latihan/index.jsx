import { useState } from "react";

import HasilUjian from "./Latihan02";

function Latihan() {

    const [angka1, setAngka1] = useState('');
    const [angka2, setAngka2] = useState('');
    const [hasil, setHasil] = useState(null);

    const [inputNilai, setInputNilai] = useState('');

    const hitung = (operasi) => {
        const a = parseFloat(angka1);
        const b = parseFloat(angka2);

        if (isNaN(a) || isNaN(b)) {
            setHasil("Error: Masukan angka yang valid Mas!");
            return;
        }

        let hasilKalulator = 0;

        switch (operasi) {

            case "+":
                hasilKalulator = a + b;
                break;
            case "-":
                hasilKalulator = a - b;
                break;
            case "*":
                hasilKalulator = a * b;
                break;
            case "/":
                if (b === 0) {
                    setHasil("Error: Tidak bisa dibagi dengan 0 Mas");
                    return;
                }
                hasilKalulator = a / b;
                break;
            default:
                return;
        }
        setHasil(hasilKalulator);

    };


    return (
        <div className="materi-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 className="materi-title">Latihan 1: Kalkulator Sederhana</h2>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <input
                    type="number"
                    className="input-field"
                    value={angka1}
                    onChange={(e) => setAngka1(e.target.value)}
                    placeholder="Angka 1"
                />
                <input
                    type="number"
                    className="input-field"
                    value={angka2}
                    onChange={(e) => setAngka2(e.target.value)}
                    placeholder="Angka 2"
                />
            </div>

            <div className="btn-group" style={{ marginBottom: '20px' }}>
                <button className="btn btn-primary" onClick={() => hitung('+')}>+</button>
                <button className="btn btn-primary" onClick={() => hitung('-')}>-</button>
                <button className="btn btn-primary" onClick={() => hitung('*')}>x</button>
                <button className="btn btn-primary" onClick={() => hitung('/')}>/</button>
            </div>

            {hasil !== null && (
                <div className="info" style={{ fontSize: '1.2rem' }}>
                    <strong>Hasil: </strong> {hasil}
                </div>
            )}

            <div className="materi-card">
                <h2 className="materi-title">Latihan 2: Sistem Nilai</h2>
                <p className="muted" style={{ marginBottom: '15px' }}>
                    Coba Ketikan nilai dari 0 - 100
                </p>

                <input
                    type="number"
                    className="input-field"
                    style={{ maxWidth: '250px' }}
                    value={inputNilai}
                    onChange={(e) => setInputNilai(e.target.value)}
                    placeholder="Masukan nilai ujian..."
                    min='0'
                    max='100'
                />

                {inputNilai !== '' && <HasilUjian nilai={inputNilai} />}
            </div>
        </div>
    );
}

export default Latihan