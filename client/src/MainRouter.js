import React from "react";
import { Routes, Route} from "react-router-dom";
import Women from "./pages/Women/Women.js";
import Hats from "./pages/Women/Hats.js";
import Shirts from "./pages/Women/Shirts.js";
import Sportwear from "./pages/Women/Sportwear.js";
import Bags from "./pages/Teen/Bags.js";
import Jumpsuit from "./pages/Teen/Jumpsuit.js";
import Scrunchies from "./pages/Teen/Scrunchies.js";
import Teen from "./pages/Teen/Teen.js";
import Coats from "./pages/Men/Coats.js";
import Men from "./pages/Men/Men.js";
import Pants from "./pages/Men/Pants.js";
import Shoes from "./pages/Men/Shoes.js";
import Bed from "./pages/Home/Bed.js";
import Duvet from "./pages/Home/Duvet.js";
import Towel from "./pages/Home/Towel.js";
import Homes from "./pages/Home/Homes.js";
import ShoppingBag from "./pages/Selling/ShoppingBag.js";
import Wishlist from "./pages/Selling/Wishlist.js";
import Selling from "./pages/Selling/Selling.js";
import Signin from "./auth/Signin.js";
import Home from "./core/Home.js";
import Item from "./core/Item.js";
import Checkout from "./pages/Selling/Checkout.js";
 

export default function MainRouter()
{
    return (
        <>
                <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route index element={<Women />} />
                        <Route path="women" element={<Item />}>
                            <Route index element={<Women />} />
                            <Route path="hats" element={<Hats />} />
                            <Route path="shirts" element={<Shirts />} />
                            <Route path="sportswear" element={<Sportwear />} />
                        </Route>


                    <Route path="teen" element = {<Item />} >
                        <Route index element={<Teen />} />
                        <Route path="bags" element={<Bags />} />
                        <Route path="jumpsuits" element={<Jumpsuit />} />
                        <Route path="scrunchies" element={<Scrunchies />} />
                    </Route>

                    <Route path="men" element={<Item />} >
                        <Route index element={<Men />} />
                        <Route path="coats" element={<Coats />} />
                        <Route path="pants" element={<Pants />} />
                        <Route path="shoes" element={<Shoes />} />
                    </Route>
                    

                    <Route path="home" element={<Item />}>
                        <Route index element={<Homes />} />
                        <Route path="duvet%20cover" element={<Duvet />} />
                        <Route path="Towels" element={<Towel />} />
                        <Route path="bed%20spread" element={<Bed />} />
                    </Route>
                   

                    {/* Need to protect these Routes */}
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/cart" element={<ShoppingBag />} />
                    <Route path="/selling/*" element={<Selling />} />
                    <Route path="/checkout" element={<Checkout />} />
                    
                </Routes>
              
        </>
    )
}