import React from "react";
import Article from "../Article/Article.js";
import Products from "../../Products.js";


export default function Shirts()
{
    console.log(Products[0].home.towels[1]);
  
    return(
        <Article articles={Products[0].home.towels} category={Products[0].home.cover.name} sub_category={Products[0].home.towels[0].cover.name} />
    )
}