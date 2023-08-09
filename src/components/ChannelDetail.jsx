import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi,js";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date&maxResults=28`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  console.log(id);

  const slicedStr =
    channelDetail?.brandingSettings?.image?.bannerExternalUrl.split("/");
  let coverImageUrl = "";

  if (slicedStr && slicedStr.length > 0) {
    const imageId = slicedStr[3];
    coverImageUrl = `https://yt3.googleusercontent.com/${imageId}=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj`;
  }

  return (
    <Box minHeight="95vh">
      <Box>
        <CardMedia
          image={coverImageUrl || ""}
          alt="sdf"
          sx={{
            height: "250px",
            width: "100%",
            zIndex: "10",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-230px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
