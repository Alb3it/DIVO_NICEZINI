import { useRoutes } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import Home from "@/routes/Home";
import NoAccess from "@/components/errorPage/NoAccess";
import IndexMap from "@/routes/IndexMap";
import System from "@/routes/System";
import Growth from "./routes/Growth";

export default function App(){

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/index-map', element: <IndexMap /> },
        { path: '/system', element: <System /> },
        { path: '/growth', element: <Growth /> },
        { path: '/*', element: <NoAccess /> },
      ],
    },
    {
      path: '/',
      element: <Layout sticky />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
  ];

  return useRoutes(routes);
}