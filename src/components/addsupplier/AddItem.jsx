import './addItem.css';
import { useState } from "react";
const axios = require('axios').default;

const Add = () => {

    const [name, setName] = useState('not defined')
    const [contactName, setContactName] = useState('not defined')
    const [country, setCountry] = useState('not defined')
    const [city, setCity] = useState('not defined')
    const [street, setStreet] = useState('not defined')
    const [phone, setPhone] = useState('not defined')
    const [region, setRegion] = useState('not defined')
    const [postal, setPostal] = useState('not defined')
    const [title, setTitle] = useState('not defined')

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeContactName = (e) => {
        setContactName(e.target.value)
    }
    const changeCountry = (e) => {
        setCountry(e.target.value)
    }
    const changeCity = (e) => {
        setCity(e.target.value)
    }
    const changeStreet = (e) => {
        setStreet(e.target.value)
    }
    const changePhone = (e) => {
        setPhone(e.target.value)
    }
    const changeRegion = (e) => {
        setRegion(e.target.value)
    }
    const changePostal = (e) => {
        setPostal(e.target.value)
    }
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const supplier = {
            companyName: name,
            contactName: contactName,
            contactTitle: title,
            address: {
                street: street,
                city: city,
                region: region,
                postalCode: postal,
                country: country,
                phone: phone
            }
        }
        axios.post('https://northwind.vercel.app/api/suppliers', {...supplier})
        .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/Suppliers"
          })        
    }

    return (
        <div id='addContainer'>
         <h1>Add new supplier</h1>
         <form id='formcustom'>
            <label className='labelcustom'>
                Company Name 
                <input type="text" required onChange={changeName}/>
            </label>
            <label className='labelcustom'>
                Company Contact Name 
                <input type="text" required onChange={changeContactName}/>
            </label>
            <label className='labelcustom'>
                Company Country 
                <input type="text" required onChange={changeCountry}/>
            </label>
            <label className='labelcustom'>
                Company City 
                <input type="text" required onChange={changeCity}/>
            </label>
            <label className='labelcustom'>
                Company Region 
                <input type="text" onChange={changeRegion}/>
            </label>
            <label className='labelcustom'>
                Company Street 
                <input type="text" required onChange={changeStreet}/>
            </label>
            <label className='labelcustom'>
                Company ZIP POSTAL Code 
                <input type="text" required onChange={changePostal}/>
            </label>
            <label className='labelcustom'>
                Company phone 
                <small>Format: 123-456-7890</small>
                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required onChange={changePhone}/>
            </label>
            <label className='labelcustom'>
                Company Contact Title 
                <input type="text" required onChange={changeTitle} />
            </label>
            <div id='button_container_custom'>
                <button id='submitButtonCustom' onClick={handleSubmit}>Submit</button>
            </div>
         </form>
        </div>
    )
};

export default Add;

