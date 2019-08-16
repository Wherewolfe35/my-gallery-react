import React, { Component } from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="photoList">
        {this.props.galleryList.map(picture =>
          <GalleryItem picture={picture}/>
          )}
      </div>
     );
  }
}
 
export default GalleryList;