import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

function BitPost({ bit }) {
  const dateFormat = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("pt-br");
  };
  const nameInitialsFormat = (name) => {
    return name.split("")[0].toUpperCase();
  };

  return (
    <Card
      variant="elevation"
      sx={{ maxWidth: 400, width: "100%"  }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {nameInitialsFormat(bit.user)}
          </Avatar>
        }
        title={bit.user}
        subheader={dateFormat(bit.timestamp)}
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {bit.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export { BitPost };
