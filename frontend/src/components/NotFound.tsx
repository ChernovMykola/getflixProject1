import React from 'react';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
   return (
   <div className="bg-purple-900 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-center mb-4">
        404 Not Found
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl text-center">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};


export default NotFound;
