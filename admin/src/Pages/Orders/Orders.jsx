import { useState } from "react"
import { useEffect } from "react"

export default function Orders() {
  const [order, setOrder] = useState([]);
  const [loading, isLoading] = useState(true)
  // const [active, setActive] = useState(fa)
  useEffect(() => {
    fetch('http://localhost:1212/admin/orders/1',{
      headers: {
        'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0        `
      }
    }).then(res => res.json())
    .then(data => {
      if (data.data) {
        isLoading(false)
        console.log(loading);
        console.log(data.data)
        setOrder(data.data)
      }
    })
  }, [])

  if (loading) return <h2>Loading...</h2>

  return (
    <table className="table border">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Ismi</th>
          <th scope="col">Telefon raqami</th>
          <th scope="col">Mahsulot nomlari</th>
          <th scope="col">Miqdor</th>
          <th scope="col">Qayta aloqa</th>
        </tr>
      </thead>
      <tbody>
        {
          order?.map((item, index) => {
            return <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.product_name}</td>
              <td>{item.count}</td>
            </tr>
          })
        }
        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  )
}
