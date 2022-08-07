import React from "react";
import {Typography, Container, Box, Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cartSlice.js";

export default function PopupBag()
{
    const products = useSelector((state)=>state.cart.products);
    const totalQuantity = useSelector((state)=>state.cart.badgeCart);
    let bigTotal = 0;
    for (let i=0; i<products.length; i++)
    {
        bigTotal += products[i].totalPrice;
    }
    const dispatch = useDispatch();
    console.log(products);
    
    return(
        <Container maxWidth="xs" className="popupCart" sx={{backgroundColor:"#fff", border:"1px solid #333"}}>
            <Typography variant="body2" gutterBottom sx={{mb:"20px"}}>Shopping Bag({totalQuantity})</Typography>
            {products.length === 0 ? <Typography variant="body2" butterBottom>Your Shopping Bag is empty</Typography>: 
            <>
            <Grid container spacing={1} sx={{maxHeight:"70vh",maxWidth:"40vw", overflowY:"scroll"}}>
                {
                    products.map((product, id)=>{
                       return <Grid key={id} item xs={12} container spacing={1} sx={{mb:"10px", height:"150px"}}>
                            <Box sx={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
                                <img src={product.imageUrl} style={{width:"150px",height:"150px"}} alt="product-img" aria-label="product-img" />
                                <Box>
                                    <Typography variant="body2" paragraph gutterBottom>{product.name}</Typography>
                                    <Typography variant="body2" paragraph gutterBottom>Qty.:{product.quantity}</Typography>
                                    <Typography variant="body2" paragraph gutterBottom>Size:{product.size}</Typography>
                                    <Typography variant="body2" paragraph gutterBottom>Color</Typography>
                                </Box>
                                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                    <Typography variant="body2" gutterBottom>U.S${product.totalPrice}</Typography>
                                    <Button variant="text" sx={{border:"none", color:"#333", textTransform:"lowercase"}} onClick={()=>{
                                            dispatch(cartActions.removefromCart({id:product.id, size:product.size, newId:product.newId, qty:product.quantity}));
                                        
                                        
                                    }}>Remove</Button>
                                </Box>
                            </Box>
                            
                        </Grid>
                    })
                }
            </Grid>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography variant="body2" gutterBottom>Subtotal</Typography>
                <Typography variant="body2" gutterBottom>US${Math.floor(bigTotal)}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography variant="caption" gutterBottom>Delivery</Typography>
                <Typography variant="caption" gutterBottom>Free</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between", mb:"10px"}}>
            <Link to="/cart" style={{textDecoration:"none", color:"inherit"}} ><Button variant="outlined">View shopping bag</Button></Link>
            <Link to="#" style={{textDecoration:"none", color:"inherit"}} ><Button variant="contained">checkout</Button></Link>
            </Box>
            </>}
        </Container>
    )
} 