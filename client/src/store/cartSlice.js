import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
const cartSlice = createSlice({
    name:"cart",
    initialState:{products:[], badgeCart:0, showCart:false, wishlist:[], wish:true, menu:false, signIn:true, wishArray:[]},
    reducers:{
        addToCart(state, action){
            const newItem = action.payload;
            console.log(newItem);
            const existingItem = state.products.find((item)=>(item.id === newItem.id && item.size === newItem.size));
            console.log(existingItem);
            if(existingItem){
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice += newItem.price;
                state.badgeCart = state.badgeCart + 1;
                // existingItem.id = uuidv4();
                console.log(existingItem.id);
            }else{ 
                state.products.push({
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.name,
                    id:newItem.id ,
                    newId:uuidv4(),
                    imageUrl:newItem.imageUrl,
                    size:newItem.size
                });
                state.badgeCart = state.badgeCart + 1;
            }
            
            
        },
        removefromCart(state, action){
            const detail = action.payload;
            console.log(detail.size);
            const existingItem = state.products.find((item)=>item.id === detail.id && item.size === detail.size);
            console.log(existingItem.size);
            console.log(detail.qty);
            if(existingItem.quantity === 1 )
            {
                state.products = state.products.filter((item)=>(item.newId !== detail.newId));
               
            }else{

                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.badgeCart = state.badgeCart - 1;
        },
        displayCart(state){
            state.showCart = !state.showCart;
        }, 
        addToWishlist(state, action){
            const wish = action.payload;
            console.log(wish);
            console.log(state.wishlist);
            const existingItem = state.wishlist.find((item)=>(item.id || item._id) === wish.id);
            if (existingItem){
                state.wishlist = state.wishlist.filter((item)=>(item.id || item._id) !== existingItem.id)
            }else{
                state.wishlist.push({
                    name:wish.name,
                    price:wish.price,
                    imageUrl:wish.imageUrl,
                    id:wish.id 
                });
            }
            
            state.wish = !state.wish;
            
        },
        setBadge(state, action){
            const badge = action.payload;
            state.badgeCart = badge;
        },
        setShoppingCart(state, action)
        {
            const cart = action.payload;
            state.products = cart;
        },
        setWishList(state, action)
        {
            const wishList = action.payload;
            state.wishlist = wishList;
        },
        setMenu(state){
            state.menu = !state.menu;
        },
        setSignIn(state){
            state.signIn = !state.signIn;
        },
        setWish(state, action)
        {
            state.wishArray.push(action.payload);
        }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;