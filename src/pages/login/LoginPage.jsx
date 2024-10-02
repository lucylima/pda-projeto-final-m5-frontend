import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginPage() {
  return (
    <>
      <h1>BlissFields</h1>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <h2>Login</h2>

        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button variant="contained">Entrar</Button>
      </Box>
    </>
  );
}

export { LoginPage };
