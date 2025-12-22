

import Login from "./pages/Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./pages/SignUp"

export const myroute = createBrowserRouter([
 {path:"/",element:<Login/>},
 {path:"/logn",element:<Login/>},
 {path:"/register",element:<SignUp/>}

])

export default function App() {
  return (
   <>
<RouterProvider router={myroute}/>
   </>
  )
}
