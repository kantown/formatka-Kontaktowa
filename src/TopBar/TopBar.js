import { Box, Button } from "@material-ui/core";
import i18n from "../i18n";

function TopBar() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        width="25%"
        height="auto"
        style={{
          backgroundColor: "#EDE7D9",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Button onClick={() => changeLanguage("en")}>EN</Button>
        <Button onClick={() => changeLanguage("pl")}>PL</Button>
      </Box>
    </Box>
  );
}

export default TopBar;
