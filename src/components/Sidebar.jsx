/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
  { name: "ReactJS", icon: <CodeIcon /> },
  { name: "NextJS", icon: <CodeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          key={category.name}
          className="category-btn"
          style={{
            backgroundColor: category.name === selectedCategory && "#FC1503",
            color: "#fff",
            opacity: category.name === selectedCategory ? "1" : ".8",
          }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
