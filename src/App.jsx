import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

import Home from "./pages/home.jsx";
import SignIn from "./pages/Sign_in";
import SignUp from "./pages/Sign_Up";
import CheckEmail from "./components/checkEmail.jsx";
import ResetPassword from "./components/resetPassword.jsx";
import Payment from "./components/payment.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import { Classroom } from "./DashbordComponent/DashbordContent.jsx";
import Dashboard from "./pages/Dashbord.jsx";
import { Account } from "./DashbordComponent/account.jsx";
import { LiveSession } from "./DashbordComponent/liveSession.jsx";
import { Community } from "./DashbordComponent/community.jsx";
import { HotNew } from "./DashbordComponent/hotNew.jsx";
import { TopEarners } from "./DashbordComponent/topEarner.jsx";
import { Settings } from "./DashbordComponent/settings.jsx";
import { Logout } from "./DashbordComponent/logout.jsx";
import { Bonus } from "./DashbordComponent/BonusPage.jsx";
import DashboardRoute from "./Layout/DashbordLayout/DashbordLayout.jsx";

function App() {
  return (
    <>
      {/* <HashRouter> */}
      <Routes>
        {/* landing page route */}
        <Route path="/" element={<Home />} />

        {/* registration routes */}
        <Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="email" element={<CheckEmail />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="payement" element={<Payment />} />
        </Route>

        {/* Dashbord routes */}
        <Route path="dashboard" element={<DashboardRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="classroom" element={<Classroom />} />
          <Route path="bonus" element={<Bonus />} />
          <Route path="account" element={<Account />} />
          <Route path="live-session" element={<LiveSession />} />
          <Route path="community" element={<Community />} />
          <Route path="hot-new" element={<HotNew />} />
          <Route path="top-earner" element={<TopEarners />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        {/* <Route path="classroom-course" element={<ClasscroomCourse />} />
        <Route path="classroom-content" element={<ClassroomContent />} />
        <Route path="classroom-video" element={<WhatsAppVideo />} />
        <Route path="classroom-Review" element={<ClassroomReview />} /> */}
      </Routes>
      {/* </HashRouter> */}
    </>
  );
}

export default App;
