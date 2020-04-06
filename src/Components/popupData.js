import React from "react";
import Modal from 'react-modal'
import '../search.css'
export default function MyVerticallyCenteredModal(props) {

const obj=JSON.parse(localStorage.getItem(props.dt)) || '';

 return (
          
   <body >
   <div className="modal fade"> 
   <div className="modal-dialog modal-sm">
    <Modal isOpen={props.show}>
        
    <h5 class="modal-title" style={{background:'#e74c3c',textAlign:'center' }}>VIEW</h5>

    <div class="modal-header">
        <h5 class="modal-title font-bold" id="exampleModalLabel">RECORD</h5>
</div>



    <div class="modal-body">


<div className="">
<div class="content my-5">
  <div class="container card">
    <div class="firstinfo"><img src={`data:image/jpeg;base64,${obj.Image}`} alt="Image not loaded"/>
      <div class="profileinfo">  
        <h1>{obj.Firstname} {obj.LastName}</h1> <br></br>
        <h3> <span>&#xe567;</span>   {obj.Address} </h3>
        <h3> <span>&#9751;</span>   {obj.Email} </h3>
        <h3> <span>&#9743;</span>   {obj.Phone} </h3>

        <p class="bio">Software Developer</p>
        
      </div>
    </div>
  </div>
  <div class="badgescard"> <span class="devicons devicons-django"></span><span class="devicons devicons-python"> </span><span class="devicons devicons-codepen"></span><span class="devicons devicons-javascript_badge"></span><span class="devicons devicons-gulp"></span><span class="devicons devicons-angular"></span><span class="devicons devicons-sass"> </span></div>
</div>
</div>


      </div>


        <div class="modal-footer" style={{background:'#e74c3c',textAlign:'center' }}>
        <button type="button" class="btn btn-secondary" onClick={props.onHide}  >Close</button>
      </div>
    </Modal>
    </div>
    </div>
    </body>
  );
}
