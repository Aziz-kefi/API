import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UserAxios from './component/UserAxios';

function Api() {
    const [newListUser, setNewListUser] = useState([]);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                let persons = res.data;
                setNewListUser(persons);


            });
    }, [newListUser]
    )

    return (
        <div className='apiCard'>

            {newListUser.map((el) => (<UserAxios dataAxios={el} />))}

        </div>
    )
}

export default Api;