import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

const User = () => {
    const { id } = useParams();
    let location = useLocation();

    const [user, setUser] = useState({});
    console.log(queryString.parse(location.search)); // ?order=oldest$s=phone

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
