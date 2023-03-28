import { makeStyles } from "@material-ui/core";
export default makeStyles({
  headerMain: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom:"2px solid #EEF1F7",
    padding:"10px",
    flexDirection:"row",
    alignItems:"center"
  },
  textBox: {
    background: "#FAFAFB",
    border: "1px solid #F1F1F5",
    borderRadius: "37px",
    padding: "4px",
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
  },
  taskHeading: {
    fontWeight: 500,
    fontSize: "39.7151px",
    lineHeight: "34px",
    background: "linear-gradient(180deg, #2F6ECB 0%, #0469FF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  btnSeacrhWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexDirection:"row",
  },
  taskBtn: {
    background: "linear-gradient(90.15deg, #2F6ECB 1.74%, #0469FF 99.9%)",
    borderRadius: "65px",
    color: "white",
    padding: "10px 20px",
    width:"max-content"
  },
  "@media(max-width:768px)":{
    headerMain:{
      flexDirection:"column",
      alignItems:"center",
      gap:"10px"
    }
  },
  "@media(max-width:520px)":{
    btnSeacrhWrapper:{
      flexDirection:"column",
    }
  }
});
