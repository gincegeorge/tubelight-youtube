/* eslint-disable react/prop-types */
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
const Videos = ({ videos, direction }) => {
  if (videos.length === 0) return "loading";
  return (
    <>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
        color={"#fff"}
      >
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </>
  );
};
export default Videos;
