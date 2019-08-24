import React, { Component } from 'react';
import Axios from 'axios';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));



class GalleryItem extends Component {
  state = {
    toggle: true,
  }

  //  componentDidMount(){
  //    const classes = useStyles();
  //    const anchorEl = React.useState(null);
  //    const setAnchorEl = React.useState(null);
  //    const open = Boolean(anchorEl);
  //    const id = open ? 'simple-popover' : undefined;
  //  } Hooks do not work with class components


  // handleClick = (event) => {
  //   this.setAnchorEl(event.currentTarget);
  // }

  // handleClose = () => {
  //   this.setAnchorEl(null);
  // } See above

  //increments like count by 1 when like button is clicked
  increaseLikes = (Id) => {
    console.log('like increased');
    Axios.put(`/gallery/like/${Id}`)
    .then((response) => {
      console.log(response);
      this.props.getGallery();
    }).catch((error) => {
      console.log(error);
    })
  }

  //allows image description to be shown on the DOM when image is clicked
  toggleToggle = () => {
    console.log('in toggleToggle');
    this.setState({
      toggle: !this.state.toggle,
    })
  }

  //deletes image from database
  removePhoto = (Id) => {
    console.log('Removing Photo');
    Axios.delete(`/gallery/${Id}`)
    .then((response) => {
      console.log(response);
      this.props.getGallery();
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div className="galleryItem" onClick={this.toggleToggle}>
          {this.state.toggle ? <img src={this.props.picture.path} alt={this.props.picture.description} /> :
            <div>{this.props.picture.description}</div>}
        </div>
        <div className="galleryCaption">
          <button onClick={() => this.increaseLikes(this.props.picture.id)}>Like</button><span> </span>
          <button onClick={() => this.removePhoto(this.props.picture.id)}>Delete</button><br />
          <p>{this.props.picture.likes} Likes</p>
        </div>
      </div>
    );
  }
}

export default GalleryItem;