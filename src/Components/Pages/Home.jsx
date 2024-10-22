import React from 'react';
import MySwiperComponent from '../Swiper/Swiper';
import Explore from '../Cards/ExploreCard';

import Foams from "../../assets/Foams";
import image9 from "../../assets/ashfoam.jpg";


function Home() {
  return (
    <div className="mx-10">
      <h1 className="text-gray-800 text-3xl text-center mt-10">
        <MySwiperComponent />

      </h1>
      <div className="mt-8 grid lg:grid-cols-2 gap-10 ">
        {Foams.map((foams, index) => (
          <Explore
            key={index}
            ExploreImg={foams.FoamImg}
            ExploreHeader={foams.FoamName}
            ExploreDes={foams.FormDes}
          />
        ))}
      </div>
    </div>
  );
}

export default Home