import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
          }
        };

        return (
            <div>
                <h1>Items</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.first_name} {item.middle_name} {item.last_name} - {item.email} - {item.phone} | Date of Birth: {item.date_of_birth} | Address: {item.address} | Place of Birth: {item.place_of_birth} | Sex: {item.sex} | Civil Status: {item.civil_status} | Occupation: {item.occupation} | Height: {item.height} meters | Weight: {item.weight} kg | Blood Type: {item.blood_type} | Pag-Ibig ID No.: {item.pag_ibig_id_no} | Philhealth No.: {item.philhealth_no} | SSS No.: {item.sss_no} | Zip Code: {item.zip_code} | Citizenship: {item.citizenship} | Father's Name: {item.fathers_first_name} {item.fathers_middle_name} {item.fathers_last_name} | Mother's Maiden Name: {item.mothers_maiden_first_name} {item.mothers_maiden_middle_name} {item.mothers_maiden_last_name}
                            <button onClick={ () => onEdit (item)}> Edit</button>
                            <button onClick={() => onDelete(item.id)}> Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    export default ItemList;