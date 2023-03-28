import { makeStyles } from "@material-ui/core";
export default makeStyles({
  mainContainer: {
    display: "flex",
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  chatContentBox: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  chatBoxBorder: {
    borderRight: "2px solid #F5F5F5",
    borderTop: "",
  },
  chatheadsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    maxHeight: "-webkit-fill-available",
    overflow: "auto",
    alignItems:"center"
  },
  rightSiderBorder: {
    borderTop: "none",
  },
  "@media(max-width:960px)": {
    chatContentBox: {
      flexDirection: "column",
    },
    chatBoxBorder: {
      borderTop: "2px solid #F5F5F5",
    },
    rightSiderBorder: {
      borderTop: "2px solid #F5F5F5",
    },
    chatheadsContainer: {
      maxHeight: "250px",
      overflow: "scroll",
    },
  },
});
