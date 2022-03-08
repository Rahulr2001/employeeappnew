import React, { Component } from 'react';
import './leave.css';
import { API, graphqlOperation } from 'aws-amplify'
import $ from 'jquery';
import { updateTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';




class Leaveform extends Component{    
    
  state = {  employees: [],   
  }

  async componentDidMount() {
    try {      
      const apiData = await API.graphql(graphqlOperation(listTodos))
      const employees = apiData.data.listTodos.items
      this.setState({ employees })
      console.log(employees)
      
    } catch (err) {
      console.log('error: ', err)
    }
  }
    
    


    render(){
          
      


      
      $(function(){
        
        $('#btnreq').click(function() {
        var leavedate = $('#d1').val();
        var leavedays = $('#dif').text();
        var leavenote=$('#notee').val();       
        var id=document.getElementById("restid").value;
        let leavename = $("#restid option:selected").text();
        const updatei = async (id,leavedate,leavedays,leavenote,leavename) => {
          try {
            const value = { id,leavedate,leavedays,leavenote,leavename}
            //const restaurants = [...this.state.restaurants, restaurant]
            //this.setState({ restaurants, Name: '', Email: '', Location: '' })
            await API.graphql(graphqlOperation(updateTodo, {input: value}))
            console.log('Data successfully created!')
            alert('Data is updated..')
           
          } catch (err) {
            console.log('error: ', err)
            alert(err)
          }
        } 
        updatei(id,leavedate,leavedays,leavenote,leavename);
        
      });  
      }
      )


      $(function(){
        var dtToday = new Date();
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        var maxDate = year + '-' + month + '-' + day;
    
        // or instead:
        // var maxDate = dtToday.toISOString().substr(0, 10);
    
        $('#d1').attr('min', maxDate);
       });
       
       $(function(){
        var dtToday = new Date();
        
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        var maxDate = year + '-' + month + '-' + day;
    
        // or instead:
        // var maxDate = dtToday.toISOString().substr(0, 10);
    
        $('#d2').attr('min', maxDate);
       });
      



        $(document).ready(() => {
            //$('#calc').click(() => {
            var d1 = $('#d1').val();
            var d2 = $('#d2').val();
            $('.fleave').on('change', function(){
              $(this).attr('id') == 'startDate' ?
              $('#d2').attr('min', $(this).val()) :
              $('#d1').attr('max', $(this).val())
              if($('#d1').length && $('#d2').length) {
                const d1 = new Date($('#d1').val()),
                      d2 = new Date($('#d2').val()),
                      diff = (d2-d1)/864e5,
                      dateFormat = {weekday:'long',month:'short',day:'numeric'},
                      dates = Array.from(
                        {length: diff+1},
                        (_,i) => {
                          const date = new Date() 
                          date.setDate(d1.getDate()+i) 
                          const [weekdayStr, dateStr] = date.toLocaleDateString('en-US',dateFormat).split(', ')
                          return `${dateStr} ${weekdayStr}`
                        }
                      ),
                      dateListItems = dates.map(d => `<li>${d}</li>`)
                $('#dateList').html(dateListItems)
                $('#dif').text(workingDaysBetweenDates(d1,d2));
              }
            })      
                     
           // });
          });
          let workingDaysBetweenDates = (d0, d1) => {
            /* Two working days and an sunday (not working day) */
            //var holidays = ['2016-05-03', '2016-05-05', '2016-05-07'];
            
            var startDate = new Date(d0);
            var endDate = new Date(d1);  
          
          // Validate input
            if (endDate < startDate) {
              return "Invalid ";
            }
          
          // Calculate days between dates
            var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
            startDate.setHours(0, 0, 0, 1);  // Start just after midnight
            endDate.setHours(23, 59, 59, 999);  // End just before midnight
            var diff = endDate - startDate;  // Milliseconds between datetime objects    
            var days = Math.ceil(diff / millisecondsPerDay);
          
            // Subtract two weekend days for every week in between
            var weeks = Math.floor(days / 7);
            days -= weeks * 2;
          
            // Handle special cases
            var startDay = startDate.getDay();
            var endDay = endDate.getDay();
              
            // Remove weekend not previously removed.   
            if (startDay - endDay > 1) {
              days -= 2;
            }
            // Remove start day if span starts on Sunday but ends before Saturday
            if (startDay == 0 && endDay != 5) {
              days--;  
            }
            // Remove end day if span ends on Saturday but starts after Sunday
            if (endDay == 5 && startDay != 0) {
              days--;
            }
            /* Here is the code */
           // holidays.forEach(day => {
            //  if ((day >= d0) && (day <= d1)) {
                /* If it is not saturday (6) or sunday (0), substract it */
            //    if ((parseDate(day).getDay() % 6) != 0) {
           //       days--;
           //     }
            //  }
           // });
            return "Total Weekdays :"+" "+days+" "+"days" ;
          }
                     
         // function parseDate(input) {
              // Transform date from text to date
            //var parts = input.match(/(\d+)/g);
            // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
            //return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
           // return new Date();
          //}
          
        return(
            <div className='leave'>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1 id='result'>Request Time Off</h1>
            <form>

           
            <select  id="restid" >
               {
          this.state.employees.map((rest, i) => (
              <option  key={i} value={rest.id} >{rest.name}</option>
              ))
          }
            </select>
               
            
            <div className='datepick'>
            <div>
            <label>From*</label>
            <input type="date" className="fleave"  id="d1"  />
            </div>
            <h2 className='hyphen'>-</h2>
            <div>
            <label>To*</label>
            <input type="date" className='fleave'  id="d2"  />
            </div>
            </div>         
            
            <label className='amountlabel'>Amount*</label>
            <div className='amount1'>
            <div className='amount'>
            <ul id="dateList" className='datelist'></ul>
            </div>
            <div className='totaldays'>
            <span className='total' id="dif"></span>  
            </div>        
            </div>

            
            <label>Note</label>
            <div>
            <textarea className='note' id="notee"></textarea>
            </div>
            <button id='btnreq' type='submit'>Send Request</button>
            

            </form>
            </div>
        )
        }
}

export default Leaveform;