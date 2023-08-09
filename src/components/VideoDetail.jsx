import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi,js";

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statitics&id=${id}`).then((data) => {
      setVideoDetail(data?.items[0]);
    });

    fetchFromApi(
      `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=10`
    ).then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, [id]);
  console.log(videos);

  if (VideoDetail === null || videos.length === 0) return "loading";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoDetail;

  console.log(title, channelId, channelTitle, viewCount, likeCount);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              margin: "16px",
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              playing="true"
              // muted="true"
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              marginTop="15px"
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            margin: "0 16px",
          }}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
