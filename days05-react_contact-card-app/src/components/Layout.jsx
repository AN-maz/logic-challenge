import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar';

function Layout() {
    return (
        <>
            <Navbar />
            <main style={{ padding: "20px" }}>
                <Outlet />
            </main>
        </>
    );
}

export default Layout