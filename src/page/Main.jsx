import React from 'react';
import Card from '../Components/Card';
import Hero  from '../Components/Hero';
import { useQuery } from '@tanstack/react-query';
import useAnime from './action';
const Main = () => {

    const { data: anime } = useAnime(1);
  return (
    <div className=" lg:max-w-6xl xl:max-w-7xl mx-auto bg-[#0F1117]">
       
        <Hero/> 
        <div className="  py-24 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
        </div>
       
       <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-4 mx-auto" >
       <Card  anime={anime} />
       </div>
      
    </div>
  );
};

export default Main;
