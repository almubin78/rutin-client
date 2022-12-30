import { createBrowserRouter } from "react-router-dom";
import DatePic from "./DatePic";
import Error from "./Error";
import Main from "./Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/createRoutine',
                element:<DatePic></DatePic>
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])
