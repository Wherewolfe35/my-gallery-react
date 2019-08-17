import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from "../GalleryForm/GalleryForm";

class App extends Component {
  state = {
    galleryList:[]
  }

  //Get happens upon page load
  componentDidMount(){
    this.getGallery();
  }

  //Get request
  getGallery = () => {
    console.log('in getGallery');
    Axios.get('/gallery').then((response)=>{
      console.log('This is response from server', response.data);
      this.setState({
        galleryList: response.data
      })
    })
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of a Life</h1>
        </header>
        <GalleryForm getGallery={this.getGallery}/>
        <br/>
        <GalleryList galleryList={this.state.galleryList} getGallery={this.getGallery}/>
      </div>
      
    );
  }
}

export default App;
