import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import {avt} from './avt.png'
export default class UserInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            image: '',
            ErrorFName: '',
            ErrorLName: '',
            ErrorEmail: '',
            ErrorPhone: '',
            ErrorAdd: '',
            disp : '',
            GlobalError: true ,
            key : localStorage.length==0 ? 0 : localStorage.length+2
        }
    }

    FNameHandler = (event) => {
        const value = event.target.value;

        const error = /^[a-zA-Z]+$/.test(value) && (value.length >= 5 && value.length <= 10)

        this.setState({ ErrorFName: error ? ' ' : 'Please Enter Valid Name -Min length : 5 Max Length : 10', GlobalError: !error ,firstname : value})

       
    }
    LNameHandler = (event) => {
        const value = event.target.value;

        const error = /^[a-zA-Z]+$/.test(value) && (value.length >= 5 && value.length <= 10)

        this.setState({ ErrorLName: error ? ' ' : 'Please Enter Valid Name -Min length : 5 Max Length : 10', GlobalError: !error,lastname : value })
    }
    EmailHandler = (event) => {
        const value = event.target.value;

        const error = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)

        this.setState({ ErrorEmail: error ? ' ' : 'Please Enter Valid Email', GlobalError: !error,email : value })
        
    }

    PhoneHandler = (event) => {
        const value = event.target.value;
        const error = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(value)
        this.setState({ ErrorPhone: error ? ' ' : 'Please Enter Valid Phone.No', GlobalError: !error,phone : value })
        
    }

    AddressHandler = (event) => {
        const value = event.target.value;

        const error = value.length > 100 ? false : true;
        this.setState({ ErrorAdd: error ? ' ' : 'Max 100 Characters Allowed', GlobalError: !error  ,address : value})
        
    }


  
    FileHandler=(evt)=>{

        console.log(evt.target.files[0]);  
        const disp1=URL.createObjectURL(evt.target.files[0])
 
        this.setState({disp : disp1})
       
            if (window.File && window.FileReader && window.FileList && window.Blob) {  
                var f = evt.target.files[0]; // FileList object
                var reader = new FileReader();
                // Closure to capture the file information.
                reader.onload = ((theFile) => {
                    return (e) => {
                        var binaryData = e.target.result;
                        //Converting Binary Data to base 64
                        var base64String = window.btoa(binaryData);
    
                        //putting file converted to base64  
                        console.log(base64String);
                        this.setState({image : base64String})
                        
                    };
                })(f);
                // Read in the image file as a data URL.
                reader.readAsBinaryString(f);
            } else {
                alert('The File APIs are not fully supported in this browser.');
            }  
     }
     submitData=(event)=>{
        // event.preventDefault();
         alert("Submited");
         

         
         const User_details={
             Firstname : this.state.firstname,
             LastName : this.state.lastname ,
             Email : this.state.email,
            Phone : this.state.phone,
        Address : this.state.address  ,
        Image : this.state.image
     }
      this.setState({key : this.state.key+1})
     localStorage.setItem(this.state.key,JSON.stringify(User_details))
     }
    render() {
        return (
            
            <div className="container">
                <form onSubmit={this.submitData}>
                    <div className="form-group">
                        <label className="font-italic font-weight-bold" >USER REGISTERATION</label> <br></br> <br></br>

                        <div class="container">
                <img src={this.state.disp} class=" rounded img-circle img-thumbnail" style={{width : '100px' ,height : '100px'}} alt="..." />
                </div>


                        <div className="form-group">
                            
                        <label>Upload Profile Picture</label>
                          <input   onChange={this.FileHandler} type="file" className="form-control" ></input>                            
                        </div>

                        <input onChange={this.FNameHandler} className="form-control" type="text" min='5' max='10' placeholder="First Name" id="name" required />
                        <text>{this.state.ErrorFName}</text>
                    </div>
                    <div className="form-group">

                        <input onChange={this.LNameHandler} className="form-control" type="text" placeholder="Last Name" required />
                        <text>{this.state.ErrorLName}</text>
                    </div>
                    <div className="form-group">

                        <input onChange={this.EmailHandler} className="form-control" type="email" placeholder="Email Address" required />
                        <text>{this.state.ErrorEmail}</text>
                    </div>
                    <div className="form-group">

                        <input onChange={this.PhoneHandler} className="form-control" type="tel" placeholder="Phone" required />
                        <text>{this.state.ErrorPhone}</text>
                    </div>
                    <div className="form-group">

                        <input onChange={this.AddressHandler} className="form-control" type="text" maxLength="100" placeholder="Address" required />
                        <text>{this.state.ErrorAdd}</text>
                    </div>
                    <input className="btn btn-dark btn-block mx-2" disabled={Boolean(this.state.GlobalError)} type="submit" value="SUBMIT" />
                </form>
            </div>



        
        )
    }
}
