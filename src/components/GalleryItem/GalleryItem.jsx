import React, { Component } from 'react';
import Axios from 'axios';

class GalleryItem extends Component {
  state = { 
    toggle: true,
   }

    increaseLikes = (Id) => {
      console.log('like increased');
      Axios.put(`./gallery/like/${Id}`).then((response)=>{
        console.log(response);
        this.props.getGallery();
      }).catch((error)=> {
        console.log(error);
      })
    }

    toggleToggle = ()=>{
      console.log('in toggleToggle');
      this.setState({
        toggle: !this.state.toggle,
      })
    }

    removePhoto = (Id) => {
      console.log('Removing Photo');
      Axios.delete(`./gallery/${Id}`).then((response) => {
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
            <p>{this.props.picture.description}</p>}
        </div>
        <div className="galleryCaption">
          <button onClick={()=> this.increaseLikes(this.props.picture.id)}>Like</button><span> </span>
          <button onClick={()=> this.removePhoto(this.props.picture.id)}>Delete</button><br/>
          <p>{this.props.picture.likes} Likes</p>
        </div>
      </div>
     );
  }
}
 
export default GalleryItem;