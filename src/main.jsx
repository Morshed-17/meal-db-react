import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import Categories from "./components/CategoriesBtn/CategoriesBtn.jsx";
import CategoryCards from "./components/CategoryCards/CategoryCards.jsx";
import SingleMeal from "./components/SingleMeal/SingleMeal.jsx";
import { InfinitySpin } from "react-loader-spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'user/:userId', 
        element: <User/>
      },
      {
        path: '/categories',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Categories/>
      },
      {
        path: 'categories/:catId',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catId}`),
        element: <CategoryCards/>
      },
      {
        path: 'meal/:mealId',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <SingleMeal/>
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
