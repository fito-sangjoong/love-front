import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Practices/Dialog/Create";

export default (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        Space Reserve System
      </Typography>

      <CreateDialog />
    </Toolbar>
  </AppBar>
);
