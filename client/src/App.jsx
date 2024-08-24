import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigation } from "./components/UserComponents/navigation";
import { Header } from "./components/UserComponents/header";
import { About } from "./components/UserComponents/about";
import { Services } from "./components/UserComponents/services";
import { Gallery } from "./components/UserComponents/gallery";
import { Team } from "./components/UserComponents/Team";
import { Contact } from "./components/UserComponents/contact";
import Login from "./components/UserComponents/loginPage";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/dashboard/mainLayouts/index";
import ProtectedRoute from "./store/protectedRoute";
import ImageGallery from "./views/pages/admin/gallaryUpload";
import Test from "./views/pages/admin/test";
// import MainRoutes from "./routes/MainRoutes";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [PageData, setPageData] = useState({});

  useEffect(() => {
    setPageData(JsonData);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navigation id="rootDiv" />
          <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
          <Header data={PageData.Header} />
          <About data={PageData.About} />
          <Services data={PageData.Services} />
          <Gallery data={PageData.Gallery} />
          <Team data={PageData.Team} />
          <Contact data={PageData.Contact} />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: (
        //   // <ProtectedRoute>
        <MainLayout />
        //   {/* </ProtectedRoute> */}
      ),
      children: [
        {
          path: "imageGallery", // Use relative path here
          element: <ImageGallery />, // Ensure you have this component
        },
        {
          path: "test", // Use relative path here
          element: <Test />, // Ensure you have this component
        },
      ],
    },
    // MainRoutes,
    // LoginRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export default App;
