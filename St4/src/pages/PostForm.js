import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const galleryStyle = {
    border: 'none',
    margin: 0,
    color: '#fff',
    fontWeight: 'bold',
    padding: '16px 20px',
    position: 'absolute',
    top: '75px',
    right: '200px',
    background: '#7bc74d',
}
const postBtnStyle = {
    border: 'none',
    margin: 0,
    color: '#fff',
    fontWeight: 'bold',
    padding: '16px 20px',
    background: '#7D4C92 ',
    width: '85%',
}
const parentDiv = {
    align: 'center',
    margin: '0px auto auto auto',
    textAlign: 'center',
}
const formStyle = {
    width: '400px',
    border: '1px solid lightgray',
    margin: '10px auto 10px auto',
    textAlign: 'center',
    padding: '30px 40px 30px 40px',
}
const inputFields = {
    width: '85%',
    fontFamily: 'arial',
    padding: '4px',
}

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const image = this.getImage.value;
        localStorage.setItem('title', title);
        localStorage.setItem('message', message);
        localStorage.setItem('image', image);
        this.getTitle.value = '';
        this.getMessage.value = '';
        this.getImage.value = '';
    }
    render() {
        return (
            <div style={parentDiv}>
                <h1 style={{ color: '#8A2482' }}>Pics
                    <span style={{ color: '#248A6E' }}>Villa</span>
                </h1>

                <p>One place stop for all kinds of images</p>

                <hr></hr>
                <h3>Create a new Post</h3>
                <form onSubmit={this.handleSubmit} style={formStyle}>
                    <input style={inputFields} required type="text"
                        placeholder="Enter Post Title"
                        ref={(input) => this.getTitle = input}
                    /><br /><br />
                    <input style={inputFields} required type="text"
                        placeholder="Paste your image url here"
                        ref={(input) => this.getImage = input}
                    /><br></br>
                    <br></br>
                    <textarea style={inputFields}
                        required rows="5" cols="28"

                        placeholder="Enter Comment"
                        ref={(input) => this.getMessage = input} />
                    <br /><br />
                    <button style={postBtnStyle}>Post</button>
                </form>
                <Link to='/gallery'>
                    <button style={galleryStyle}>
                        View Gallery
                    </button>
                </Link>
            </div>
        );
    }
}
export default PostForm;
// import React, { useState } from "react";
// const UploadAndDisplayImage = () => { const [selectedImage, setSelectedImage] = useState(null); return (<div> <h1>Upload and Display Image usign React Hook's</h1> {selectedImage && (<div> <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} /> <br /> <button onClick={() => setSelectedImage(null)}>Remove</button> </div>)} <br /> <br /> <input type="file" name="myImage" onChange={(event) => { console.log(event.target.files[0]); setSelectedImage(event.target.files[0]); }} /> </div>); }; export default UploadAndDisplayImage;
