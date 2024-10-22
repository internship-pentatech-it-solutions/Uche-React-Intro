import React from 'react'
// import formm from "../../assets/ashfoam.jpg"
function ExploreCard({ ExploreHeader, ExploreImg, ExploreDes, ExploreBtnLink} ) {
   
  return (
    <>
      <div className="">
        <div className="flex  h-full hover:shadow-lg">
          <img
            src= {ExploreImg}
            className="w-[50%] h-40 sm:h-[200px]  object-cover"
            alt=""
          />

          <div className="m-4 flex flex-col justify-between">
            <div>
              <span className="font-bold text-xl">{ExploreHeader}</span>
              <span className="block text-gray-500">{ExploreDes}</span>
            </div>
            <div>
              <button>
                <a href={ExploreBtnLink}>Explore More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreCard