import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const UserList = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("clicked " + item.login);
    navigate(`/user/${item.login}`);
  };
  return (
    <div
      onClick={handleClick}
      style={{ marginTop: "20px", paddingLeft: "0px" }}
    >
      <Card
        sx={{
          maxWidth: 345,
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: "10px",
        }}
      >
        <Avatar
          alt="User Image"
          src={item.avatar_url}
          sx={{ width: 56, height: 56 }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.username}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserList;
