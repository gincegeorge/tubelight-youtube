/* eslint-disable react/prop-types */
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = (props) => {
  let channelDetail = props?.channel?.snippet;
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "365px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetail?.thumbnails?.medium?.url || demoProfilePicture}
            alt={channelDetail?.channelTitle}
            sx={{
              height: "180px",
              borderRadius: "50%",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.channelTitle}{" "}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount?.toLocaleString()
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
