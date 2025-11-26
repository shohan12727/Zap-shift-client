import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png"
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo></Logo>
      <div className="flex md:flex-row">
        <div className="flex-1">
            <Outlet></Outlet>
        </div>
        <div className="flex-1 hidden md:block">
            <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
