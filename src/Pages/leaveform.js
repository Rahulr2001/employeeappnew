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
      


      
      $(document).ready(function () {
        
        // Validate Username
            $('#usercheck').hide();   
            let usernameError = true;
            $('#d1').keyup(function () {
                validateUsername();
            });
             
            function validateUsername() {
              let leavedat = $('#d1').val();
              if (leavedat.length == '') {
              $('#usercheck').show();
                  usernameError = false;
                  return false;
              }
              else {
                  $('#usercheck').hide();
                  usernameError=true;
              }
            } 
            
            $('#usercheck2').hide();   
            let usernameError1 = true;
            $('#d2').keyup(function () {
                validateUsername2();
            });
             
            function validateUsername2() {
              let leavedat2 = $('#d2').val();  
              if (leavedat2.length == '') {
              $('#usercheck2').show();
                  usernameError = false;
                  return false;
              }
              else {
                  $('#usercheck2').hide();
                  usernameError1=true;
              }
            }   
            
            $('#notecheck').hide();   
            let noteError = true;
            $('#notee').keyup(function () {
                validatenote();
            });
             
            function validatenote() {
              let leavenot = $('#notee').val();  
              if (leavenot.length == '') {
              $('#notecheck').show();
                  noteError = false;
                  return false;
              }
              else {
                  $('#notecheck').hide();
                  noteError=true;
              }
            }

            $('#amountcheck').hide();   
            let amountError = true;
            $('#dif').keyup(function () {
                validateamount();
            });
             
            function validateamount() {
              var customString="Invalid";    
              //let leaveamt = $('#dif').text().trim();  
              if (customString == $('#dif').text()) {
              $('#amountcheck').show();
                  amountError = false;
                  return false;
              }
              else {
                  $('#amountcheck').hide();
                  amountError=true;
              }
            }



        // Submit button
            $('#btnreq').click(function (e) {
                validateUsername();
                validateUsername2();
                validatenote();
                validateamount();
                
                if ((usernameError == true) &&
                (usernameError1 == true) && (noteError == true) && (amountError == true)) 
                {  
                  e.preventDefault();               
                  var leavedate = $('#d1').val();
                  var leavedays = $('#dif').text();
                  var leavenote=$('#notee').val();       
                  var id=document.getElementById("restid").value;
                  let leavename = $("#restid option:selected").text();
                  console.log(id,leavedate,leavedays,leavenote,leavename)
                  const updatei = async (id,leavedate,leavedays,leavenote,leavename) => {
                    try {
                      const value = { id,leavedate,leavedays,leavenote,leavename}
                      //const restaurants = [...this.state.restaurants, restaurant]
                      //this.setState({ restaurants, Name: '', Email: '', Location: '' })
                      await API.graphql(graphqlOperation(updateTodo, {input: value}))
                      console.log('Data successfully created!')
                      
                    } catch (err) {
                      console.log('error: ', err)
                      alert(err)
                    }
                  } 
                  updatei(id,leavedate,leavedays,leavenote,leavename);
                  return true;
                }  
                else {
                  
                    return false;
                }
            });
        });

        
        /*e.preventDefault();
        var leavedate = $('#d1').val();
        var leavedays = $('#dif').text();
        var leavenote=$('#notee').val();       
        var id=document.getElementById("restid").value;
        let leavename = $("#restid option:selected").text();
        console.log(id,leavedate,leavedays,leavenote,leavename)
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
        updatei(id,leavedate,leavedays,leavenote,leavename);*/
        
      


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
                 
                     
           // });
          });
        });
          let workingDaysBetweenDates = (d0, d1) => {
            /* Two working days and an sunday (not working day) */
            //var holidays = ['2016-05-03', '2016-05-05', '2016-05-07'];
            
            var startDate = new Date(d0);
            var endDate = new Date(d1);  
          
          // Validate input
            if (endDate < startDate) {
              return "Invalid";
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
              
            <h1 id='result'>Request Time Off</h1>
            <form action="">

           
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
            <input type="date" className="fleave"  id="d1"/>
            <small id="usercheck">
                    select your date
              </small>
            
            </div>
            <h2 className='hyphen'>-</h2>
            <div>
            <label>To*</label>
            <input type="date" className='fleave'  id="d2"/>
            <small id="usercheck2">
                 select your date
              </small>
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
            <small id="amountcheck">
                    enter valid date
              </small>


            
            <label>Note</label>
            <div>
            <textarea className='note' id="notee"></textarea>
            <small id="notecheck">
                    this field cannot be empty
              </small>
            </div>
            <button type="submit" id="btnreq"
             value="Submit">Request Leave</button>
            </form>
            
            

            
            </div>
        )
        }
}

export default Leaveform;