import { NavLink } from "react-router-dom";
// import Profile from "../assets/profile.svg";
import "./index.css";

export default function AdminLayout({children}) {
  
  return (
    <div className="d-flex w-100">
        <div className="d-flex flex-column py-3 text-center" style={{width: '219px', height: '100vh', backgroundColor: '#01384D'}}>
            <h2 className="text-white text-center my-2">LOGO</h2>
            <NavLink to="/" className={'py-2 text-decoration-none text-white'}>Buyurtmalar</NavLink>
            <NavLink to="/customers" className={'py-2 text-decoration-none text-white'}>Customers</NavLink>
            <NavLink to="/toifalar" className={'py-2 text-decoration-none text-white'}>Toifalar</NavLink>
            <NavLink to="/mahsulotlar" className={'py-2 text-decoration-none text-white'}>Mahsulotlar</NavLink>
            <NavLink to="/texnologiyalar" className={'py-2 text-decoration-none text-white'}>Texnologiyalar</NavLink>
            <NavLink to="/manzil" className={'py-2 text-decoration-none text-white'}>Manzil</NavLink>
        </div>
        <div className="w-100">
            <div style={{ backgroundColor: '#01384D'}} className="p-3 d-flex justify-content-between">
              <form className="w-50">
                <input type="search" className="form-control w-75" placeholder="user" />
              </form>
              <span>
                {/* <img src={Profile} alt="" /> */}
                <strong className="text-white"> Profile</strong>
              </span>
            </div>

            <div className="p-4 bg-light">
              { children }
            </div>
        </div>
        
    </div>
  )
}
