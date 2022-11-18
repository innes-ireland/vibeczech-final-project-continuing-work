import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Worker() {

    const [user, setUser] = useState(null);

    const getCurrentUser = async function () {
        const response = await axios('/api/user');
        setUser(response.data)
        console.log(response.data.is_admin);

    };

    useEffect(() => {
        getCurrentUser();
    }, [])

    // console.log(user.is_admin)

    return (
        <div>
            {
                (user !== null && user.is_admin == '1')
                    ? < a > Edit</a >
                    : <></>
            }
        </div>

    )
}