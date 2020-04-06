import React, { Component } from 'react'
import ListComp from './ListComp'
import '../bootstrap.min.css'
import '../bootstrap.css'
import '../App.css';
import '../search.css'
export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            change: false,
            data : [] ,
            query : ' ',
            filtereddata: [],

        }
    }
    ChangeHandler=(event)=>{

        const query1=event.target.value;
        this.setState({query : query1})
            
        // const local = localStorage;
        // const lst = Object.keys(local).map((el) => (JSON.parse(local.getItem(el)).Firstname.trim().toLowerCase().includes(query1.toLowerCase)))


        // console.log("obje "+lst)

            this.setState({filtereddata : ''});
            let filterdata= '';
            filterdata=this.state.data.filter(element=>(this.state.query.toLowerCase().includes(element.props.Firstname.toLowerCase()) || this.state.query.toLowerCase().includes(element.props.Lastname.toLowerCase()) ));
            this.setState({filtereddata : filterdata});
            console.log("Got data"+filterdata);


    }
    rerenderParentCallback = () => {
        alert("Deleted");
        this.setState(
            {
                change: true
            }
        )
    }


    componentDidMount()
    {

        const local = localStorage;
        const lst = Object.keys(local).map((el) => (<ListComp rerenderParentCallback={this.rerenderParentCallback} Key={el} Firstname={JSON.parse(local.getItem(el)).Firstname.trim()} Lastname={JSON.parse(local.getItem(el)).LastName.trim()} Email={JSON.parse(local.getItem(el)).Email} imagee={JSON.parse(local.getItem(el)).Image} />));
        this.setState({
        data : lst,
        filtereddata : []
        })

        
    

    }
    render() {


        
        
        return (
            <div className="container">
                <div className="container">
                    <form className="form-inline">
                       
        <div class="container h-100 mt-5">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..."  onChange={this.ChangeHandler} />
          <a href="#" class="search_icon"><span>&#9740;</span>
</a>
        </div>
      </div>
    </div>
                    </form>
                </div>
                    <div>
                        {this.state.filtereddata}
                    </div>


                </div>
        )
    }
}