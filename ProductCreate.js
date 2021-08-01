import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'

 class ProductCreate extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            type:"",
            brand:"",
            price:"",
            
        }
    }

    updateState(){
        fetch("http://localhost:3000/product",{
            method:"POST",

            headers: {
                'Content-type': 'application/json'
              },
              body:JSON.stringify(this.state)
            }).then((result)=>{
                result.json().then((a)=>{
                    alert("Product Created succesfully")

                })
            })
       

    }




    render() {
        return (
            <div>
                <h1>Create New Product</h1>
                <TextField label="Enter product Name" variant="standard" color="primary" onChange={(e)=>{this.setState({name:e.target.value})}}></TextField><br></br><br></br>
                <TextField label="Type" variant="standard" color="primary" onChange={(e)=>{this.setState({type:e.target.value})}}></TextField><br></br><br></br>
                <TextField label="Brand" variant="standard" color="primary" onChange={(e)=>{this.setState({brand:e.target.value})}}></TextField><br></br><br></br>
                <TextField label="Price" variant="standard" color="primary" onChange={(e)=>{this.setState({price:e.target.value})}}></TextField><br></br><br></br>
                <TextField label="Image" color="standard" type="file"></TextField><br></br><br></br>

                <Button variant="contained" color="primary" onClick={()=>{this.updateState()}}>SUBMIT</Button>
            </div>
        )
    }
}

export default ProductCreate;