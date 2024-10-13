import Paper from "@mui/material/Paper";
import NoteActions from "./NoteActions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

const dateFormat = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString("pt-br");
};

function Note({ note }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1721/notes/${id}`);
  };
  const handleEdit = async (id) => {};

  return (
    <Paper
      elevation={4}
      sx={{
        width: { sm: "16rem", xs: "100%" },
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: ".4rem",
          gap: 1,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          fontWeight={500}
          sx={{ width: "100%" }}
        >
          {note.title}
        </Typography>
        <NoteActions
          handleDelete={() => {
            handleDelete(note.id);
          }}
          handleEdit={() => {
            handleEdit(note.id);
          }}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{ textAlign: "left", width: "100%", marginBottom: "1rem" }}
      >
        {note.text}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="body2">{note.mood}</Typography>
        <Typography variant="body2">{dateFormat(note.timestamp)}</Typography>
      </Box>
    </Paper>
  );
}

export { Note };
