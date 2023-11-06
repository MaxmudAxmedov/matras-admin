import { Routes, Route } from 'react-router-dom'
import Orders from '../Pages/Orders/Orders'
import Customer from '../Pages/Сustomers/Customer'

export default function RouteController() {
  return (
    <Routes>
        <Route path='/' element={<Orders />}/>
        <Route path='/customers' element={<Customer />}/>
    </Routes>
  )
}
