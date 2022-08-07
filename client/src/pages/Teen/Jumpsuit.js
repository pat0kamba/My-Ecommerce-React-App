import React from "react";
import Products from "../../Products.js";
import Article from "../Article/Article.js";

export default function Shirts()
{
    console.log(Products[0].teen.jumpsuits[1]);
  
    return(
        <Article articles={Products[0].teen.jumpsuits} category={Products[0].teen.cover.name} sub_category={Products[0].teen.jumpsuits[0].cover.name} />
    )
}