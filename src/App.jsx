import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import Header from './components/Header';

const App = () => {
  const [books, setBooks] = useState([]);

  // Charger les livres depuis localStorage au démarrage
  useEffect(() => {
    try {
      const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
      setBooks(storedBooks);
    } catch (error) {
      console.error("Erreur lors du chargement des livres depuis localStorage:", error);
      setBooks([]);
    }
  }, []);

  // Sauvegarder les livres dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Ajouter un nouveau livre
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/add-book" element={<AddBook onAddBook={handleAddBook} />} />
      </Routes>
    </div>
  );
};

export default App;