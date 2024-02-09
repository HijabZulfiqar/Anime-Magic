import React from 'react';
import Card from '../Components/Card';
import Hero  from '../Components/Hero';
import { useQuery } from '@tanstack/react-query';
import useAnime from './action';
import LoadMore from '../Components/LoadMore';
const Main = () => {

    const { data: anime } = useAnime(1);
  return (
    <div className=" lg:max-w-6xl xl:max-w-8xl px-4 mx-auto bg-[#0F1117]">
       
        <Hero/> 
        <div className="  py-24 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
        </div>
       
       <div className=" mx-auto px-3" >
       <Card  anime={anime} />
       </div>
            <LoadMore/>

    </div>
  );
};

export default Main;
