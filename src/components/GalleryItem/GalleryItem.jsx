import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {  }
  render() { 
    console.log(this.props);
    
    return (  
      <div key={this.props.picture.id} className="galleryItem">
        <img src={this.props.picture.path} alt={this.props.picture.description} />
        <div className="galleryCaption">
          <button>Like</button><br/>
          <p>{this.props.picture.likes} Likes</p>
        </div>
      </div>
     );
  }
}
 
export default GalleryItem;