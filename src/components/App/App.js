import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryList:[]
  }

  componentDidMount(){
    this.getGallery();
  }

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
          <h1 className="App-title">Gallery of a life</h1>
        </header>
        <br/>
        <GalleryList galleryList={this.state.galleryList} getGallery={this.getGallery}/>
      </div>
    );
  }
}

export default App;
