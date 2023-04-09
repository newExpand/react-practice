import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

// JSX코드로 라우트를 설정했던 방식(예전엔 이랬음)
// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<Products />} />
//     </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/products", element: <ProductsPage /> },
            { path: "/products/product-1", element: <ProductDetail /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
