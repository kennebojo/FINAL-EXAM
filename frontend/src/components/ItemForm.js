import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [occupation, setOccupation] = useState('');
    const [pagIbigIdNo, setPagIbigIdNo] = useState('');
    const [philhealthNo, setPhilhealthNo] = useState('');
    const [sssNo, setSssNo] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [fathersFirstName, setFathersFirstName] = useState('');
    const [fathersMiddleName, setFathersMiddleName] = useState('');
    const [fathersLastName, setFathersLastName] = useState('');
    const [mothersMaidenFirstName, setMothersMaidenFirstName] = useState('');
    const [mothersMaidenMiddleName, setMothersMaidenMiddleName] = useState('');
    const [mothersMaidenLastName, setMothersMaidenLastName] = useState('');

    useEffect ( () => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setDateOfBirth(item.date_of_birth);
            setPlaceOfBirth(item.place_of_birth);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.blood_type);
            setOccupation(item.occupation);
            setPagIbigIdNo(item.pag_ibig_id_no);
            setPhilhealthNo(item.philhealth_no);
            setSssNo(item.sss_no);
            setZipCode(item.zip_code);
            setCitizenship(item.citizenship);
            setFathersFirstName(item.fathers_first_name);
            setFathersMiddleName(item.fathers_middle_name);
            setFathersLastName(item.fathers_last_name);
            setMothersMaidenFirstName(item.mothers_maiden_first_name);
            setMothersMaidenMiddleName(item.mothers_maiden_middle_name);
            setMothersMaidenLastName(item.mothers_maiden_last_name);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault ();
        const data = {
            first_name: firstName, 
            middle_name: middleName, 
            last_name: lastName, 
            address, 
            email, 
            phone, 
            date_of_birth: dateOfBirth,
            place_of_birth: placeOfBirth,
            sex,
            civil_status: civilStatus,
            height,
            weight,
            blood_type: bloodType,
            occupation,
            pag_ibig_id_no: pagIbigIdNo,
            philhealth_no: philhealthNo,
            sss_no: sssNo,
            zip_code: zipCode,
            citizenship,
            fathers_first_name: fathersFirstName,
            fathers_middle_name: fathersMiddleName,
            fathers_last_name: fathersLastName,
            mothers_maiden_first_name: mothersMaidenFirstName,
            mothers_maiden_middle_name: mothersMaidenMiddleName,
            mothers_maiden_last_name: mothersMaidenLastName,
        };

        try {
            if (item) {
                await 
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
            } catch (error) {
                console.error('There was an error submitting the form!', error);
            }
        };

        return (
            <form onSubmit={handleSubmit}>
             <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div>
                <label>Civil Status:</label>
                <select value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)}>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                </select>
            </div>
            <div>
                <label>Height:</label>
                <input type="number" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="number" step="0.01" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} />
            </div>
            <div>
                <label>Occupation:</label>
                <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
            </div>
            <div>
                <label>Pag-Ibig ID No. :</label>
                <input type="text" value={pagIbigIdNo} onChange={(e) => setPagIbigIdNo(e.target.value)} />
            </div>
            <div>
                <label>Philhealth No. :</label>
                <input type="text" value={philhealthNo} onChange={(e) => setPhilhealthNo(e.target.value)} />
            </div>
            <div>
                <label>SSS No. :</label>
                <input type="text" value={sssNo} onChange={(e) => setSssNo(e.target.value)} />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={fathersFirstName} onChange={(e) => setFathersFirstName(e.target.value)} />
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={fathersMiddleName} onChange={(e) => setFathersMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Father's Last Name:</label>
                <input type="text" value={fathersLastName} onChange={(e) => setFathersLastName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Maiden First Name:</label>
                <input type="text" value={mothersMaidenFirstName} onChange={(e) => setMothersMaidenFirstName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Maiden Middle Name:</label>
                <input type="text" value={mothersMaidenMiddleName} onChange={(e) => setMothersMaidenMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Maiden Last Name:</label>
                <input type="text" value={mothersMaidenLastName} onChange={(e) => setMothersMaidenLastName(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};
    export default ItemForm;