import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GroupIcon from "@mui/icons-material/Group";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import {
  Box,
  Avatar,
  Card,
  Typography,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import { BookOutlined, BusinessOutlined } from "@mui/icons-material";

const UserDetails = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    setUserDetails(data);
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, padding: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt="User Image"
              src={userDetails.avatar_url}
              sx={{ width: 180, height: 180 }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h4" component="div">
              {userDetails.name || "No Name"}
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              @{userDetails.login}
            </Typography>
            {userDetails.company && (
              <Box display="flex" alignItems="center" mt={2}>
                <BusinessOutlined />

                <Typography variant="body2" component="div" ml={2}>
                  {userDetails.company || "No Name"}
                </Typography>
              </Box>
            )}

            <Stack direction="row" spacing={1} mt={2}>
              <Chip
                color="success"
                icon={<GroupIcon />}
                label={`Followers: ${userDetails.followers}`}
              />
              <Chip
                color="warning"
                label={`Following: ${userDetails.following}`}
              />
            </Stack>
            <Typography variant="body1" mt={2}>
              {userDetails.bio || "No bio available"}
            </Typography>
            <Stack direction="row" spacing={2} mt={2}>
              <Box display="flex" alignItems="center" mt={2}>
                <BookOutlined />
                <Typography variant="body1" ml={1}>
                  {userDetails.public_repos}
                </Typography>
              </Box>

              {userDetails.blog && (
                <Box display="flex" alignItems="center" mt={2}>
                  <RssFeedSharpIcon />
                  <Typography variant="body1" ml={1}>
                    {userDetails.blog}
                  </Typography>
                </Box>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default UserDetails;
