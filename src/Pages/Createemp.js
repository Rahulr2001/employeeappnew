import React, { Component } from "react";
import { createTodo } from '../graphql/mutations';
import { Formik } from "formik";
import * as Yup from "yup";
import { API, graphqlOperation } from 'aws-amplify'
import './Pages.css'
import PhoneInput from 'react-phone-input-2'





class Createemp extends Component{

  
render(){

  
    return(
        <div className="empcontainer">
    <Formik
      initialValues={
        {
            id:"",
            name:"",
            age:"",
            email:"",
            dob:"",
            phone:"",
            address:"",
            city:"",
            state:"",
            country:""
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
       //this.createRestaurant(values)
       const createi = async () => {
        //const { Name, Email, Location } = this.state
        const { id,name, email, phone, age, dob, address, city, state, country } = values
        //if (Name === '' || Email === '' || Location === '') return
        try {
          const value = { id,name, email, phone, age, dob, address, city, state, country}
          //const restaurants = [...this.state.restaurants, restaurant]
          //this.setState({ restaurants, Name: '', Email: '', Location: '' })
          await API.graphql(graphqlOperation(createTodo, {input: value}))
          console.log('Data successfully created!')
          alert('Data is Inserted..')
          window.location.reload();
        } catch (err) {
          console.log('error: ', err)
        }
      }
      
      createi();
      }}
    >
{
 
      ({ handleSubmit, handleChange, values, errors }) =>
       (
      <form className="container" onSubmit={handleSubmit}>
        <div >
        
        <label >EMPLOYEE-ID:</label>
          <input
            className=" id"
            name='id'
            //placeholder='6'
            onChange={handleChange}
            value={values.id}
            autoComplete="off"
            //value={this.state.Name}            
          />
          <small >{errors.id}</small>
          <label >EMPLOYEE-NAME:</label>
          <input
            name='name'
            //placeholder='Email'
            onChange={handleChange}
            autoComplete="off"
            //onChange={this.onChange}
            value={values.name}
            //value={this.state.Email}
                        
          />
          <small  >{errors.name}</small>

          <label >EMAIL:</label>
          <input
            name='email'
            //placeholder='Email'
            onChange={handleChange}
            //onChange={this.onChange}
            value={values.email}
            //value={this.state.Email}
            autoComplete="off"            
          />
          <small  >{errors.email}</small>
          <label>Phone.NO</label>
          <input
          id="phoneid"
          
          name='phone'
          type='number'
          onChange={handleChange}
          value={values.phone}
          autoComplete="off"
         />
          <small  >{errors.phone}</small>

          <label >DATE-OF-BIRTH:</label>
          <input
          type='date'
            name='dob'
            //placeholder='Email'
            onChange={handleChange}
            //onChange={this.onChange}
            value={values.dob}
            //value={this.state.Email}
            min="1950-01-01"
            autoComplete="off"            
          />
          <small  >{errors.dob}</small>

          <label >AGE:</label>
          <input
            name='age'
            type='number'
            //placeholder='Email'
            onChange={handleChange}
            //onChange={this.onChange}
            value={values.age}
            //value={this.state.Email}
            autoComplete="off"            
          />
          <small  >{errors.age}</small>

          <label >Address:</label>
          <input
            name='address'
            //placeholder='Email'
            onChange={handleChange}
            //onChange={this.onChange}
            value={values.address}
            //value={this.state.Email}
            autoComplete="off"                        
          />
          <small  >{errors.address}</small>

          <label >City:</label>
          <input
            name='city'
            //placeholder='Email'
            onChange={handleChange}
            //onChange={this.onChange}
            value={values.city}
            //value={this.state.Email}
            autoComplete="off"            
          />
          <small  >{errors.city}</small>

          <label >STATE:</label>
          <input
            name='state'
            //placeholder='Email'
            onChange={handleChange}
            //onChange={this.onChange}
            value={values.state}
            //value={this.state.Email}
            autoComplete="off"            
          />
          <small  >{errors.state}</small>

          <label >Country:</label>
          <select name="country" 
          id="country"
          //onChange={this.onChange} 
          onChange={handleChange}
          value={values.country}
          //value={this.state.Location}
          autoComplete="off" 
          > 
          <option value ="1">Select Your Country</option>
          <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
   <option value="Brunei">Brunei</option>
   <option value="Bulgaria">Bulgaria</option>
   <option value="Burkina Faso">Burkina Faso</option>
   <option value="Burundi">Burundi</option>
   <option value="Cambodia">Cambodia</option>
   <option value="Cameroon">Cameroon</option>
   <option value="Canada">Canada</option>
   <option value="Canary Islands">Canary Islands</option>
   <option value="Cape Verde">Cape Verde</option>
   <option value="Cayman Islands">Cayman Islands</option>
   <option value="Central African Republic">Central African Republic</option>
   <option value="Chad">Chad</option>
   <option value="Channel Islands">Channel Islands</option>
   <option value="Chile">Chile</option>
   <option value="China">China</option>
   <option value="Christmas Island">Christmas Island</option>
   <option value="Cocos Island">Cocos Island</option>
   <option value="Colombia">Colombia</option>
   <option value="Comoros">Comoros</option>
   <option value="Congo">Congo</option>
   <option value="Cook Islands">Cook Islands</option>
   <option value="Costa Rica">Costa Rica</option>
   <option value="Cote DIvoire">Cote DIvoire</option>
   <option value="Croatia">Croatia</option>
   <option value="Cuba">Cuba</option>
   <option value="Curaco">Curacao</option>
   <option value="Cyprus">Cyprus</option>
   <option value="Czech Republic">Czech Republic</option>
   <option value="Denmark">Denmark</option>
   <option value="Djibouti">Djibouti</option>
   <option value="Dominica">Dominica</option>
   <option value="Dominican Republic">Dominican Republic</option>
   <option value="East Timor">East Timor</option>
   <option value="Ecuador">Ecuador</option>
   <option value="Egypt">Egypt</option>
   <option value="El Salvador">El Salvador</option>
   <option value="Equatorial Guinea">Equatorial Guinea</option>
   <option value="Eritrea">Eritrea</option>
   <option value="Estonia">Estonia</option>
   <option value="Ethiopia">Ethiopia</option>
   <option value="Falkland Islands">Falkland Islands</option>
   <option value="Faroe Islands">Faroe Islands</option>
   <option value="Fiji">Fiji</option>
   <option value="Finland">Finland</option>
   <option value="France">France</option>
   <option value="French Guiana">French Guiana</option>
   <option value="French Polynesia">French Polynesia</option>
   <option value="French Southern Ter">French Southern Ter</option>
   <option value="Gabon">Gabon</option>
   <option value="Gambia">Gambia</option>
   <option value="Georgia">Georgia</option>
   <option value="Germany">Germany</option>
   <option value="Ghana">Ghana</option>
   <option value="Gibraltar">Gibraltar</option>
   <option value="Great Britain">Great Britain</option>
   <option value="Greece">Greece</option>
   <option value="Greenland">Greenland</option>
   <option value="Grenada">Grenada</option>
   <option value="Guadeloupe">Guadeloupe</option>
   <option value="Guam">Guam</option>
   <option value="Guatemala">Guatemala</option>
   <option value="Guinea">Guinea</option>
   <option value="Guyana">Guyana</option>
   <option value="Haiti">Haiti</option>
   <option value="Hawaii">Hawaii</option>
   <option value="Honduras">Honduras</option>
   <option value="Hong Kong">Hong Kong</option>
   <option value="Hungary">Hungary</option>
   <option value="Iceland">Iceland</option>
   <option value="Indonesia">Indonesia</option>
   <option value="India">India</option>
   <option value="Iran">Iran</option>
   <option value="Iraq">Iraq</option>
   <option value="Ireland">Ireland</option>
   <option value="Isle of Man">Isle of Man</option>
   <option value="Israel">Israel</option>
   <option value="Italy">Italy</option>
   <option value="Jamaica">Jamaica</option>
   <option value="Japan">Japan</option>
   <option value="Jordan">Jordan</option>
   <option value="Kazakhstan">Kazakhstan</option>
   <option value="Kenya">Kenya</option>
   <option value="Kiribati">Kiribati</option>
   <option value="Korea North">Korea North</option>
   <option value="Korea Sout">Korea South</option>
   <option value="Kuwait">Kuwait</option>
   <option value="Kyrgyzstan">Kyrgyzstan</option>
   <option value="Laos">Laos</option>
   <option value="Latvia">Latvia</option>
   <option value="Lebanon">Lebanon</option>
   <option value="Lesotho">Lesotho</option>
   <option value="Liberia">Liberia</option>
   <option value="Libya">Libya</option>
   <option value="Liechtenstein">Liechtenstein</option>
   <option value="Lithuania">Lithuania</option>
   <option value="Luxembourg">Luxembourg</option>
   <option value="Macau">Macau</option>
   <option value="Macedonia">Macedonia</option>
   <option value="Madagascar">Madagascar</option>
   <option value="Malaysia">Malaysia</option>
   <option value="Malawi">Malawi</option>
   <option value="Maldives">Maldives</option>
   <option value="Mali">Mali</option>
   <option value="Malta">Malta</option>
   <option value="Marshall Islands">Marshall Islands</option>
   <option value="Martinique">Martinique</option>
   <option value="Mauritania">Mauritania</option>
   <option value="Mauritius">Mauritius</option>
   <option value="Mayotte">Mayotte</option>
   <option value="Mexico">Mexico</option>
   <option value="Midway Islands">Midway Islands</option>
   <option value="Moldova">Moldova</option>
   <option value="Monaco">Monaco</option>
   <option value="Mongolia">Mongolia</option>
   <option value="Montserrat">Montserrat</option>
   <option value="Morocco">Morocco</option>
   <option value="Mozambique">Mozambique</option>
   <option value="Myanmar">Myanmar</option>
   <option value="Nambia">Nambia</option>
   <option value="Nauru">Nauru</option>
   <option value="Nepal">Nepal</option>
   <option value="Netherland Antilles">Netherland Antilles</option>
   <option value="Netherlands">Netherlands (Holland, Europe)</option>
   <option value="Nevis">Nevis</option>
   <option value="New Caledonia">New Caledonia</option>
   <option value="New Zealand">New Zealand</option>
   <option value="Nicaragua">Nicaragua</option>
   <option value="Niger">Niger</option>
   <option value="Nigeria">Nigeria</option>
   <option value="Niue">Niue</option>
   <option value="Norfolk Island">Norfolk Island</option>
   <option value="Norway">Norway</option>
   <option value="Oman">Oman</option>
   <option value="Pakistan">Pakistan</option>
   <option value="Palau Island">Palau Island</option>
   <option value="Palestine">Palestine</option>
   <option value="Panama">Panama</option>
   <option value="Papua New Guinea">Papua New Guinea</option>
   <option value="Paraguay">Paraguay</option>
   <option value="Peru">Peru</option>
   <option value="Phillipines">Philippines</option>
   <option value="Pitcairn Island">Pitcairn Island</option>
   <option value="Poland">Poland</option>
   <option value="Portugal">Portugal</option>
   <option value="Puerto Rico">Puerto Rico</option>
   <option value="Qatar">Qatar</option>
   <option value="Republic of Montenegro">Republic of Montenegro</option>
   <option value="Republic of Serbia">Republic of Serbia</option>
   <option value="Reunion">Reunion</option>
   <option value="Romania">Romania</option>
   <option value="Russia">Russia</option>
   <option value="Rwanda">Rwanda</option>
   <option value="St Barthelemy">St Barthelemy</option>
   <option value="St Eustatius">St Eustatius</option>
   <option value="St Helena">St Helena</option>
   <option value="St Kitts-Nevis">St Kitts-Nevis</option>
   <option value="St Lucia">St Lucia</option>
   <option value="St Maarten">St Maarten</option>
   <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
   <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
   <option value="Saipan">Saipan</option>
   <option value="Samoa">Samoa</option>
   <option value="Samoa American">Samoa American</option>
   <option value="San Marino">San Marino</option>
   <option value="Sao Tome & Principe">Sao Tome & Principe</option>
   <option value="Saudi Arabia">Saudi Arabia</option>
   <option value="Senegal">Senegal</option>
   <option value="Seychelles">Seychelles</option>
   <option value="Sierra Leone">Sierra Leone</option>
   <option value="Singapore">Singapore</option>
   <option value="Slovakia">Slovakia</option>
   <option value="Slovenia">Slovenia</option>
   <option value="Solomon Islands">Solomon Islands</option>
   <option value="Somalia">Somalia</option>
   <option value="South Africa">South Africa</option>
   <option value="Spain">Spain</option>
   <option value="Sri Lanka">Sri Lanka</option>
   <option value="Sudan">Sudan</option>
   <option value="Suriname">Suriname</option>
   <option value="Swaziland">Swaziland</option>
   <option value="Sweden">Sweden</option>
   <option value="Switzerland">Switzerland</option>
   <option value="Syria">Syria</option>
   <option value="Tahiti">Tahiti</option>
   <option value="Taiwan">Taiwan</option>
   <option value="Tajikistan">Tajikistan</option>
   <option value="Tanzania">Tanzania</option>
   <option value="Thailand">Thailand</option>
   <option value="Togo">Togo</option>
   <option value="Tokelau">Tokelau</option>
   <option value="Tonga">Tonga</option>
   <option value="Trinidad & Tobago">Trinidad & Tobago</option>
   <option value="Tunisia">Tunisia</option>
   <option value="Turkey">Turkey</option>
   <option value="Turkmenistan">Turkmenistan</option>
   <option value="Turks & Caicos Is">Turks & Caicos Is</option>
   <option value="Tuvalu">Tuvalu</option>
   <option value="Uganda">Uganda</option>
   <option value="United Kingdom">United Kingdom</option>
   <option value="Ukraine">Ukraine</option>
   <option value="United Arab Erimates">United Arab Emirates</option>
   <option value="United States of America">United States of America</option>
   <option value="Uraguay">Uruguay</option>
   <option value="Uzbekistan">Uzbekistan</option>
   <option value="Vanuatu">Vanuatu</option>
   <option value="Vatican City State">Vatican City State</option>
   <option value="Venezuela">Venezuela</option>
   <option value="Vietnam">Vietnam</option>
   <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
   <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
   <option value="Wake Island">Wake Island</option>
   <option value="Wallis & Futana Is">Wallis & Futana Is</option>
   <option value="Yemen">Yemen</option>
   <option value="Zaire">Zaire</option>
   <option value="Zambia">Zambia</option>
   <option value="Zimbabwe">Zimbabwe</option>
          </select>
          <small>{errors.country}</small>
          
        </div>
        <button
        type='submit'
        className="empcreate"
          //onClick={this.createRestaurant}
          //onClick={window.location.reload()}
        ><span className="text">Create</span></button>
      </form>
          
    )}
    </Formik>
        </div>
    )
}


}
const idRegExp= /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object({
    name: Yup.string().required("Name Cannot Be Empty").min(2,"Name is too Short").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed  "),
    email: Yup.string().required("Email Cannot be Empty").email("Enter An Valid Email"),
    phone:Yup.string().required("Phone number Cannot be Empty").matches(phoneRegExp, "Phone number is not valid").min(9,"phone number is too Short").max(12,"Phone number is too long"),
    country:Yup.string().required("Select Your Country").matches(/^[aA-zZ\s]+$/, "Please Select Your Country "),
    dob:Yup.string().required("Enter Your Date of birth").max(10,"invalida dob"),
    age:Yup.string().required("Enter Your age").matches(/^[0-9]{1,3}?$/, "Age Should be in numbers ").max(2,"You are not eligible").min(2,"You are not eligible.."),
    address:Yup.string().required("Enter address").min(10,"Enter Address Briefly"),
    state:Yup.string().required("Enter Your State").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed  "),
    city:Yup.string().required("Enter Your City").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed  "),
    id:Yup.string().required("ID cannot be Empty").matches(idRegExp,"ID Number must be 6 digits").max(6,"Too long")
    
  });
 export default Createemp;