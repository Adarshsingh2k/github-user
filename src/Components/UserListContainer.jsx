import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const UserListContainer = () => {
  const [userListData, setUserList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch("https://api.github.com/users");
    const users = await resp.json();

    const userDetails = await Promise.all(
      users.map(async (user) => {
        const response = await fetch(user.url);
        const userData = await response.json();
        return { ...userData, username: user.login }; // Include the username in the userDetails
      })
    );

    setUserList(userDetails);
  };

  return (
    <div style={{}}>
      {userListData.map((item) => (
        <UserList key={item.id} item={item} />
      ))}
    </div>
  );
};

export default UserListContainer;
