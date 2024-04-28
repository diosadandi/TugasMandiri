import { useState } from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PageTugas3 = () =>{
    const [nama, setnama] = useState()
    const [harga, setharga] = useState(0)
    const [quantity, setquantity] = useState()

    const onChangeNumber = (e, getter, setter) => {
        const name = e.target.name;
        const value = e.target.value;
        setter({...getter, [name]: Number(value)})
      }

    const onChangeText = (e, getter, setter) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setter({...getter, [name]: value})
      }
      

    return(
        <>
        <InputGroup className="mb-3">
          <InputGroup.Text id="name">Nama barang</InputGroup.Text>
          <Form.Control
            placeholder="masukan nama barang"
            aria-label="nama"
            aria-describedby="name"
            type="number"
            value={nama}
            onChange={(e) => onChangeText(e, nama, setnama)}
          />
        </InputGroup>

        
        <InputGroup className="mb-3">
          <InputGroup.Text id="price">Harga</InputGroup.Text>
          <Form.Control
            placeholder="Harga"
            aria-label="Harga"
            aria-describedby="price"
            type="number"
            value={harga}
            onChange={(e) => onChangeNumber(e, harga, setharga)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text id="quantity1">Quantity</InputGroup.Text>
            <Form.Control
            placeholder="Masukan jumlah"
            aria-label="Username"
            aria-describedby="quantity1"
            type="number"
            value={quantity}
            onChange={(e) => onChangeNumber(e, quantity, setquantity)}
            />
        </InputGroup>

        <h3>hasil perhitungan = {toString(harga*quantity)}</h3>

            
        </>
       
    )
}

export default PageTugas3