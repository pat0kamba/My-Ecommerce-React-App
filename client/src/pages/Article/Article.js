import React from 'react';
import {Typography, Grid, Box, Container, Button} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {cartActions} from "../../store/cartSlice.js";
import "../../styles/Product.css";

 
export default function Article(props)
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishArray = useSelector((state)=>state.cart.wishArray);
    let description;
    let image_src;
    let price;
    let name;
    let article_id;
    let article_size;
    const handleItem = (describe, image, tag, theId, theName, theSize)=>{
        description = describe;
        image_src = image;
        price = tag;
        article_id = theId;
        name = theName;
        article_size = theSize

        navigate(`/selling/${props.category.toLowerCase()}/${props.sub_category.toLowerCase()}/${name}`, {state:{name:name, price:price, imageUrl:image_src, description:description, category:props.category, sub_category:props.sub_category, id:article_id, size:article_size}});
    }
   
    const handleClickSize = (theName, tag, image, theSize, theId )=>{
        dispatch(cartActions.addToCart({
            name:theName,
            price:tag,
            imageUrl:image,
            size:theSize,
            id:theId
                }));

        dispatch(cartActions.displayCart());
    }
       
    const handleAddWish = (theName, tag, image, theId)=>{
        dispatch(cartActions.addToWishlist({
            name:theName,
            price:tag,
            imageUrl:image,
            id:theId
        }));
    }

    const handleRemoveWish = (theId)=>{
        dispatch(cartActions.addToWishlist({
            id:theId
        }));
       
    }
    
    
    
    return(
        <Container maxWidth="xlg" sx={{my:"20px", px:"0"}}>
            <Grid container sx={{px:"0"}} spacing={0.5} justifyContent="space-between">
            { props.articles[1].map((article, id)=>{
                
                const Image = article.ImageUrl;
                return(<Grid item xs={12} md={3} key={id} >
                        <Box  className="stacked">
                        <img src={Image} style={{width:"100%", height:"100%"}} alt="Shirt-img" className="product_img" 
                        onClick={()=>{handleItem(article.description, article.ImageUrl, article.price, article.id, article.name, article.sizes)}}   
                        />
                        <Box className="gridContent">
                        <Box className="sizes" sx={{textAlign:"center"}}>
                        <Typography variant="body2" gutterBottom>Add size</Typography>    
                            {   article.sizes.map((size)=>{
                                    return <Button variant="text" sx={{mb:"20px"}} size="small" onClick={()=>{handleClickSize(article.name, article.price, article.ImageUrl, size, article.id)}}>{size}</Button>
                            })
                            }        
                            
                        </Box>

                        <Box sx={{display:"flex", justifyContent:"space-between"}}>
                        <Typography variant="body2" gutterBottom color="secondary">{article.name}</Typography>

                        <Button onClick={()=>{
                        // localStorage.setItem('theId', article.id);
                        let temp = true ;
                        for (let i=0; i<wishArray.length+1 ; i++)
                        {
                            if (article.id === wishArray[i] && document.getElementById(article.id).style.color==="red")
                            {
                                temp = false;                       
                                handleRemoveWish(article.id);
                             
                                break;

                            }
                           
                        }            
                        temp && handleAddWish(article.name, article.price, article.ImageUrl, article.id);
                        temp ? document.getElementById(article.id).style.color='red' : document.getElementById(article.id).style.color='blue' ;
                        dispatch(cartActions.setWish(article.id));
                        } } id={article.id} ><FavoriteBorderIcon />
                       {/* {
                        (article.id == localStorage.getItem('theId')) ? <FavoriteIcon sx={{color:'red'}}/> : <FavoriteBorderIcon />
                       } */}
                        </Button>
                        
                        </Box>
                        <Typography variant="body2" gutterBottom color="secondary">US${article.price}</Typography>

                        </Box>
                        </Box>
                       
                </Grid>)})}
            </Grid>
            
        </Container>
    )


}

// have a temporary array where ids can be pushed
// at each event , check if id is in the array
// if so, turned the state to false
// else continue