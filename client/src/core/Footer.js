import React from 'react';
import {Typography, Button, Link, TextField, Container, Box} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useState} from 'react';
import "../styles/Footer.css"

export default function Footer()
{
    const [value, setValue] = useState('');

    const handleChange = (event)=>{
        setValue(event.target.value);
    }
    return(
        <Container maxWidth="xlg" component="footer" sx={{textAlign:"center", borderTop:"1px solid #ccc"}}>
            
            <Container maxWidth="xs">
                <Typography variant="body2" paragraph gutterBottom sx={{my:"30px"}}>
                Receive exclusive promotions, private sales and news  
                </Typography>
                <TextField type="text" value={value} onChange={handleChange} placeholder="Enter your e-mail" autoFocus fullWidth variant="standard" sx={{mb:"20px"}}/>
                <Button variant="contained" fullWidth size="medium" sx={{my:"15px", backgroundColor:"#333"}}>Subscribe</Button>
            </Container>
            <Container maxWidth="sm" sx={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"10px", my:"30px"}}>
                <Link href="#" underline="none" color="black">Help</Link>
                <Link href="#" underline="none" color="black">My purchases</Link>
                <Link href="#" underline="none" color="black">Returns</Link>
                <Link href="#" underline="none" color="black">Stores</Link>
                <Link href="#" underline="none" color="black">Company</Link>
                <Link href="#" underline="none" color="black">Franchises</Link>
                <Link href="#" underline="none" color="black">Affiliate</Link>
                <Link href="#" underline="none" color="black">Work for Mango</Link>
                <Link href="#" underline="none" color="black">Press</Link>
                <Link href="#" underline="none" color="black">Mango Outlet</Link>
                <Link href="#" underline="none" color="black">Site map</Link>
                <Link href="#" underline="none" color="black">Sustainability</Link>
            </Container>
            <Container maxWidth="sm">
                <Box sx={{display:"flex", justifyContent:"center", gap:"10px"}}>
                    <Link href="#" underline="none" color="black"><FacebookIcon /></Link>
                    <Link href="#" underline="none" color="black"><TwitterIcon /></Link>
                    <Link href="#" underline="none" color="black"><InstagramIcon /> </Link>
                    <Link href="#" underline="none" color="black"><PinterestIcon /> </Link>
                    <Link href="#" underline="none" color="black"><YouTubeIcon /></Link>
                </Box>
            </Container>
            <Container maxWidth="sm">
                <Typography variant="caption" component="span" gutterBottom sx={{color:"#ccc"}}>
                © {new Date().getFullYear()} Mango All rights reserved
                </Typography>
                <Typography variant="caption" component="span" gutterBottom sx={{color:"#ccc"}}>
                    <Link href="#" underline="none" sx={{color:"#ccc"}}>  Private Policies and Cookies</Link> | 
                    <Link href="#" underline="none" sx={{color:"#ccc"}}> Terms & Conditions</Link> |
                    <Link href="#" underline="none" sx={{color:"#ccc"}}>ADA</Link>
                </Typography>
            </Container>

        </Container>
    )
}