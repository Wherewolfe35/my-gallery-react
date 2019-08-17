import React, { Component } from 'react';
import Axios from 'axios';

class GalleryForm extends Component {
  state = { 
    path: '',
    description: '',
   }

   //POST request
  addPhoto = () =>{
    console.log('In addPhoto');
    Axios.post('/gallery', this.state)
    .then((response)=>{
      console.log(response);
      this.props.getGallery();
      this.emptyInputs();
    }).catch((error)=>{
      console.log(error);
    })
  }

  //Keep track of inputs
  handleChange = (event, propertyName) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    })
  }

  emptyInputs = ()=>{
    this.setState({
      path: '',
      description: ''
    })
  }

  render() { 
    return ( 
      <div>
        <input value={this.state.path} type="text" placeholder="URL" onChange={(event) => this.handleChange(event, 'path')}/>
        <input value={this.state.description} type="text" placeholder="Caption" onChange={(event) => this.handleChange(event, 'description')}/>
        <button onClick={this.addPhoto}>Add To Gallery</button>
      </div>
     );
  }
}
 
export default GalleryForm;