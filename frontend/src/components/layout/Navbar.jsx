import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-yellow-200 p-4 flex justify-between">
      <h1 className="font-bold text-xl">Panadería Delicia</h1>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
