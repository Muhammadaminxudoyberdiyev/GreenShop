import Search from "./pages/Search";
import RootLayout from "./layout/Root.layout";
import Layout from "./layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import PageNotFound from "./pages/PageNotFound";  
function App() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <RootLayout />,
        },
        {
          path: "search",
          element: <Search/>
        },
        {
          path: "shop",
          element: <Shop/>
        },
        {
          path: "*",
          element: <PageNotFound/>
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
