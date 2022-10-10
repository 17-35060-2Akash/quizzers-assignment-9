import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/about',
                element: <About></About>,
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);