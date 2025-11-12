import { createBrowserRouter } from "react-router";

import About from "./Componants/About";
import App from "./App";
import Root from "./Root";
import Shop from "./Componants/NavAllPage/Shop";
import MegaMune from "./Componants/NavAllPage/MegaMune";
import Blogs from "./Componants/NavAllPage/Blogs";
import Contact from "./Componants/NavAllPage/Contact";

const router= createBrowserRouter([
    {
        path: '/',
        element:<Root/>, 
        children:[
            {
                path:'/',
                element:<App/>
            },
             {
                path:'/about',
                element:<About/>
            },
             {
                path:'/shop',
                element:<Shop/>
            },
             {
                path:'/Megemanu',
                loader:()=>fetch('/megamenu.json'),
                element:<MegaMune/>
            },
             {
                path:'/blogs',
                loader: ()=>fetch("/blogs.json"),
                
                
                element:<Blogs/>,
               
            },
             {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])
export default router