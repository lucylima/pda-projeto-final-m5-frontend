import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NoteIcon from "@mui/icons-material/Note";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const [value, setValue] = useState("Notes");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        display: { md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Notas" value="Notes" icon={<NoteIcon />} />
      <BottomNavigationAction
        label="BlissBits"
        value="Social"
        icon={<FavoriteIcon />}
      />
    </BottomNavigation>
  );
}

export { Navigation };
