import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <h2 className="logo">Lab React day-06</h2>


            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </div>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                <Link to="/materi" className="nav-link" onClick={closeMenu}>Materi</Link>
                <Link to="/latihan" className="nav-link" onClick={closeMenu}>Latihan</Link>
                <Link to="/challenge" className="nav-link" onClick={closeMenu}>Challenge</Link>
            </div>
        </nav>
    );
}

export default Navbar;