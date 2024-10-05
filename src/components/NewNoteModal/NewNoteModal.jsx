import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 10,
  px: 3,
  py: 2,
};

function NewNoteModal({ open, handleClose }) {
  const [mood, setMood] = useState("");

  const handleChange = (event) => {
    setMood(event.target.value);
  };

  const handleSaveNote = () => {
    handleClose()
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { mb: 2, width: "100%", height: "100%" } }}
          noValidate
          autoComplete="off"
        >
          <Typography sx={{ fontSize: "h5.fontSize" }}>Nova nota</Typography>
          <TextField id="standard-basic" label="Titulo" variant="outlined" />

          <TextField
            id="outlined-textarea"
            label="Como você se sente hoje?"
            multiline
            rows={4}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Mood</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mood}
              label="mood"
              onChange={handleChange}
            >
              <MenuItem value="Alegre">Alegria 😄</MenuItem>
              <MenuItem value="Raiva">Raiva 😠</MenuItem>
              <MenuItem value="Triste">Tristeza 😢</MenuItem>
              <MenuItem value="Medo">Medo 😢</MenuItem>
              <MenuItem value="Nojo">Nojo 🤢</MenuItem>
              <MenuItem value="Surpresa">Surpresa 😧</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleSaveNote}>
            Salvar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export { NewNoteModal };
