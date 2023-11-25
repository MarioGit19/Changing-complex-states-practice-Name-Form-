import React, {useState} from "react";



function App() {

  //one function for both changes

const [fullName, setFullName] = useState({
  fName: "",
  lName: ""
});

// to handle the input changes and store it as an object with value and name - Value being the actual text typed and name being the input field depending on fname or lname

function handleChange(  event ) {
  const {value, name} = event.target;

  //using prevValue as input for setfullname to pass on the previously typed name and have it both displayed. Simple if else if loop to see which field has been populated.

  setFullName(prevValue => {
    if (name==="fName") {
      return {
        fName: value,
        lName: prevValue.lName
       };
      }else if (name==="lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    });
  }

  //fullname.fName and lName to tap into the object and pull exact values for each name to be added in the h1.

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" 
        value={fullName.fName} 
        />
        <input onChange={handleChange} name="lName" placeholder="Last Name"
         value={fullName.lName}
          />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
