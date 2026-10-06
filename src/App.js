import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";

// import GroceryApp from "./components/GroceryApp"; // => Only load on demand 

const GroceryApp = lazy(()=> import("./components/GroceryApp"))


const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                index:true,
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/resturant/:resId',
                element:<ResturantMenu/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading....</h1>}><GroceryApp/></Suspense>
            },
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);