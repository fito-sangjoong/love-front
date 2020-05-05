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

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select exercise from the list one the left",
  },
}) => (
  <Grid container spacing={2}>
    <Grid item xs>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul" aria-label="secondary mailbox folders">
                {exercises.map(({ id, title }) => (
                  <ListItem key={id} button onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.Paper}>
        <Typography variant="h4" style={{ marginTop: 10 }}>
          {title}
        </Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);
