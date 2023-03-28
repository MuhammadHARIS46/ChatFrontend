import { makeStyles } from "@material-ui/core";
export default makeStyles({
  SidebarMain: {
    gap: "3rem",
    display: "flex",
    padding: "10px",
    alignItems: "center",
    
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  topHeadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  testHeading: {
    fontFamily: "'Poppins'",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "30px",
    textTransform: "uppercase",
    background: "linear-gradient(90.15deg, #2F6ECB 1.74%, #0469FF 99.9%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  auditHeading: {
    fontFamily: "'Poppins'",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.78em",
    textTransform: "uppercase",
    color: "#000000",
  },
  AllIconBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  icons: {
    // width: "50px",
    // height: "50px",
  },
});
