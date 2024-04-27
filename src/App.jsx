import Header from "../components/Header";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Filter from "../components/Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ce565e5a82194dbd3f48c164e3d01fe3&language=en-US&page=1"
    );
    const movies = await data.json();

    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <>
      <Header />
      <div className="wrapper">
        <h2>
          Browse curated <span>Frontend</span>Tools
        </h2>
        <div className="callout-card">Some text </div>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <motion.div layout className="popular-movies">
          <AnimatePresence>
            {filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default App;
