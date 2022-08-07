import React from 'react';
import {Typography, Grid, Button, Container, Box} from "@mui/material";
import {Link} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ReplayIcon from '@mui/icons-material/Replay';
import {useSelector} from "react-redux";
import AmericanExpress from "../../assets/american-express.png";
import ApplePay from "../../assets/apple-pay.png";
import DinersClub from "../../assets/diners-club.png";
import Paypal from "../../assets/paypal.png";
import Visa from "../../assets/visa.png";
import Symbols from "../../assets/symbols.png";
import Western from "../../assets/western-union.png"
export default function ShoppingBag()
{   
    const products = useSelector((state)=>state.cart.products);
    let bigTotal = 0;
    for (let i=0; i<products.length; i++)
    {
        bigTotal += products[i].totalPrice;
    }
    return( 
        <Container maxWidth="lg">
        <Grid container spacing={5}>
            <Grid item container md={6}>
            <Typography variant="h6" gutterBottom>Shopping Bag ({products.length})</Typography>
            {products.map((item, id)=>{
                return (
                <Grid item container spacing={0.5} justifyContent="space-between" key={id}>
                    <Grid item >
                        <Box sx={{display:"flex", gap:"10px"}}>
                            <img src={item.imageUrl} style={{width:"200px", height:"200px"}} alt="product_img" />
                            <Box>
                                <Typography variant="body2" gutterBottom>Trousers</Typography>
                                <Typography variant="body2" gutterBottom>Qty.:{item.quantity}</Typography>
                                <Typography variant="body2" gutterBottom>Size:{item.size}</Typography>
                                <Typography variant="body2" gutterBottom>{item.color}</Typography>
                            </Box>
                        </Box>
                        <Button variant="text" ><FavoriteBorderIcon /> <Typography variant="caption" sx={{textTransform:"lowercase"}}>Add to Wishlist </Typography></Button>
                        <Button variant="text" ><Typography variant="caption" sx={{textTransform:"lowercase"}}>Remove</Typography></Button>

                    </Grid>
                    <Grid item><Typography variant="caption" gutterBottom sx={{color:"red"}}>US${item.price}</Typography></Grid>
                </Grid>
                )
            })}
            </Grid>
            <Grid item md={6}>
                <Typography variant="h6" gutterBottom>Summary</Typography>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography variant="h6" gutterBottom>Subtotal</Typography>
                <Typography variant="h6" gutterBottom>US${bigTotal}</Typography>
                </Box>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography variant="caption" gutterBottom sx={{color:"#ccc"}}>Delivery</Typography>
                <Typography variant="caption" gutterBottom sx={{color:"#ccc"}}>Free</Typography>
                </Box>
                <Link to="/checkout" style={{textDecoration:"none", color:"inherit"}}><Button variant="contained" size="large" fullWidth>Checkout</Button></Link>
                <Box sx={{display:"flex", flexDirection:"column", gap:"10px" ,my:"20px", justifyContent:"center"}}>
                    <Typography variant="caption" gutterBottom sx={{color:"#ccc"}}> <LocalShippingIcon />  Free standard shipping on orders over US$50</Typography>
                    <Typography variant="caption" gutterBottom sx={{color:"#ccc"}}> <ReplayIcon />  Free returns in 60 days</Typography>
                    <Typography variant="caption" gutterBottom sx={{color:"#ccc"}}> <CreditScoreIcon />  Secure payment</Typography>
                </Box>
                <Typography variant="caption" gutterBottom>We accept</Typography>
                <Box sx={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
                    <img src={AmericanExpress} alt="american-express-logo" aria-label="american-express-logo" style={{width:"50px", aspectRatio:"1/1"}}/>
                    <img src={ApplePay} alt="apple-pay-logo" aria-label="apple-pay-logo" style={{width:"50px", aspectRatio:"1/1"}}/>
                    <img src={DinersClub} alt="diners-club-logo" aria-label="diners-club-logo" style={{width:"50px", aspectRatio:"1/1"}}/>
                    <img src={Paypal} alt="paypal-logo" aria-label="paypal-logo" style={{width:"50px", aspectRatio:"1/1"}}/>
                    <img src={Visa} alt="visa-logo" aria-label="visa-logo" style={{width:"50px", aspectRatio:"1/1"}}/>
                    <img src={Symbols} alt="klarna-logo" aria-label="klarna-logo" style={{width:"50px", aspectRatio:"1/1"}}/>
                    <img src={Western} alt="western-union-logo" aria-label="western-union-logo" style={{width:"50px", aspectRatio:"1/1"}}/>
                </Box>
            </Grid>
            </Grid>
        </Container>
    )
}

// ShoppingBag.propTypes = {
//     products:propTypes.array.isRequired,
//     subtotal:propTypes.number.isRequired
// };