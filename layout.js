import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./main";



const Layout = () => {


 return(
    <div>
        <BrowserRouter>
        <Switch>
            <Route exact path="/main">
<Main/>
            </Route>







        </Switch>
          </BrowserRouter>




    </div>



 );

};

export default Layout;