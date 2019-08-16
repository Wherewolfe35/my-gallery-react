import React, { Component } from 'react';
import Axios from 'axios';

class GalleryItem extends Component {
  state = {  }

    increaseLikes = (Id) => {
      console.log('like increased');
      Axios.put(`./gallery/like/${Id}`).then((response)=>{
        console.log(response);
        this.props.getGallery();
      }).catch((error)=> {
        console.log(error);
      })
    }

  render() { 
    return (  
      <div className="galleryItem">
        <img src={this.props.picture.path} alt={this.props.picture.description} />
        <div className="galleryCaption">
          <button onClick={()=> this.increaseLikes(this.props.picture.id)}>Like</button><br/>
          <p>{this.props.picture.likes} Likes</p>
        </div>
      </div>
     );
  }
}
 
export default GalleryItem;