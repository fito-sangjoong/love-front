import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 50,
    height: 500,
    width: 700,
  },
  control: {
    padding: theme.spacing(2),
  },
  img: {
    height: 400,
    width: 700,
  },
  btn: {
    width: "100%",
    height: 50,
    cursor: "default",
  },
  btn2: {
    width: 350,
    height: 50,
  },
}));

export default function Main() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <img
                  className={classes.img}
                  src="https://res.cloudinary.com/fitogether/image/upload/v1585736222/ohcoach-admin-dev/admin/evxmkenjp7pdsws4snkt.jpg"
                ></img>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                >
                  회의실 (대)
                </Button>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <Button className={classes.btn2}>예약하기</Button>
                  <Button className={classes.btn2}>예약현황</Button>
                </ButtonGroup>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
