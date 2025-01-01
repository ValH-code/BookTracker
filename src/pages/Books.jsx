import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { auth, db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";





const Books = () => {
  const [books, setBooks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("Tous");
  const [sortOption, setSortOption] = useState("titre");

  // changer pour que ce soit avec firebase
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
    if (books.length > 0) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books]);

  const handleAddBook = (newBook) => {
    if (
      newBook &&
      newBook.id &&
      newBook.title &&
      newBook.author &&
      newBook.status
    ) {
      setBooks((prevBooks) => [...prevBooks, newBook]);
    } else {
      console.error("Le livre ajouté est invalide :", newBook);
    }
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filtrer les livres
  const filteredBooks = books.filter((book) => {
    if (filterStatus === "Tous") return true;
    return book.status === filterStatus;
  });

  // Trier les livres
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === "titre") return a.title.localeCompare(b.title);
    if (sortOption === "auteur") return a.author.localeCompare(b.author);
    return 0;
  });

  // Affiche bouton suprimer et mis a jour statut livre
  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleUpdateStatus = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          let newStatus;
          if (book.status === "À lire") newStatus = "En cours";
          else if (book.status === "En cours") newStatus = "Lu";
          else newStatus = "À lire";

          return { ...book, status: newStatus };
        }
        return book;
      })
    );
  };

  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4 dark:text-black">
          {/* Filtre */}
          <select
            value={filterStatus}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="Tous">Tous</option>
            <option value="Lu">Lu</option>
            <option value="En cours">En cours</option>
            <option value="À lire">À lire</option>
          </select>
          {/* Tri */}
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="titre">Titre</option>
            <option value="auteur">Auteur</option>
          </select>
        </div>
        <BookList books={sortedBooks}  onDeleteBook={handleDeleteBook}
          onUpdateStatus={handleUpdateStatus} />
      </div>
    </div>
  );
};

export default Books;
