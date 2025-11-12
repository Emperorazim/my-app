import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
    {/* Header */}
    <header className="header">
      <h1 className="title">🚗 Car Beautify</h1>
    </header>

    {/* Main Body */}
    <main className="body">
      <h2 className="subtitle">Make your car shine</h2>
      <img
        src="https://www.w3schools.com/w3css/img_car.jpg"
        alt="Beautiful car"
        className="image"
      />
      <p className="description">
        Transform your car with our detailing service. From paint correction to
        deep interior cleaning — we make your ride look brand new again!
      </p>
    </main>

    {/* Footer */}
    <footer className="footer">
      <h5>© 2025 Car Beautify | All Rights Reserved</h5>
    </footer>
  </div>
);
}
