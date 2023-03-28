import { makeStyles } from "@material-ui/core";
export default makeStyles({
  rightSiderMain: { padding: "15px" },
  topMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  callIconWrap: {
    display: "flex",
    gap: "15px",
  },
  userNameTypo: {
    fontWeight: 500,
    fontSize: "20.35px",
    lineHeight: "37px",
    color: "#23242A",
  },
  expandBtn: {
    display: "flex",
    background: "#F9F9F9",
    alignItems: "center",
    borderRadius: "14px",
    justifyContent: "space-between",
    width: "-webkit-fill-available",
    padding: "10px",
  },
  expandBtnTypo: {
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "30px",
    background: "linear-gradient(180deg, #2F6ECB 0%, #0469FF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  imageContainerUser:{
    width:"130px",
    height:"130px"
  },
  "@media(max-width:1150px)":{
    imageContainerUser:{
      width:"120px"
    }
  }
});
