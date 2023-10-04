import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchCats} from './catsSlice'
import { useDispatch } from "react-redux";
import CatList from "./CatList"

function Cats() {
  const dispatch = useDispatch()
  const catPics = useSelector(state => state.entities)
  
  useEffect(()=>{
    dispatch(fetchCats())
  }, [])

  console.log(catPics)

  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catPics}/>
    </div>
  );
}

export default Cats;
