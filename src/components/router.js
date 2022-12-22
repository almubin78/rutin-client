import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Main from "./Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>
    },
    {
        path:'*',
        element:<Error></Error>
    }
])
