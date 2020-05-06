import React, { Fragment, Component } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default class extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Button onClick={this.handleToggle}>
          <AddCircleIcon color="secondary" fontSize="large">
            add_circle
          </AddCircleIcon>
        </Button>

        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a new Excercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Fill out the form below.
            </DialogContentText>
            <form></form>
          </DialogContent>
          <DialogActions>
            <Button color="primary">Create</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
