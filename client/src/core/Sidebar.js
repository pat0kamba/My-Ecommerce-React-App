import React from "react";
import {Box, Divider, IconButton} from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StoreIcon from '@mui/icons-material/Store';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector, useDispatch} from 'react-redux';
import {cartActions} from "../store/cartSlice.js";
import {Link} from "react-router-dom";
import "../styles/Navbar.css"
export default function Sidebar()
{   const dispatch = useDispatch();
    const menu = useSelector((state)=>state.cart.menu);
    return(
        <Box className="side_box">
            { menu && <Box className="sidebar" > 
                <Box sx={{display:"flex", flexDirection:"column", gap:"15px", position:"relative"}}>
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Link to="/men">MEN</Link>
                    <IconButton className="close_icon" onClick={()=>{dispatch(cartActions.setMenu())}}><CloseIcon  /></IconButton>
                    </Box>
                    <Box>
                    <Link to="/women">WOMEN</Link>
                    </Box>
                    <Box>
                    <Link to="/teen">TEEN</Link>
                    </Box>
                    <Box>
                    <Link to="/home">HOME</Link>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{display:"flex", flexDirection:"column", gap:"15px", justifyContent:"center"}}>
                    <Link to="/sign" className="link_style"> <PersonOutlineIcon /> Sign in | Create account</Link>
                    <Link to="#" className="link_style"> <WorkOutlineIcon /> My purchases</Link>
                    <Link to="/wishlist" className="link_style"> <FavoriteBorderIcon /> Wishlist</Link>
                    <Link to="#" className="link_style"> <StoreIcon /> Store locator</Link>
                    <Link to="#" className="link_style"> <HelpOutlineIcon /> Help</Link>
                    <Link to="#" className="link_style"> <LanguageIcon /> USA</Link>
                </Box>
                
            </Box>}
        </Box>
    )
}