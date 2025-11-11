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
                element:<MegaMune/>
            },
             {
                path:'/blogs',
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