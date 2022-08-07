import React from "react";
import Article from "../Article/Article.js";
import Products from "../../Products.js";


export default function Shirts()
{
    console.log(Products[0].women.hats[1]);
  
    return(
        <Article articles={Products[0].women.hats} category={Products[0].women.cover.name} sub_category={Products[0].women.hats[0].cover.name} />
    )
}