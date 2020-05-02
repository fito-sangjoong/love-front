import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: "60%",
    overflowY: "auto",
  },
};

// const ListItemLink = (props) => {
//   return <ListItem button component="a" {...props} />;
// };

export default ({ excercises }) => (
  <Grid container spacing={2}>
    <Grid item xs>
      <Paper style={styles.Paper}>
        {excercises.map(([group, excercises]) => (
          <Fragment>
            <Typography variant="h6" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
            <List component="ul" aria-label="secondary mailbox folders">
              {excercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.Paper}>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          Right Panel
        </Typography>
        <Typography variant="subtitle1">
          Please select excercise from the list one the left
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
