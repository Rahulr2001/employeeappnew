import React, { Component } from 'react';
import './leave.css'
import { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../graphql/queries';

class Leavehistory extends Component{
  
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
                if (a.leavedate > b.leavedate) {
                  return -1;
                }
                return a.leavedate > b.leavedate ? 1 : 0;
              });
            } else {
              displayResults.sort((a, b) => {
                if (a.leavedate < b.leavedate) {
                  return -1;
                }
                return a.leavedate > b.leavedate ? 1 : 0;
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
                if (a.leavename > b.leavename) {
                  return -1;
                }
                return a.leavename > b.leavename ? 1 : 0;
              });
            } else {
              displayResults.sort((a, b) => {
                if (a.leavename < b.leavename) {
                  return -1;
                }
                return a.leavename > b.leavename ? 1 : 0;
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
      

    render(){

        return(
        <div className='leave'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <select 
          className='nameselect'
          onChange={this.onChange}>
          {
          this.state.employees.map((rest, i) => (
              <option className='optiondd' key={i} value={rest.name} >{rest.name}</option>
              ))
          } 
          </select>
        <table>
        <tr className="leavetable">
        <th className='namey'>Name
        <button onClick={this.sortResults}className='sortbtn'><i class="fa fa-sort"></i></button>
        </th>
        <th className='datey'>Date
        <button onClick={this.sortResultsage} className='sortbtn'><i class="fa fa-sort"></i></button>
        </th>
        <th className='descrip'>Description</th>
        <th className='usedey'>Used</th>
        </tr> 
        {
        this.state.displayResults.map((rest, i) => (
      <tr key={i} className='apidata'>
      <td>{rest.leavename}</td>
      <td>{rest.leavedate}</td>
      <td>{rest.leavenote}</td>
      <td>{rest.leavedays}</td>
    </tr>  
    ))
    }
        </table>
        </div>
        )
    }
}

export default Leavehistory;