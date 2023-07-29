import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi,js";
const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      if (data.items) {
        console.log("videos loaded");
        setVideos(data.items);
      } else {
        console.log("no vidoessss");
      }
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        pr={2}
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          md: 2,
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowX: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#f31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
