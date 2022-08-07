import * as React from "react";
import {Typography, Button, Divider, TextField, Container, 
Box, Tab, Dialog, DialogContent, DialogContentText, DialogActions} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {create} from "../core/api-user.js";
import {signin} from "./api-auth.js";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {auth} from "./auth-helper.js";
import {cartActions} from "../store/cartSlice.js"

export default function Signin()
{   const dispatch = useDispatch();
    const wishList = useSelector((state)=>state.cart.wishlist);
    const products = useSelector((state)=>state.cart.products);
    const badgeCart = useSelector((state)=>state.cart.badgeCart);
    const navigate = useNavigate();
    const [value, setValue] = useState({
        email:'',
        phone:'',
        password:'',
        error:'',
        wishlist:[],
        cart:[],
        badge:0,
        open:false
        });
    const [tab, setTab] = useState('1')
    const handleChange = name => event =>{
        setValue({...value, [name]:event.target.value});
    }
    function handleTab(event, newValue)
    {
        //console.log(newValue);
        setTab(newValue);
    }

    function handleSubmit(){
        const user ={
            email : value.email || undefined,
            phone : value.phone || undefined,
            password : value.password || undefined,
            wishlist:wishList,
            cart:products,
            badge:badgeCart
        }
        
        create(user).then((data)=>{
            if(data.error)
            {
                setValue({...value, error:data.error})
            }else{
                console.log(data);
                setValue({...value, error:"", email:"", phone:"", password:"", open:true});
                
                
            }
                  
    });
    console.log(value);
        
    }

    function handleClose()
    {
        value.open = false;
    }

    function handleSignin()
    {
        const user = {
            email : value.email || undefined,
            password : value.password || undefined
        };
        signin(user).then((data)=>{
            console.log(data);
            if(data.error){ 
                setValue({...value, error:data.error})
            }else{
                auth.authenticate(data, () => {
                    setValue({ ...value, error: ''});
                    console.log(data.item.badge);
                    console.log(data.item.badge);
                    console.log(data.item.wishlist);
                    dispatch(cartActions.setShoppingCart(data.item.cart));
                    dispatch(cartActions.setWishList(data.item.wishlist));
                    dispatch(cartActions.setBadge(data.item.badge));
                    dispatch(cartActions.setSignIn());
                    navigate('/');
                  });
                
                  console.log(products);
                  console.log(badgeCart);
                
            }
        })

    }
    return(
    <Container maxWidth="xs">
        <TabContext sx={{height:"100%"}} value={tab}>
            <Box sx={{borderBottom:1, borderColor:"divider"}}>
                <TabList onChange={handleTab}>
                    <Tab label="Login" value="1" />
                    <Tab label="Register" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
              <TextField type="text" value={value.email} onChange={handleChange("email")} variant="standard" placeholder="E-mail" fullWidth margin="normal" required />
              <TextField type="password" value={value.password} onChange={handleChange("password")} variant="standard" placeholder="Password" fullWidth margin="normal" required sx={{marginBottom:"40px"}} />
              <TextField type="checkbox" id="check"/>
              <label style={{marginLeft:"10px"}}>Keep me logged in</label>
              <Button variant="contained" fullWidth sx={{mt:"30px"}} onClick={handleSignin}>Enter</Button>
              {value.error && <Typography variant="body2" paragraph gutterBottom color="error">{value.error}</Typography> }
              <Box sx={{textAlign:"center", my:"15px"}}>
              <Link to="/recover" sx={{color:"#ccc"}} >Forgotten your password</Link>
              </Box>
              <Divider />
              <Box sx={{textAlign:"center", my:"15px"}}>
              <Typography variant="caption" component="span" gutterBottom align="center">Don't have an account?</Typography> 
              <Link to="/signin"><Button onClick={()=>{setTab("2")}}>Register</Button></Link>
              </Box>
            </TabPanel>
            <TabPanel value="2">
                <Container maxWidth="xs">
                    <Typography variant="h5" gutterBottom>Create an account</Typography> 
                    <TextField type="text" value={value.email} onChange={handleChange("email")} variant="outlined" placeholder="E-mail" fullWidth margin="normal" required />
                    <TextField type="password" value={value.password} onChange={handleChange("password")} variant="outlined" placeholder="Password" fullWidth margin="normal" required />
                    <TextField type="text" value={value.phone} onChange={handleChange("phone")} variant="outlined" placeholder="Mobile" fullWidth margin="normal" />
                    <Button variant="contained" fullWidth sx={{my:"15px"}} onClick={handleSubmit}>Create account</Button>
                    {value.error && <Typography variant="body2" paragraph gutterBottom color="error">{value.error}</Typography> }
                    <Typography variant="caption" component="span" gutterBottom sx={{color:"#ccc"}}>Already have an account?</Typography>
                    <Link to="/signin" sx={{color:"#333"}}><Button onClick={()=>{setTab("1")}}>Sign in</Button></Link>
                    <Typography variant="caption" paragraph sx={{color:"#ccc"}}>By creating an account, you confirm that you have read our <Link to="#" sx={{color:"#ccc"}}>Privacy Policy </Link> 
                    and agree that we will process your data to offer you personalised content. You can object to said processing</Typography>
                </Container>
                <Dialog open={value.open} disableEscapeKeyDown={true} onBackdropClick={handleClose}>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="body2" color="success">Account created Successfully</Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signin"><Button color="secondary" onClick={()=>{setTab('1'); handleClose()}}>SIGN IN</Button></Link>
                    </DialogActions>
                </Dialog>
            </TabPanel>
        </TabContext>
    </Container>
    )
}