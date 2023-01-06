import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Main from "./Main";
import RoutineCard from "./RoutineCard/RoutineCard";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/createRoutine',
                element:<RoutineCard></RoutineCard>
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])
