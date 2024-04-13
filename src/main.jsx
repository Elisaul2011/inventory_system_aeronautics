import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login.jsx";
// import Dashboard from "./routers/Dashboard.jsx";
import Home from './components/home.jsx'
import Almacen from './inventarios/almacen.jsx'
import "./App.css";
import Prestar from './inventarios/prestar.jsx'
import Inspeccion from './inventarios/Inspeccion.jsx'
import Inventarios from './components/inventarios.jsx' 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ProtectedRoute} from "./routers/ProtectedRoute.jsx";
import { AuthProvider } from "./auth/authProvider.jsx";
import DefaultLayout from "./layout/defaultLayonut.jsx";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
import "primeicons/primeicons.css";
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/",
    element: <ProtectedRoute><DefaultLayout /></ProtectedRoute>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/inventarios",
        element: <Inventarios />,
      },
      {
        path: "/almacen",
        element: <Almacen />
      },
      {
        path: "/inspeccion",
        element: <Inspeccion />
      },
      {
        path: "/prestar-componente",
        element: <Prestar/>
      },
      //{
        //path: "/prestar-componente"
        //element: <Prestar/>
      //}
      {
        path: "*",
        element: <Home />
      }
      //{
        //path: "/historial",
        //element: <Historial/>      //FALTA
      //}
      //{
        //path: "/Usuario",
        //element: <Usuario />,      //FALTA
      //},
      //{
        //path: "/descartar-componente"
        //element: <Descartar/>
      //}
      //{
        //path: "/shelf-life"
        //element: <Shelflife/>
      //}
      //{
        //path: "/historial-componente"
        //element: <Historial Componente/>
      //}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PrimeReactProvider value={{ unstyled: false, pt: Tailwind}}>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </AuthProvider>
  </React.StrictMode>

);