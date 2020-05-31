import React, { Component } from "react";
import "./Get.css";
import axios from "axios";

class Get extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       get: []
    }
  }
  
componentDidMount(){
  axios.get(`https://cors-anywhere.herokuapp.com/dakom1-crud-api.herokuapp.com/lists`,{headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}})
  .then(res => {
    console.log(res)
    this.setState({get: res.data})

  })
  .catch(error =>{
    console.log(error)
  })
}

  render() {
      const {get} = this.state
      function compare_qty(a, b){
        // a should come before b in the sorted order
        if(a._id < b._id){
                return -1;
        // a should come after b in the sorted order
        }else if(a._id > b._id){
                return 1;
        // a and b are the same
        }else{
                return 0;
        }
}
      let gets = get.sort(compare_qty)
      console.log(gets);
      return(
        <div>
          List of Pokemon
          <p>Pokemon<span></span><span></span>ID</p>
          {
            gets.length ? gets.map(gets => <div className="pkmn" key={gets._id}><div><img src={gets.pic} alt={""}></img></div>{gets.name}<span></span>{gets._id}</div>
            ): null
          }
        </div>
      );
    };
  }

export default Get;
