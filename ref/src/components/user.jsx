import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const User = () => {
    const { id } = useParams();
    let location = useLocation();
    let navigate = useNavigate();

    const [user, setUser] = useState({});
    console.log(navigate, "location");
    console.log(queryString.parse(location.search)); // ?order=oldest$s=phone

    const firstName = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                `https://reqres.in/api/users/${id}`
            );
            setUser(response.data.data);
        }
        fetchData();
        console.log(firstName.current);
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
            <h4 ref={firstName}>
                {user.first_name} {user.last_name}
            </h4>
            <button
                onClick={() => navigate("/users")}
                className="btn btn-info mt-3"
            >
                Redirect to Users
            </button>
        </>
    );
};

export default User;
