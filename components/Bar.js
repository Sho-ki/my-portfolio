import { AppBar, Typography, Toolbar } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

function Bar() {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#131A1D ",
        borderBottom: `1px solid white}`,
      }}
    >
      <Toolbar>
        <Typography mr={4} variant="h5" noWrap>
          Top
        </Typography>{" "}
        <Typography mr={4} variant="h6" noWrap>
          Works
        </Typography>{" "}
        <Typography mr={4} variant="h6" noWrap>
          Articles
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
