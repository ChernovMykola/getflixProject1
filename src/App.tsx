import React from 'react';
import { Route,Routes } from 'react-router-dom';



import HomeScreen from './Screens/HomeScreen';
import NotFound from './Screens/NotFound';





interface HomeScreenProps {}


const App: React.FC<HomeScreenProps> = () => {
return (
  <Routes>
   
    <Route path="/" element={<HomeScreen />} />
    <Route path="*" element={<NotFound />} />
    
  </Routes>
);
};

export default App;




