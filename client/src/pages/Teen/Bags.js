import React from "react";
import Article from "../Article/Article.js";
import Products from "../../Products.js";


export default function Shirts()
{
    console.log(Products[0].teen.bags[1]);
    
    return(
        <Article articles={Products[0].teen.bags} category={Products[0].teen.cover.name} sub_category={Products[0].teen.bags[0].cover.name} />
    )
}