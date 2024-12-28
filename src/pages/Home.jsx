import { useEffect, useState } from "react";
import Statistics from "../components/Statistics";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  // Charger les livres depuis localStorage
  useEffect(() => {
    try {
      const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
      setBooks(storedBooks);
    } catch (error) {
      console.error("Erreur lors du chargement des livres depuis localStorage:", error);
      setBooks([]);
    }
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Bienvenue sur BookTracker</h1>
        <p className="text-gray-600">
          Suivez vos lectures, visualisez vos progrès, et explorez vos livres préférés.
        </p>
      </header>
      <main>
        <section className="mb-8">
          <Statistics books={books} />
        </section>
      </main>
    </div>
  );
};

export default Home;
