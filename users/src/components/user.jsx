import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                `https://reqres.in/api/users/${id}`
            );
            setUser(response.data.data);
        }
        fetchData();
    }, []);
    return (
        <>
            <img
                src={user.avatar}
                style={{
                    borderRadius: "50%",
                    width: "100px",
                }}
                alt={user.first_name}
            />
            <h4>
                {user.first_name} {user.last_name}
            </h4>
        </>
    );
};

export default User;
