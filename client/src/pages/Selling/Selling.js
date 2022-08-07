import React from 'react';
import {Typography, Grid, Container, Box, Button} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import {useLocation, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cartSlice.js";
import {useState, useEffect} from "react";
// import {v4 as uuidv4} from "uuid";


export default function Selling ()
{
    const location = useLocation();
    const product_img = location.state.imageUrl;
    const product_name = location.state.name;
    const product_price = location.state.price;
    const product_description = location.state.description;
    const {category, sub_category} = location.state;
    const id = location.state.id;
    const product_size = location.state.size
    const [value, setValue] = useState("Choose your size");
    const dispatch = useDispatch();
    const wish = useSelector((state)=>state.cart.wish);
    function handleChange(event){
       
       setValue(event.target.value) 
    };

    function handleCart()
    {
        dispatch(cartActions.addToCart({
            name:product_name,
            price:product_price,
            imageUrl:product_img,
            size:value,
            id:id
            
        }));
        dispatch(cartActions.displayCart());
    };
  
    function handleWishlist(){
        dispatch(cartActions.addToWishlist({
            name:product_name,
            price:product_price,
            imageUrl:product_img,
            id:id
        }));
    };
    console.log("in the selling component: ",id);

    function removeWish()
    {
        dispatch(cartActions.addToWishlist({id:id}))
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    
    return(
       <Container maxWidth="xlg" sx={{px:"0", mt:"15px"}}>
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item md={6}>
                    <img src={product_img} alt="product-img" style={{width:"100%", height:"100%"}} />
                </Grid>
                <Grid item md={5} sx={{padding:"15px"}}>
                   <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", my:"15px"}}>
                        <Typography variant="body2" gutterBottom >{product_name}</Typography>
                        <Typography variant="body2" gutterBottom sx={{color:"red"}}>US${product_price}</Typography>
                   </Box> 
                   <Box sx={{display:"flex", flexDirection:"column"}}>
                   <Link to="#" >Help about your size</Link>
                   <select style={{margin:"30px 0", padding:"10px"}} value={value} onChange={handleChange}>
                        <option value="Choose your size">Choose your size</option>
                        {
                            product_size.map((size, id)=>{
                                return <option key={id} value={size}>{size}</option>
                            })
                        }
                   </select>

                    <Box sx={{textAlign:"center"}}>
                    <Button variant="contained" sx={{backgroundColor:"#333"}} onClick={handleCart}>Add to Shopping Bag</Button>
                  { wish ? <Button size="small" variant="outlined" color="inherit" onClick={handleWishlist}> <FavoriteIcon /> </Button> :
                    <Button size="small" variant="outlined" color="inherit" onClick={removeWish}> <FavoriteIcon color="secondary"/> </Button>
                  }
                    </Box>
                    </Box>
                   <Box sx={{marginTop:"45px"}}>
                        <Grid container justifyContent="space-between"  spacing={5}>
                            <Grid item container spacing={1} xs={6} alignItems="center" >
                            <AccessTimeFilledIcon />
                            <Typography variant="caption" component="span" gutterBottom>Delivery and returns</Typography>
                            </Grid>
                            <Grid item container spacing={1} xs={6} alignItems="center">
                            <LocationOnIcon />
                            <Typography variant="caption" component="span" gutterBottom>Store availability</Typography> 
                            </Grid>
                            <Grid item container spacing={1} xs={6} alignItems="center">
                            <ProductionQuantityLimitsIcon />
                            <Typography variant="caption" component="span" gutterBottom>Product details</Typography> 
                            </Grid>
                            <Grid item container spacing={1} xs={6} alignItems="center">
                            <ShareIcon />
                            <Typography variant="caption" component="span" gutterBottom>Share</Typography>  
                            </Grid>
                        </Grid>
                   </Box>
                   <Grid item container justifyContent="space-between" spacing={0.5} direction="column" sx={{marginTop:"20px"}}>
                    <Grid item md={6}>
                    <Typography variant="h6" gutterBottom>DESCRIPTION</Typography>
                    <Typography variant="body1" paragraph>{product_description}</Typography>
                    <Box sx={{textAlign:"center"}}>
                    <Link to="#" sx={{textDecoration:"none"}} ><Button variant="contained" color="secondary">{category}</Button></Link>
                    <Link to="#" sx={{textDecoration:"none"}} ><Button variant="contained" color="secondary" sx={{ml:"10px"}}>{sub_category}</Button></Link>
                    </Box>
                    </Grid>
                    <Grid item md={6}>
                   <Typography variant="h6" gutterBottom>MATERIAL AND WASHING INSTRUCTIONS</Typography>
                   <Typography variant="body2" paragraph>Composition: 100% cotton. Pockets lining: 100% cotton</Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>

           
       </Container> 
    )
}