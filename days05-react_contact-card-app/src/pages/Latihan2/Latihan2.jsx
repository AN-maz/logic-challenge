import './Latihan2.css'
function ProductCard({ name, price, image }) {

    const formatHarga = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka)
    }
    return (
        <div className="product-cards">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h2>{formatHarga(price)}</h2>
        </div>
    );
}
function Latihan2() {
    return (
        <div className="container">
            <h1>Market Place</h1>

            <div className="product-grid">
                <ProductCard
                    name="Laptop ASUS"
                    price={1_200_000}
                    image="https://picsum.photos/300/200?random=1"
                />

                <ProductCard
                    name="Mouse Lim"
                    price={450_000}
                    image="https://picsum.photos/300/200?random=2"
                />

                
            </div>
        </div>
    );
}

export default Latihan2