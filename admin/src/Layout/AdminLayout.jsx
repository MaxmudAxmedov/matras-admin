import { NavLink } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="d-flex w-100">
        <div className="d-flex flex-column w-25 bg-info p-3">
            <NavLink to="/">Buyurtmalar</NavLink>
            <NavLink to="/customers">Customers</NavLink>
        </div>
        <div>
            {/* header */}
        </div>
        <div className="p-4">
            { children }
        </div>
    </div>
  )
}
