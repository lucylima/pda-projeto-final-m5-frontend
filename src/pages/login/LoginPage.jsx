import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function LoginPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography variant="h4" component="h3" sx={{ textAlign: "center" }}>
        BlissFields
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>
          login
        </Typography>
        <TextField
          id="email-field"
          label="Email"
          variant="standard"
          type="email"
        />
        <TextField
          id="password-field"
          label="Senha"
          variant="standard"
          type="password"
        />
        <Button variant="contained">Entrar</Button>
      </Box>
    </Container>
  );
}

export { LoginPage };
