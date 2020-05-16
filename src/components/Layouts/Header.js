import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Practices/Dialog/Create";
import Drawer from "./Drawer";

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        Space Reserve System
      </Typography>

      <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);
