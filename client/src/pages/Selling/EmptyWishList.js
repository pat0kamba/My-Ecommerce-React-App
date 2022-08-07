import React from 'react';
import {Typography, Container} from '@mui/material';

export default function EmptyWishList()
{
    return(
        <Container maxWidth="xs" sx={{textAlign:"center", py:"20px", my:"10px"}}>
            <Typography variant="h6" gutterBottom>Wishlist</Typography>
            <Typography variant="body2" gutterBottom>Your wishlist is empty.</Typography>
            <Typography variant="body2" paragraph gutterBottom>
            Save the items you like most so you don't lose sight of them.
            </Typography>
        </Container>
    )
}