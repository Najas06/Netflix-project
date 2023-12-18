import React, { useEffect, useState } from 'react'
import instance from '../instance';

function Row({title,fetchUrl}) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [allMovies,setallMovies]= useState([]);
  const fetchData = async() =>{
    const response = await instance.get(fetchUrl)
    const {data} = response;
    setallMovies(data.results);

  }
  useEffect(()=>{
    fetchData();
  }, []);
  console.log(allMovies);


  return (
    <div >
      <h2 style={{color:"white"}}>{title}</h2>
      <div>
        {
          allMovies?.map(item=>(
            <img src={`${baseUrl}${item.poster_path}`} alt="" />
          ))
        }
      </div>
      </div>
  )
}

export default Row