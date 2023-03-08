import React, { useState, useEffect } from "react";
import axios from "axios";


import Layout from "../components/Layout/Layout";
import PopularMovies from "../components/PopularMovies";
//import Banner from "../components/Home/Banner";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [movies, setMovies] = useState([]);

  const fetchFilm = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/movies");
      setMovies(result.data.movies);
    } catch (error) {
      console.log(error);
    }
  };
 

  useEffect(() => {
    fetchFilm();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        
        
        <PopularMovies />
        <div>
          {movies.slice(0, 10).map((movie, index) => (
            <img src={movie.url} key={index} alt={`Movie ${index}`} />
           ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomeScreen;

