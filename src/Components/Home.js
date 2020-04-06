import React, { Component } from 'react'
import ListComp from './ListComp'
import '../bootstrap.min.css'
import '../bootstrap.css'
import '../App.css';
export default class Index extends Component
{
    constructor(props)
    {
        super(props)

        this.state={
            change : false,
            selectedItems : new Set() ,
            delBtn : false
        }
    }
    rerenderParentCallback=() => {
      this.setState(
          {
              change : true
          }
      )
      }
    
   SelectItems=(value)=>{

   
    this.state.selectedItems.add(value)
    console.log(this.state.selectedItems);
    this.setState({
        delBtn :  this.state.selectedItems.size>0  ? true : false 
    })
   }
   DeselectItem=(value)=>{
       this.state.selectedItems.delete(value);
       this.setState({
        delBtn :  this.state.selectedItems.size>0  ? true : false 
    })

   }
   deleteSelected=()=>{
    
    
    this.state.selectedItems.forEach((v)=>(window.localStorage.removeItem(v)));
    this.setState({selectedItems: []});
    this.setState({delBtn : false})
    alert("Deleted");

   }
    render()
    {
        
        const local = localStorage;
        const lst=Object.keys(local).map((el)=>( <ListComp   SelectedItems={this.SelectItems} DeselectItems={this.DeselectItem}   rerenderParentCallback={this.rerenderParentCallback} Key={el} Firstname={JSON.parse(local.getItem(el)).Firstname.trim()} Lastname= {JSON.parse(local.getItem(el)).LastName.trim()} Email= {JSON.parse(local.getItem(el)).Email} imagee={JSON.parse(local.getItem(el)).Image} />  ));
        return(
            <div className="container">
                <div>
               {this.state.delBtn ?  <button  type="button"  onClick={this.deleteSelected}  class=" container btn btn-success" style={{marginTop : '5px'}}>Delete</button> : null }
                {lst} 
                </div>
            </div>
        )
    }
}