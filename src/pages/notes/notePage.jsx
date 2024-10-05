import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Navigation } from "../../components/Navigation/Navigation.jsx";
import { Note } from "../../components/Note/Note.jsx";
import { NewNoteModal } from "../../components/NewNoteModal/NewNoteModal.jsx";

function NotePage() { 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: 3,
          gap: 1,
        }}
      >
        <Note note={{
          id: 1,
          title: "Lucy primeira nota",
          text: "bobeira kkkk",
          mood: "Surpresa",
          timestamp: "05/10/24"
        }} />
      </Container>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: 85,
          right: 50,
        }}
      >
        <AddIcon />
      </Fab>
      <NewNoteModal open={open} handleClose={handleClose} />
      <Navigation />
    </>
  );
}

export { NotePage };
