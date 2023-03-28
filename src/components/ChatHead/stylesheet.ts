import { makeStyles } from "@material-ui/core";
export default makeStyles({
  mainChatBox: {
    // display:"flex"
  },

  chatheadWrapper: {
    gap: "15px",
    display: "flex",
    padding: "5px",
  },
  btnTypoBox: {
    display: "flex",
    gap: "1.5rem",
    flexDirection:"row",
    flexWrap:"nowrap"
  },
  priceBtn: {
    background:
      "linear-gradient(90.15deg, rgb(47, 110, 203) 1.74%, rgb(4, 105, 255) 99.9%)",
    borderRadius: "71px",
    color: "white",
    width: "max-content",
    padding: "12px",
  },
  taskHeading: {
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "26px",
    background: "linear-gradient(180deg, #2F6ECB 0%, #0469FF 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  chatContentTypo: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#23242A",
    width: "249px",
  },
  notiBox: {
    color: "white",
    background: "#FC3400",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-2.375rem",
  },
 
  "@media(max-width:1049px) and (min-width:961px) ":{
    btnTypoBox:{
      flexDirection:"column",
      gap:"0.5rem"
    }
  },
  "@media(max-width:600px)":{
    btnTypoBox :{
      flexWrap:"wrap",
      gap:"0.5rem"
    }
  }
});
