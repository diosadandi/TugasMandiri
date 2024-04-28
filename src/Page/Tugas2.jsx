import { useState } from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const PageTugas2 = () =>{
    const [angka1, setangka1] = useState(0)
    const [angka2, setangka2] = useState(0)
    const [jumlah, setjumlah] = useState(angka1+angka2)
    const [kurang, setkurang] = useState(angka1-angka2)
    const [kali, setkali] = useState(angka1*angka2)
    const [bagi, setbagi] = useState(angka1/angka2)
    const [hasil, sethasil] = useState()


    const onChangeNumber = (e, getter, setter) => {
        const name = e.target.name;
        const value = e.target.value;
        setter({...getter, [name]: Number(value).toString()})
      }


    return(
        <>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Angka 1</InputGroup.Text>
          <Form.Control
            placeholder="Angka pertama"
            aria-label="Angka1"
            aria-describedby="basic-addon1"
            type="number"
            value={angka1}
            onChange={(e) => onChangeNumber(e, angka1, setangka1)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Angka 2</InputGroup.Text>
            <Form.Control
            placeholder="Masukan Angka 2"
            aria-label="Username"
            aria-describedby="basic-addon1"
            type="number"
            value={angka2}
            onChange={(e) => onChangeNumber(e, angka2, setangka2)}
            />
        </InputGroup>

        <h3>hasil perhitungan = {}</h3>
        
        
        <div className="d-grid gap-2">
        <Button size="lg" onClick={setjumlah}>
            Tambah
        </Button>
        <Button size="lg" onClick={setkurang}>
            Kurang
        </Button >
        <Button size="lg" onClick={setkali}>
            kali
        </Button>
        <Button  size="lg" onClick={setbagi}>
            bagi
        </Button>
        </div>

        
            
        </>
       
    )
}

export default PageTugas2