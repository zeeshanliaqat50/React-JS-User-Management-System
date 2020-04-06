import React, { Component } from 'react'
import Popup from './popupData'
import {Link} from 'react-router-dom'
import UpdatePanel from './updatePanel'

import '../bootstrap/card.css'

export default class ListComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            k: this.props.Key ,
            ModalShow : false,
            UpdateModal : false,
            img : this.props.imagee,
           
        }
    }

    Viewhandler = () => {
     
      this.setState({
        ModalShow : true
      })
      
    }
    deleteHandler=()=>{
        alert("Data Deleted");
        localStorage.removeItem(this.state.k) ;
        
        this.updatePage();
        
    }
    updatePage=()=>
    {
      this.props.rerenderParentCallback();
    }
    updateHandler=()=>
    {
      this.setState({
        UpdateModal : true
      })
      
    }
        
    handleCheck=(evt)=>
    {

      if(evt.target.checked)
      {
        this.props.SelectedItems(this.state.k);
      }
      else
      {
        this.props.DeselectItems(this.state.k);
      }
    }
    render() {
     
        return (

          
            <div className="">

<div class="content my-5">
  <div class="container card">
    <div class="firstinfo"><img src={`data:image/jpeg;base64,${this.state.img}`} alt="not loaded" />  
      <div class="profileinfo">

        <h1>{this.props.Firstname} {this.props.Lastname}         <input type="checkbox" aria-label="Checkbox for following text input" className=" btn btn-dark" onChange={this.handleCheck} />
</h1>         
        <h3> <span>&#9993;</span> {this.props.Email} </h3>
        <p class="bio">Software Developer</p>
        <div >
        <button  className="btn btn-dark"  onClick={this.Viewhandler}> View </button> 
      <button  className="btn btn-dark mx-2" onClick={this.updateHandler}> Update</button> 
       <button  className="btn btn-dark" onClick={this.deleteHandler}> Delete</button>
       </div>
      </div>
    </div>
  </div>
  <div class="badgescard"> <span class="devicons devicons-django"></span><span class="devicons devicons-python"> </span><span class="devicons devicons-codepen"></span><span class="devicons devicons-javascript_badge"></span><span class="devicons devicons-gulp"></span><span class="devicons devicons-angular"></span><span class="devicons devicons-sass"> </span></div>
</div>


          <Popup   dt={this.state.k} show={this.state.ModalShow} onHide={() => this.setState({ModalShow : false})}  />       
          <UpdatePanel dt={this.state.k} show={this.state.UpdateModal} onHide={() => this.setState({UpdateModal : false})}   />
            </div>
        )
    }
}