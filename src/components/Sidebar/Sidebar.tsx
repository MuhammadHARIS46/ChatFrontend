import React from "react";
import useStyles from "./stylesheet";
import { Box, Typography } from "@material-ui/core";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { IconButton } from "@material-ui/core";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.SidebarMain}>
      <Box className={classes.topHeadingContainer}>
        <Typography className={classes.testHeading}>TEST</Typography>
        <Typography className={classes.auditHeading}>AUDIT</Typography>
      </Box>
      <Box className={classes.AllIconBox}>
        <IconButton>
          <DateRangeIcon className={classes.icons} />
        </IconButton>
        <IconButton>
          <SmsIcon className={classes.icons} />
        </IconButton>
        <IconButton>
          <AddIcon className={classes.icons} />
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon className={classes.icons} />
        </IconButton>
        <IconButton>
          <SettingsIcon className={classes.icons} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
