import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NoteIcon from "@mui/icons-material/Note";
import PersonIcon from "@mui/icons-material/Person";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";

function Navigation() {
  const [value, setValue] = useState("notes");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} value={value} onChange={handleChange}>
      <BottomNavigationAction 
      label="Notas" 
      value="notes" 
      icon={<NoteIcon />} 
      />
      <BottomNavigationAction
        label="MoodCharts"
        value="Charts"
        icon={<BarChartIcon />}
      />
      <BottomNavigationAction
        label="BlissBits"
        value="Social"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Perfil"
        value="profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
}

export { Navigation };
