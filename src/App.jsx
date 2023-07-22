import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Home } from "./pages/home/Home";

function App() {

  const Layout = ()=> {
    return (
      <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
        path:"/",
        element: <Home />
      },
        {
        path:"/",
        element: <Home />
      },
        {
        path:"/",
        element: <Home />
      },
        {
        path:"/",
        element: <Home />
      },
        {
        path:"/",
        element: <Home />
      },
        {
        path:"/",
        element: <Home />
      },
        {
        path:"/",
        element: <Home />
      },
        {
        path:"/",
        element: <Home />
      },
    ]
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
