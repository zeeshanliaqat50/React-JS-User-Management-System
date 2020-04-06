import React, { PureComponent } from "react";
import Modal from 'react-modal'
export default class MyVerticallyCenteredModal extends PureComponent {

  // console.log(props)
  // const obj = JSON.parse(localStorage.getItem(props.dt)) || '';
  // console.log(obj);

    constructor(props)
    {
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
        disp : '' ,
        GlobalError: true ,
        key : this.props.dt
    }
}

FNameHandler = (event) => {
    const value = event.target.value;

    const error = /^[a-zA-Z]+$/.test(value) && (value.length >= 5 && value.length <= 10)

    this.setState({ ErrorFName: error ? ' ' : 'Please Enter Valid Name -Min length : 5 Max Length : 10', GlobalError: !error ,firstname : value})

    console.log(error);
}
LNameHandler = (event) => {
    const value = event.target.value;

    const error = /^[a-zA-Z]+$/.test(value) && (value.length >= 5 && value.length <= 10)

    this.setState({ ErrorLName: error ? ' ' : 'Please Enter Valid Name -Min length : 5 Max Length : 10', GlobalError: !error,lastname : value })
    console.log(error);
}
EmailHandler = (event) => {
    const value = event.target.value;

    const error = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)

    this.setState({ ErrorEmail: error ? ' ' : 'Please Enter Valid Email', GlobalError: !error,email : value })
    console.log(error);
}

PhoneHandler = (event) => {
    const value = event.target.value;
    console.log(event);
    const error = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(value)
    this.setState({ ErrorPhone: error ? ' ' : 'Please Enter Valid Phone.No', GlobalError: !error,phone : value })
    console.log(error);
}

AddressHandler = (event) => {
    const value = event.target.value;

    const error = value.length > 100 ? false : true;
    this.setState({ ErrorAdd: error ? ' ' : 'Max 100 Characters Allowed', GlobalError: !error  ,address : value})
    console.log(error);
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
     event.preventDefault();
     alert("Submited");
     const User_details={
         Firstname : this.state.firstname,
         LastName : this.state.lastname ,
         Email : this.state.email,
        Phone : this.state.phone,
    Address : this.state.address  ,
    Image : this.state.image
 }
 localStorage.setItem(this.state.key,JSON.stringify(User_details))
 }
 componentDidMount()
 {
  console.log(this.props)
  const obj = JSON.parse(localStorage.getItem(this.props.dt)) || '';
 console.log(obj);

 this.setState({
    firstname : obj.Firstname,
  lastname : obj.LastName ,
  email : obj.Email,
 phone : obj.Phone,
address : obj.Address  ,
image : obj.Image
});
 }

  render(){
  return (
    <div className="modal fade">
      <div className="modal-dialog modal-sm">
        <Modal isOpen={this.props.show}>

        <h5 class="modal-title" style={{background:'#e74c3c',textAlign:'center' }}>UPDATE</h5>


          <div class="modal-header" >
            <h5 class="modal-title" id="exampleModalLabel">Record</h5>
          </div>
          <div class="modal-body">

          <div className="container">
                <form onSubmit={this.submitData}>
                    <div className="form-group">
                        <br></br>

                        <div class="text-center">
                <img src={this.state.disp} class="rounded"  style={{width : '100px' ,height : '100px'} }alt="..." />
                </div>


                        <div className="form-group">

                        <label>Upload Profile Picture</label>
                          <input   onChange={this.FileHandler} type="file" className="form-control" ></input>
                        </div>

                        <input onChange={this.FNameHandler} className="form-control" type="text" min='5' max='10' placeholder="First Name" id="name" value={this.state.firstname} required />
                        <text>{this.state.ErrorFName}</text>
                    </div>
                    <div className="form-group">

                        <input onChange={this.LNameHandler} className="form-control" type="text" placeholder="Last Name"  value={this.state.lastname} required />
                        <text>{this.state.ErrorLName}</text>
                    </div>
                    <div className="form-group">

                        <input onChange={this.EmailHandler} className="form-control" type="email" placeholder="Email Address"  value={this.state.email} required />
                        <text>{this.state.ErrorEmail}</text>
                    </div>
                    <div className="form-group">

                        <input onChange={this.PhoneHandler} className="form-control" type="tel" placeholder="Phone"  value={this.state.phone} required />
                        <text>{this.state.ErrorPhone}</text>
                    </div>
                    <div className="form-group">

                        <input onChange={this.AddressHandler} className="form-control" type="text" maxLength="100" placeholder="Address"  value={this.state.address} required />
                        <text>{this.state.ErrorAdd}</text>
                    </div>
                    <input className="btn btn-dark btn-block mx-2" disabled={Boolean(this.state.GlobalError)} type="submit" value="Save Changes" />
                </form>
            </div>



          </div>


          <div class="modal-footer" style={{background:'#e74c3c',textAlign:'center' }}>
            <button type="button" class="btn btn-secondary" onClick={this.props.onHide} >Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
}
