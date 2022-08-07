import React from "react";
import {Typography, Grid, Box, Container} from "@mui/material";
import {Link} from "react-router-dom";
import Products from "../../Products.js";
import "../../styles/Product.css";
import OtherLines from "../../core/OtherLines.js";
// need to work on the covers
export default function Homes()
{
    // console.log(Products[0].home.towels[0].cover.ImageUrl);
    // console.log(Products[0].home.duvets[0].cover.name);
    // const towel_img = Products[0].home.towels[0].cover.ImageUrl;
    // const duvet_img = Products[0].home.duvets[0].cover.ImageUrl;
    // const bed_img = Products[0].home.beds[0].cover.ImageUrl;

    const product =[
        {
            cover:Products[0].home.towels[0].cover.ImageUrl,
            name:Products[0].home.towels[0].cover.name

        },
        {
            cover:Products[0].home.duvets[0].cover.ImageUrl,
            name:Products[0].home.duvets[0].cover.name
        },
        {
            cover:Products[0].home.beds[0].cover.ImageUrl,
            name:Products[0].home.beds[0].cover.name
        }
    ]
    return(
    <>
        <Container maxWidth="xlg" sx={{my:"20px", px:"0"}}>
            <Grid container justifyContent="space-between" spacing={0.5}>
            {
                product.map((item, id)=>{
                    return(
                        <Grid item key={id} xs={12} md={4}>
                            <Box className="stacked">
                            <img src={item.cover} style={{width:"100%", height:"100%"}} alt="Cover-img" className="product_img"/>
                            <Box className="all_gridContent">
                            <Typography variant="h2" gutterBottom sx={{color:"#fff"}}>{item.name}</Typography>
                            <Link to={"/home/"+item.name.toLowerCase().trim()} style={{color:"#fff"}} >Discover more</Link>
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