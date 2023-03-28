import React from "react";
import useStyles from "./stylesheet";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import {  useMediaQuery } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useAppDispatch, useAppSelector } from "../../store/index";
import { setOpenSidebar } from "../../store/Sidebar/index";
const Header = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { sidebar } = useAppSelector((state: any) => state.Sidebar);
  const dispatch = useAppDispatch();
  return (
    <Box className={classes.headerMain}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "-webkit-fill-available",
        }}
      >
        {isSmallScreen && (
          <IconButton
            onClick={() => {
              dispatch(setOpenSidebar(true));
            }}
          >
            {!sidebar && <MenuIcon style={{ color: "blue" }} />}
          </IconButton>
        )}
        <Typography className={classes.taskHeading}>Your Tasks</Typography>
        {isSmallScreen && (
          <IconButton
            onClick={() => {
              dispatch(setOpenSidebar(false));
            }}
          >
            {sidebar && <CloseIcon style={{ color: "blue" }} />}
          </IconButton>
        )}
      </Box>
      <Box className={classes.btnSeacrhWrapper}>
        <Box>
          <TextField
            id="input-with-icon-textfield"
            className={classes.textBox}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <Button className={classes.taskBtn} startIcon={<AddIcon style={{color:"white"}} />}>
            <Typography style={{color:"white"}}>
              Add Task
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
