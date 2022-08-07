import React from "react";
import {Typography, Grid, Box, Container} from "@mui/material";
import {Link} from "react-router-dom";
import Products from "../../Products.js";
import "../../styles/Product.css";
import OtherLines from "../../core/OtherLines.js";

// need to work on the covers
export default function Women()
{
    console.log(Products[0].women.sportswear[0].cover.ImageUrl);
    console.log(Products[0].women.shirts[0].cover.name);

    const product = [
      {
        cover:Products[0].women.sportswear[0].cover.ImageUrl,
        name:Products[0].women.sportswear[0].cover.name
      },
      {
        cover:Products[0].women.shirts[0].cover.ImageUrl,
        name:Products[0].women.shirts[0].cover.name
      },
      {
        cover:Products[0].women.hats[0].cover.ImageUrl,
        name:Products[0].women.hats[0].cover.name
      }
    ]
    return(
      <>
        <Container maxWidth="xlg" sx={{my:"20px", px:"0"}}>
          <Grid container justifyContent="space-between" spacing={0.5}>
            {
              product.map((item, id)=>{
                return(
                  <Grid item xs={12} key={id} md={4}>
                      <Box  className="stacked">
                        <img src={item.cover} style={{width:"100%", height:"100%"}} alt="Cover-img" className="product_img"/>
                        <Box className="all_gridContent">
                        <Typography variant="h2" gutterBottom sx={{color:"#fff"}}>{item.name}</Typography>
                        <Link to={"/women/"+item.name.toLowerCase().trim()} style={{color:"#fff"}} >Discover more</Link>
                        </Box>
                      </Box>
                </Grid>
                )
              })
            }
            </Grid>
            
        </Container>
        <OtherLines />
      </>
    )
}