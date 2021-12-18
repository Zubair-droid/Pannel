import Login from './components/Login'
import {useState} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import First from "./components/First"
// import Alert from './components/Alert'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  // eslint-disable-next-line
  const [alert, setAlert] = useState(null)
  // eslint-disable-next-line
  const [theme, setTheme] = useState("Light")
  const [myStyle, setMyStyle] = useState({
    color: '#F7F7F7',
    backgroundColor: "#2C272E",
    position: 'relative',
    
})
// eslint-disable-next-line
const toggleStyle = ()=> {
 if(myStyle.backgroundColor === '#2C272E'){
   setMyStyle({
     color: '#2C272E',
     backgroundColor: '#F7F7F7',
     
   })
   setTheme("Dark")
   showAlert("dark", "Light Mode Enabled")
 }

 else{
   setMyStyle({
     color: '#F7F7F7',
     backgroundColor: '#2C272E'
   })
   setTheme("Light")
   showAlert("dark", "Dark Mode Enabled")
 }
}

const showAlert = (type, message) => {
  setAlert({
    type : type,
    msg: message
   })
  }

  // setTimeout(() => {
  //   showAlert(null)
  // }, 3000);
  
  return (
    
    <div className="App" style={myStyle}>
       
      
      
       {/* <Login />
       
       <Header />
       
       <Home />
      
       <First /> */}

       <Router>
        <Switch>
          
           

           <Route path = "/home">
               
              <Header />
              {/* Dark mode */}
              {/* <Alert alert = {alert}/> */}
                  {/* <div class="form-check form-switch d-flex">
                        <p>{theme}</p>
                        <input class="form-check-input" type="checkbox" id="flexSwitch" onClick={toggleStyle}>  
                      </input>
                  </div> */}
              <Home/>
           </Route>

           <Route path = "/login">
                {/* <Alert  /> */}
                {/* <div class="form-check form-switch d-flex">
                    <p>{theme}</p>
                    <input class="form-check-input" type="checkbox" id="flexSwitch" onClick={toggleStyle}>  
                    </input>
                </div>  */}
              <Login />
           </Route>
           
           <Route path = "/" >
              <First />
           </Route> 
              
        </Switch>   
      </Router>    
          
         

          

  

        

       
    
    </div>
    
  );
}

export default App;
