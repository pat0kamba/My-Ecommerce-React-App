import React from "react";
import Article from "../Article/Article.js";
import Products from "../../Products.js";


export default function Shirts()
{
    console.log(Products[0].men.shoes[1]);
  
    return(
        <Article articles={Products[0].men.shoes} category={Products[0].men.cover.name} sub_category={Products[0].men.shoes[0].cover.name} />
    )
}