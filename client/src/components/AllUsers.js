import React, { useState, useEffect } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const result = await axios.get(`http://localhost:5000/api/all-users`);
    setUsers(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <table>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.pseudo}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default AllUsers;
