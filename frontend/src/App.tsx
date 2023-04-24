import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Registration from "./pages/Registration";
import PlanPay from "./pages/PlanPay";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignIn from "./components/SignIn";
import Forgotpassword from "./pages/Forgotpassword";
import Combine from "./pages/main/combine";


function AppRouter() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
    
        <Route path="/api/auth/login" element={<Login />} />
        <Route path="/api/auth/forgotpassword" element={<Forgotpassword />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/api/auth/register" element={<Registration />} />
        <Route path="/planpay" element={<PlanPay />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/combine" element={<Combine />} />
   
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


