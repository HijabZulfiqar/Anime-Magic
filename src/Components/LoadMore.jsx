"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useAnime from "../page/action";

 

function LoadMore() {
   
    const [page, setPage] = useState(1);
  const { ref, inView } = useInView({ trackVisibility: true, delay: 100 });
  const animeData = useAnime(page);

  useEffect(() => {
    if (inView) {
      setPage(prevPage => prevPage + 1);
    }
  }, [inView]);
  return (
    <>
     <div className='grid   grid-cols-1  lg:grid-cols-2  2xl:grid-cols-3 gap-7 gap-y-3  mx-auto  '>
      {animeData && animeData.map(animeItem => (
        <div key={animeItem.id} className=" rounded">
          <div className="  h-[37vh]">
            <img
              src={`https://shikimori.one${animeItem.image.original}`}
              alt={animeItem.name}
                
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <div className="py-4 flex flex-col gap-3">
            <div className="flex justify-between items-center gap-1">
              <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
                {animeItem.name}
              </h2>
              <div className="py-1 px-2 bg-[#161921] rounded-sm">
                <p className="text-white text-sm font-bold capitalize">
                  {animeItem.kind}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="./episodes.svg"
                  alt="episodes"
                  className="object-contain"
                />
                <p className="text-base text-white font-bold">
                  {animeItem.episodes || animeItem.episodes_aired}
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <img
                  src="./star.svg"
                  alt="star"
                  className="object-contain"
                />
                <p className="text-base font-bold text-[#FFAD49]">{animeItem.score}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <img
            src="./spinner.svg"
            alt="spinner"
           
            className="object-contain w-14 h-14 "
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
