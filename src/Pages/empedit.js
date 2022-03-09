import React, { useState, useEffect,Component } from "react";
import { listTodos } from "../graphql/queries";
import { deleteTodo } from "../graphql/mutations";
import "./Pages.css"
import { API, graphqlOperation } from 'aws-amplify'
import SearchIcon from '@mui/icons-material/Search';

//onst [order,setorder]=useState("ASC");
class Empeditttt extends Component
{
  
  state = {  employees: [],
    originalResults: [],
    displayResults: []
   }

  

  
  async componentDidMount() {
    try {
      
      const apiData = await API.graphql(graphqlOperation(listTodos))
      const employees = apiData.data.listTodos.items
      this.setState({ employees })
      this.setState({ originalResults: employees, displayResults: employees });
      console.log(employees)
      
    } catch (err) {
      console.log('error: ', err)
    }
  }

  filterResults = (query, results) => {
    return results.filter(employee => {
      const name=employee.name.toLowerCase();
      return name.includes(query);
    });
  };
  sortResultsage = event => {
    this.setState(prevState => {
      const { displayResults, sortOrder } = prevState;

      if (sortOrder === "descending") {
        displayResults.sort((a, b) => {
          if (a.age > b.age) {
            return -1;
          }
          return a.age > b.age ? 1 : 0;
        });
      } else {
        displayResults.sort((a, b) => {
          if (a.age < b.age) {
            return -1;
          }
          return a.age > b.age ? 1 : 0;
        });
      }

      return {
        displayResults,
        sortOrder: sortOrder === "descending" ? "ascending" : "descending"
      };
    });
  };


  sortResults = event => {
    this.setState(prevState => {
      const { displayResults, sortOrder } = prevState;

      if (sortOrder === "descending") {
        displayResults.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          return a.name > b.name ? 1 : 0;
        });
      } else {
        displayResults.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          return a.name > b.name ? 1 : 0;
        });
      }

      return {
        displayResults,
        sortOrder: sortOrder === "descending" ? "ascending" : "descending"
      };
    });
  };

  onChange = e => {
    const query = e.target.value;

    this.setState(prevState => ({
      displayResults:
        query.length > 0
          ? this.filterResults(query, prevState.originalResults)
          : prevState.originalResults
    }));
  };

 handleRemove = async (id) => {
  
    //const { id } = values
    
    try {
      const value = { id}     
      await API.graphql(graphqlOperation(deleteTodo, {input: value}))
      alert('Data is deleted..')
      window.location.reload();
    } catch (err) {
      console.log('error: ', err)
    }
  }

render() {

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="filters">
<button className="btn" >Sort by:</button>
<div className="dropdown">
  <button className="btn">
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content">
    <a onClick={this.sortResults}>Name</a>
    <a onClick={this.sortResultsage}>Age</a>
    
  </div>
  
</div>
<SearchIcon className="searchicon"></SearchIcon>
<input className="searchbar" label="Search" onChange={this.onChange} placeholder="  search by employee" />

</div>
  <div className="empcontainer0" >
    
<table className="pctable">
  
  <tr className="tabletitle">
    <th>Employee-ID</th>
    <th
     
     >Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Age</th>
    <th>Address</th>
    <th>Country</th>
  </tr>{
    this.state.displayResults.map((rest, i) => (
  <tr key={i}>
    <td className="tablestyle">{rest.id}</td>
    <td>{rest.name}</td>
    <td>{rest.email}</td>
    <td>{rest.phone}</td>
    <td>{rest.age}</td>
    <td>
      <p>{rest.address}</p>
      <p>{rest.city}</p>
      <p>{rest.state}</p>
      </td>
    <td>{rest.country}</td> 
    <td>
    <button onClick={() => this.handleRemove(rest.id)} className='deletey'><i className="fa fa-trash-o"></i></button>
    </td>
    </tr>
    
  ))
  }
</table>
  {
    this.state.employees.map((rest, i) => (
      <table className="mobiletable">
      <tr className="mtname">
        <th>Name</th>
        <td>{rest.name} |   ID:{rest.id}</td>
        </tr>
      
      <tr className="mtda">
        <th className="mtdobt">
          <p>Date of birth:</p>
        </th>
        <th className="mtaget">
          Age:
        </th>
        </tr>
        <tr>
        
         <td className="mtage">{rest.dob}</td> 
        <td className="mtdob">{rest.age}</td>
        
      </tr>
      
      <th className="mtaddresst">Address:</th>
      <td className="mtaddress">
      <p>{rest.address}</p>
      <p>{rest.city}</p>
      <p>{rest.state}</p>
      </td>
      <tr className="mtcountryt">
        <th>Country:</th>
        <td className="mtcountry">{rest.country}</td>
      </tr>
      <tr>
        <th>
          Email id:
        </th>
        <td>
          {rest.email}
        </td>
      </tr>
      <tr>
        <th>
          Phone.num:
        </th>
        <td>
          {rest.phone}
        </td>
      </tr>
      
  </table>
  
  ))
  }
  

  </div></div>
);




}


 
}

export default Empeditttt;