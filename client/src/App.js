import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

const Layout = () => {

//============================================
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {  
        path:'/post/:id',
        element:<Single />
      },
      {
        path:'/write',
        element:<Write />,
      },
      {
        path:'/settings',
        element:<Settings />,
      },
    ]
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
]);

function App() {

  const {user} = useContext(Context)

//============================================
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;








