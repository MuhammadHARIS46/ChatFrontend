import { makeStyles } from "@material-ui/core";
export default makeStyles({
  chatboxheaderMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    marginBottom: "0",
    paddingBottom: "0",
    gap: "15px",
  },
  leftSidecontainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  rightSideContainer: {
    gap: "10px",
    display: "flex",
    justifyContent: "flex-end",
    marginTop:"0px"
  },
  memberTypo: {
    color: "#23242A",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
  },
  onlineTypo: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#23242A",
  },

  receiveChatBox: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  recevingChat: {
    fontWeight: 400,
    fontSize: "19.2279px",
    lineHeight: "27px",
    color: "#2E2C34",
    background: "#F7F7F7",
    borderRadius: "24px 24px 0px 24px",
    padding: "10px",
  },
  timeStamp: {
    color: "#84818A",
    float: "inherit",
    fontSize: "16.4811px",
    fontWeight: 500,
    lineHeight: "25px",
    marginTop: "3px",
  },
  senderChatBox: {
    color: "#FBFAFC",
    padding: "10px",
    fontSize: "19.2279px",
    background: "linear-gradient(180deg, #2F6ECB 0%, #0469FF 100%)",
    fontWeight: 400,
    lineHeight: "27px",
    borderRadius: "24px 24px 0px 24px",
    cssFloat: "right",
    width: "fit-content",
  },
  senderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  typeMsg: {
    border: "1px solid #F1F1F5",
    padding: "7px",
    background: "#FAFAFB",
    borderRadius: "37px",
    height: "2rem",
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
  },
  sendBtnContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
  sendBtn: {
    display: "flex",
    alignItems: "center",
    height: "43.95px",
    background: "linear-gradient(180deg, #2F6ECB 0%, #0469FF 100%)",
    borderRadius: "5.49369px",
    justifyContent: "center",
  },
  chatMainContainer: {
    width: "500px",
  },
  "@media(max-width:1350px) and (min-width:1250px)": {
    chatMainContainer: {
      width: "450px",
    },
  },
  "@media(max-width:1249px) and (min-width:1150px)": {
    chatMainContainer: {
      width: "400px",
    },
  },
  "@media(max-width:1149px) and (min-width:1090px)": {
    chatMainContainer: {
      width: "350px",
    },
  },
  "@media(max-width:1089px) and (min-width:1050px)": {
    chatMainContainer: {
      width: "300px",
    },
  },
  "@media(max-width:1049px) and (min-width:961px)": {
    chatMainContainer: {
      width: "350px",
    },
  },
  "@media(max-width:959px)": {
    chatMainContainer: {
      width: "-webkit-fill-available",
    },
  },
  "@media(max-width:500px)": {
    chatboxheaderMain: {
      display: "block",
    },
    rightSideContainer:{
      marginTop:"-28px"
    }
  },
});
