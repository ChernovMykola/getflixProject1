
import React from 'react'

import PopularMovies from '../Components/Home/PopularMovies';

import Layout from '../Layout/Layout';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Layout>
    
    <div className="container mx-auto min-h-screen px-2 mb-6">
      
      <PopularMovies />
      
      

     


    </div>
    </Layout>
);
};

export default HomeScreen;

