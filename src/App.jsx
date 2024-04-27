import Header from "../components/Header";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function App() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ce565e5a82194dbd3f48c164e3d01fe3&language=en-US&page=1"
    );
    const movies = await data.json();

    setPopular(movies.results);
  };
  return (
    <>
      <Header />
      <div className="wrapper">
        <h2>
          Browse curated <span>Frontend</span>Tools
        </h2>
        <div className="callout-card">Some text </div>
        <div className="popular-movies">
          {popular.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
