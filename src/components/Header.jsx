import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="hover:underline">Accueil</Link>
        </li>
        <li>
          <Link to="/books" className="hover:underline">Mes Livres</Link>
        </li>
        <li>
          <Link to="/add-book" className="hover:underline">Ajouter un Livre</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;