import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useColorScheme } from "@mui/material/styles";

function SettingsDialog({ onClose, selectedValue, open }) {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Configurações</DialogTitle>

      <FormControl
        sx={{
          padding: 2,
        }}
      >
        <RadioGroup
          aria-labelledby="theme-toggle"
          name="theme-toggle"
          column
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <FormControlLabel
            value="system"
            control={<Radio />}
            label="Sistema"
          />
          <FormControlLabel value="light" control={<Radio />} label="Claro" />
          <FormControlLabel value="dark" control={<Radio />} label="Escuro" />
        </RadioGroup>
      </FormControl>
    </Dialog>
  );
}

export { SettingsDialog };
