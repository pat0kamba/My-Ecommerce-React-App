import React from "react";
import {Typography, Button, Container, Grid, Box, Divider} from "@mui/material";
import {Link} from "react-router-dom";
import Products from "../Products.js";
import "../styles/Product.css";

export default function OtherLines()
{
    const product = [
        {
            cover:Products[0].men.cover.ImageUrl,
            name:Products[0].men.cover.name
        }, 
        {
            cover:Products[0].women.cover.ImageUrl,
            name:Products[0].women.cover.name
        },
        {
            cover:Products[0].teen.cover.ImageUrl,
            name:Products[0].teen.cover.name
        },
        {
            cover:Products[0].home.cover.ImageUrl,
            name:Products[0].home.cover.name
        }

    ]
    console.log(product);
    return(
        <>
        <Divider /> 
        <Container maxWidth="xlg" sx={{my:"40px", px:"0"}}>
            <Typography variant="h5" gutterBottom align="center" sx={{mb:"25px"}}>
                Our Other Lines
            </Typography>
            <Grid container justifyContent="space-between" spacing={0.5}>
            {
                product.map((item, id)=>{
                    return (<Grid item key={id} md={3} className="stacked">
                        <img src={item.cover} style={{height:"100%", width:"100%"}} alt="cover_img" className="product_img" />
                        <Box className="button_gridContent">
                       <Link to={"/"+item.name.toLowerCase()} style={{textDecoration:"none"}} ><Button variant="contained" sx={{color:"#333", backgroundColor:"#fff"}}>{item.name}</Button> </Link>
                       </Box>
                    </Grid>)
                })
            }
            </Grid>
        </Container>
        </>
    )
}