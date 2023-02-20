import React from 'react';

export const Home = () => (
  <div className="flex h-screen-3/4 w-full items-center justify-center">
    <div className="flex h-full w-1/2 justify-center px-2">
      <video autoPlay muted loop controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="flex h-full w-1/2 justify-center px-2">
      <video autoPlay muted loop>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
);
