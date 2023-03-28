import { makeStyles } from "@material-ui/core";
export default makeStyles({
  mainContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "19px",
    marginTop: "6rem",
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    gap: "10px",
  },
  headingMain: {
    fontWeight: 300,
    fontSize: "40px !important",
    lineHeight: "48px !important",
    color: "#000000 !important",
  },
  cardWrapper: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    padding: "45px 30px 25px",
    gap: "50px",
    width: "21.875rem",
    background: "#FFFFFF",
    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)",
    borderRadius: "9px",
    marginTop: "2rem",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    gap: "53px",
  },
  frame74: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "79px",
  },
  textFieldContainer: {
    padding: "0px",
  },
  textField: {
    borderBottom: "2px solid #5699FF !important",
    width: "-webkit-fill-available !important",
    marginBottom: "1rem !important",
    background: "#fff !important",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 85px",
    gap: "5px",
    width: "inherit",
  },
  "@media (max-width: 410px)": {
    cardWrapper: {
      width: "18rem",
    },
  },
  "@media (max-width :320px)": {
    cardWrapper: {
      width: "15rem",
    },
  },
});
