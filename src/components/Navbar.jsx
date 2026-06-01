import { NavLink } from "react-router-dom";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="btn bg-white border border-base-300 hover:bg-base-200 text-primary font-semibold">
      <div></div>

      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="login-btn flex gap-5 items-center">
        <img className="w-10 h-10" src={user} alt="user" />
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;