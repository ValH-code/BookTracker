import { useState } from "react";
import axios from "axios";

function AddBookForm({ onAddBook }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      setSearchResults(response.data.items || []);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  const handleAddBook = (book) => {
    const newBook = {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors?.join(", ") || "Auteur inconnu",
      cover: book.volumeInfo.imageLinks?.thumbnail || "",
      status: "À lire",
    };
    onAddBook(newBook);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Ajouter un Livre</h2>
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher un livre"
          className="border border-gray-300 rounded p-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Rechercher
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-md p-4 flex flex-col items-center"
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || ""}
              alt={book.volumeInfo.title}
              className="w-32 h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{book.volumeInfo.title}</h3>
            <p className="text-gray-500">
              Auteur : {book.volumeInfo.authors?.join(", ") || "Auteur inconnu"}
            </p>
            <button
              onClick={() => handleAddBook(book)}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddBookForm;
