
import React, { useState, useEffect } from 'react';
import axios from 'axios';



import PopularMovies from '../Components/Home/PopularMovies';

import Layout from '../Layout/Layout';



interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'http://localhost:3000/api/movies',
    );

    setMovies(result.data.movies);
  });


  return (
    <Layout>
    
    <div className="container mx-auto min-h-screen px-2 mb-6">
      
      <PopularMovies />
      
      

     


    </div>
    </Layout>
);
};

export default HomeScreen;
