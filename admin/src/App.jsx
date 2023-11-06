import Login from "./Auth/Login"
import AdminLayout from "./Layout/AdminLayout";
import RouteController from "./Routes/Route";


function App() {
  const token = localStorage.getItem('token');
  console.log(token);

  if (token) {
     return <AdminLayout>
        <RouteController />
      </AdminLayout>
  }else {
    return <div className="container">
      <Login />
    </div>
  }
}

export default App
