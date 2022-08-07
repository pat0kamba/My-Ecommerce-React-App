import React from 'react';
import {Typography, AppBar, Toolbar, Grid, Badge, Box, IconButton, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import {useSelector, useDispatch} from "react-redux";
import {cartActions} from "../store/cartSlice.js";
import MangoLogo from "../assets/Mango_logo.png";
import {useNavigate, useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import Sidebar from "./Sidebar.js";
import "../styles/Navbar.css";

export default function Navbar()
{
    let value = useSelector((state)=>state.cart.badgeCart);
    let wishlist = useSelector((state)=>state.cart.wishlist);
    const menu = useSelector((state)=>state.cart.menu);
    const signIn_btn = useSelector((state)=>state.cart.signIn);
    let showMenu = "none";
    const location = useLocation();
    console.log(location);
    const [search, setSearch] = useState(false);
    const [input, setInput] = useState('');
    const [windowSize, setWindowSize] = useState({
        width:undefined,
        height:undefined
    });
    const [menu_icn, setMenuIcn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function displayCart()
    {
        dispatch(cartActions.displayCart());
    };

    function wishList(){
        navigate('/wishlist', {state:{products:wishlist}});
    }

    function handleSearch()
    {
        setSearch(!search);
    }

    function handleChange(e)
    {
        setInput(e.target.value);
    }

    function handleSignOut()
    {
        //TODO  will also make sure to update the badge, wishlist and cart before signing out
        dispatch(cartActions.setShoppingCart([]));
        dispatch(cartActions.setWishList([]))
        dispatch(cartActions.setBadge(0));
        navigate('/');
    }
    
    useEffect(()=>{
        function reSize()
        {
            const theWidth = window.innerWidth;
            const theHeight = window.innerHeight;
            setWindowSize((prev)=>({...prev,
                width:theWidth,
                height:theHeight
            }));
            
            console.log('inside the resize function')
            console.log(theWidth);
            if(theWidth < 768)
            {
            setMenuIcn(true);
            }else{
            setMenuIcn(false);
            }

        };
       

        console.log(windowSize.width);
        console.log(window.innerWidth);

        reSize();

        if(window.attachEvent) {
            window.attachEvent('onresize',reSize);
        }
        else if(window.addEventListener) {
            window.addEventListener('resize', reSize, true);
        }
        // else {
        //     //The browser does not support Javascript event binding
        // }

        return ()=>{
            window.removeEventListener('resize', reSize);
            window.detachEvent('resize', reSize);
        }
    }, [])
   
    
       
    
    return(
        <AppBar position="static">
            { menu && <Sidebar />}
            <Toolbar sx={{backgroundColor:'#fff', color:"#333", padding:"0"}}>
                <Grid container justifyContent="space-between" alignItems="center">
                {search ? <Box sx={{display:"flex", alignItems:"center"}}>
                        <SearchIcon />
                        <input type="input" value={input} onChange={handleChange} placeholder="Search ..." style={{border:"none", width:"100%", padding:"10px"}} />
                    </Box> :
                    <>
                   {menu_icn && <IconButton className="menu" sx={{display:{showMenu}}} onClick={()=>{dispatch(cartActions.setMenu())}}><MenuIcon /></IconButton>} 
                    <Grid item className="nav-category">
                        <Link to="/women" style={{textDecoration:"none", color:"#333"}}>Women</Link>
                        <Link to="/men" style={{textDecoration:"none", color:"#333"}}>Men</Link>
                        <Link to="/teen" style={{textDecoration:"none", color:"#333"}}>Teen</Link>
                        <Link to="/home" style={{textDecoration:"none", color:"#333"}}>Home</Link>
                    </Grid>
                    <Grid item alignItems="center" justifyContent="center">
                   <Link to="/" style={{textDecoration:"none", color:"inherit"}}> <img src={MangoLogo} style={{width:"150px"}} alt="Mango Logo" /> </Link>
                    </Grid>
                    </>
                }
                    <Grid item sx={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
                        <Box sx={{display:"inline-block", textAlign:"center", pt:"3px"}} className="shopping" onClick={handleSearch}>
                            {search? 

                            <><CancelIcon/><Typography variant="body2">Close</Typography></> : 
                            <><SearchIcon /> <Typography variant="body2" className="link-name">Search</Typography></>}
                        </Box>
                        {signIn_btn ? <Link to="/signin" style={{textDecoration:"none", color:"#333",textAlign:"center"}}>
                            <PersonOutlinedIcon />
                            <Typography variant="body2" className="link-name">Sign in</Typography>
                        </Link>
                        : <Button variant="outlined" color="secondary" onClick={()=>{dispatch(cartActions.setSignIn()); handleSignOut()}}>SIGN OUT</Button>}
                        <Box sx={{display:"inline-block", textAlign:"center", pt:"3px"}} className="shopping">
                            <FavoriteBorderOutlinedIcon onClick={wishList}/>
                            <Typography variant="body2" className="link-name">Wishlist</Typography>  
                        </Box>
                        <Box sx={{display:"inline-block", textAlign:"center", pt:"3px"}} className="shopping">
                            <Badge badgeContent={value} color="primary">
                            <ShoppingBagOutlinedIcon color="action" onClick={displayCart}/>
                            </Badge>
                            <Typography variant="body2" className="link-name">Shopping Bag</Typography> 
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}