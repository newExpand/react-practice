import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";

// JSX코드로 라우트를 설정했던 방식(예전엔 이랬음)
// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<Products />} />
//     </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <Products /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;