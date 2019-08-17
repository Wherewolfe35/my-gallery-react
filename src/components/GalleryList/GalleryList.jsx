import React, { Component } from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from '@material-ui/core/Grid';

class GalleryList extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="photoList">
        {this.props.galleryList.map(picture =>
          <div key={picture.id}>
            <Grid item xs={3}>
            <GalleryItem picture={picture} getGallery={this.props.getGallery}/>
            </Grid>
        </div>
          )}
      </div>
     );
  }
}
 
export default GalleryList;