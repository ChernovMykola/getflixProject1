import React, { useState, useEffect } from "react";
import axios from "axios";


import Layout from "../components/Layout/Layout";
import PopularMovies from "../components/PopularMovies";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [movies, setMovies] = useState([]);
  const fetchfilm = async ()=>{
    const result = await axios("http://localhost:3000/api/movies");
    console.log(result.data.movies);
    setMovies(result.data.movies);
  }
  useEffect(() => {
    fetchfilm();
  }, []);

  return (
    <Layout >
      <div className="container mx-auto min-h-screen px-2 mb-6">
        {movies.map((movie) =>
           (

            < div key={movie.id}>
           <p>{movie.title}</p>
           <img src={movie.url} />

           </div>
           )
        
        )}
      </div>
    </Layout>
  );
};

export default HomeScreen;