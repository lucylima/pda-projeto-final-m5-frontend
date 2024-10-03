import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { BitPost } from "../../components/BitPost/BitPost.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { Navigation } from "../../components/Navigation/Navigation.jsx";
import { NewBitModal } from "../../components/NewBitModal/NewBitModal.jsx";
import { useState } from "react";

function BlissFieldsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <Box>
        <BitPost />
      </Box>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <NewBitModal open={open} handleClose={handleClose}></NewBitModal>
      <Navigation />
    </>
  );
}

export { BlissFieldsPage };
