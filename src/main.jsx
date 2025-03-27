import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import BlogPage from "./Components/Home/BlogPage.jsx";
import DropSelectedPage from "./Components/Home/dropSelectedPage.jsx";
import BlogDetails from "./Components/Home/Blogdetails.jsx";
import About from "./Components/Home/About.jsx";
import ProductDesciptionPage from "./Components/Home/Product_DescriptionPage.jsx";
import Wishlist from "./Components/Home/Wishlist.jsx";
import { WishlistProvider } from "./Components/Home/Context/WishlistContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/BlogPage",
        element: <BlogPage />,
      },
      {
        path: "/BlogPage/:id",
        element: <BlogPage />,
      },
      {
        path: "/BlogPage/:id/:category",
        element: <BlogPage />,
      },
      {
        path: "/dropSelectedPage",
        element: <DropSelectedPage />,
      },
      {
        path: "/BlogDetails",
        element: <BlogDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/productDescriptionpage/:id",
        element: <ProductDesciptionPage />,
      },
      {
        path: "/:category",
        element: <BlogPage />,
      },
      {
        path: "/:category/:subcategory",
        element: <BlogPage />,
      },
      {
        path: "/:category/:subcategory/:product",
        element: <BlogPage />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      ,
      {
        path: "/wishlist/:name",
        element: <Wishlist />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  </StrictMode>
);
