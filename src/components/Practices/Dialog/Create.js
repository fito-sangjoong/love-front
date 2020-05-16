import React, { Fragment, Component } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  FormControl: {
    width: 500,
  },
});

export default withStyles(styles)(
  class extends Component {
    constructor(props) {
      super(props);
      this.isOpen = React.createRef();

      this.setIsOpen = () => {
        this.isOpen = !this.isOpen;
      };
    }

    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: "",
      },
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open,
      });
    };

    handleChange = (name) => ({ target: { value } }) => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: value,
        },
      });
    };

    handleSubmit = () => {
      //TODO validate
      const { exercise } = this.state;
      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, "-"),
      });
      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: "",
        },
      });
    };

    render() {
      const {
          open,
          exercise: { title, description, muscles },
        } = this.state,
        { classes, muscles: categories } = this.props;
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
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange("title")}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="muscles">Muslces</InputLabel>
                  <Select
                    value={muscles}
                    onChange={this.handleChange("muscles")}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  className={classes.FormControl}
                  label="Description"
                  multiline
                  rows="4"
                  value={description}
                  onChange={this.handleChange("description")}
                  margin="normal"
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleSubmit}>
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
