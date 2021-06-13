import { Box } from "@material-ui/core";
import { withNamespaces } from "react-i18next";
import './style.css'

function MainContent({ t }) {
  return (
    <Box
      width="90%"
      display="flex"
      position="absolute"
      bottom="0"
      textAlign="left"
      flexDirection="column"
      height="50%"
      marginLeft="40px"
      marginBottom="150px"
    >
      <Box color="rgb(237, 231, 217)">
        <h1>{t("project")}</h1>
      </Box>
      <Box color="rgb(237, 231, 217)">
        <h3>{t("madeBy") + "Bartosz Kawa"}</h3>
      </Box>
    </Box>
  );
}
export default withNamespaces()(MainContent);
