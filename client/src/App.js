import { useContext } from "react";
import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Router, //???
  Routes, //??
  Route,
  Outlet,
  Navigate,
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
        // canActivate: (user) => user ? true: <Navigate to="/login" />,
        
      },
      {
        path:'/settings',
        element:<Settings />,
        // canActivate: (user) => user ? true: <Navigate to="/register" /> ,

      },
    ]
  },
  {
    path: '/register',
    element: <Register/>,
    // canActivate: () => user ? <Navigate to="/" /> : true,
  },
  {
    path: '/login',
    element: <Login/>,
    // canActivate: () => user ? <Navigate to="/" /> : true,
  },
]);

function App() {

  const {user} = useContext(Context)



  return (
    <div>
      {/* <Navbar />
      <Register /> */}
       <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;








