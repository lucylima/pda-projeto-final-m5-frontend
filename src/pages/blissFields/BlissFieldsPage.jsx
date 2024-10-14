import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { BitPost } from "../../components/BitPost/BitPost.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { Navigation } from "../../components/Navigation/Navigation.jsx";
import { NewBitModal } from "../../components/NewBitModal/NewBitModal.jsx";
import { useState, useContext, useEffect } from "react";
import { BitContext } from "../../context/bitsContext.jsx";
import axios from "axios";

function BlissFieldsPage() {
  const { bit, setBit } = useContext(BitContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchBits = async () => {
      const { data } = await axios.get("https://api-blissfields.onrender.com/bits");
      setBit([...data.bits]);
    };
    fetchBits();
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 3,
          marginBottom: 10,
          gap: 3,
          width: "100%",
        }}
      >
        {bit.map((bit) => {
          return (
            <BitPost
              key={bit.bits_id}
              bit={{
                initials: bit.initials,
                user: bit.User.username,
                text: bit.text,
                timestamp: bit.createdAt,
              }}
            />
          );
        })}
      </Box>
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
      <NewBitModal open={open} handleClose={handleClose}></NewBitModal>
      <Navigation />
    </>
  );
}

export { BlissFieldsPage };
