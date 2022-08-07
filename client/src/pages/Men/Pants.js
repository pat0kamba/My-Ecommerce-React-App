import React from "react";
import Article from "../Article/Article.js";
import Products from "../../Products.js";


export default function Shirts()
{
    console.log(Products[0].men.pants[1]);
  
    return(
        <Article articles={Products[0].men.pants} category={Products[0].men.cover.name} sub_category={Products[0].men.pants[0].cover.name} />
    )
}