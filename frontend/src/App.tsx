/*import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loader from "./components/Loader";
const Login = lazy(() => import("./pages/Login"));
const Registration = lazy(() => import("./pages/Registration"));

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const { user, loading } = useAuth();
  if (!user && !loading) {
    return <Navigate to="/login" />;
  }
  return children;
}

function RouteError() {
  return (
    <article className="m-4 grid place-content-center gap-2 p-4">
      <h1 className="text-4xl">The page you're looking for doesn't exist</h1>
      <p className="text-2xl">
        Browse more content{" "}
        <Link className="text-netflixRed" to="/browse">
          here
        </Link>
      </p>
    </article>
  );
}

function AppRouter() {
  const { loading, user } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
          errorElement={<RouteError />}
        >
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
      </>
    )
  );
  return loading ? (
    <Loader />
  ) : (
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={router}></RouterProvider>
    </React.Suspense>
  );
}

export default function App() {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  );
}*/

import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import NotFound from "./components/NotFound";
import PopularMovies from "./components/PopularMovies";

import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Registration from "./pages/Registration";
import PlanPay from "./pages/PlanPay";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignIn from "./components/SignIn";
import Email from "./pages/Email";

function AppRouter() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
    
        <Route path="/login" element={<Login />} />
        <Route path="/email" element={<Email />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/planpay" element={<PlanPay />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/landing" element={<SignIn />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFound />} />
        
   
      </>
    )
  );
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default function App() {
  return (
    <AppRouter />
  );

}


