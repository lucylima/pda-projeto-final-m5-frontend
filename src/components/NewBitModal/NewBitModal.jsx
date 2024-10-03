import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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

function NewBitModal({ open, handleClose }) {
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
          <Typography sx={{ fontSize: "h5.fontSize" }}>Novo Bit</Typography>
          <TextField
            id="standard-basic"
            label="Estou me sentindo"
            variant="outlined"
          />

          <TextField
            id="outlined-textarea"
            label="Como você se sente hoje?"
            multiline
            rows={4}
          />
          <Button variant="contained">Plantar</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export { NewBitModal };
