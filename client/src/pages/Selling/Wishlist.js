import React from "react";
import {Container, Grid, Button, Typography, Box, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useLocation, Link} from "react-router-dom";
import EmptyWishList from "./EmptyWishList.js";
import {useState} from "react";

export default function Wishlist()
{   
    const location = useLocation();
    const products = location.state.products;
    const [wishArray, setWish] = useState(products);
    const handleWishlist = (theId)=>{
        setWish(wishArray.filter((item)=>item.id !== theId));
    }
    return(
    <>
    {wishArray.length === 0 ?<EmptyWishList />: <Container maxWidth="xlg" sx={{my:"10px"}} >
            <Grid container spacing={1} >
                {
                    wishArray.map((item, id)=>{
                        return(
                            <Grid item xs={12} md={3} key={id} sx={{height:"100%", position:"relative"}}>
                                <img src={item.imageUrl} style={{width:"100%", height:"80%"}} alt="product_img" />
                                <Typography variant="caption" paragraph align="center">{item.name}</Typography>
                                <Typography variant="caption" paragraph gutterBottom  align="center" sx={{color:"red"}}>US${item.price}</Typography>
                                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                <Link to="#" style={{textDecoration:"none"}}><Button variant="outlined" color="secondary" sx={{textTransform:"lowercase"}}>Add to shopping bag</Button></Link>
                                <IconButton color="secondary" onClick={()=>{handleWishlist(item.id)}}><CloseIcon /></IconButton>
                                </Box>
                                
                            </Grid>
                        )
                    })
                }
            </Grid>
       </Container> 
       
    }
    </>
    )
};

