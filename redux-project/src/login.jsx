import React from 'react';
import * as reactIconsFa from "https://cdn.skypack.dev/react-icons@4.2.0/fa";
import * as reactIconsRi from "https://cdn.skypack.dev/react-icons@4.2.0/ri";
import * as reactJss from "https://cdn.skypack.dev/react-jss@10.5.1";
import "./custom.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { loginUsers, retierveUsers } from './actions/users.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "./reducers/users";
import { useLayoutEffect } from 'react';

// import 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap';
const { useState, createContext, useContext } = React;
const { ThemeProvider, withStyles } = reactJss;
// const { BrowserRouter, Switch, Route, useHistory } = ReactRouterDOM;
const { FaChessBishop, FaPlusCircle, FaArrowLeft } = reactIconsFa;
const { RiMoonClearLine, RiSunLine } = reactIconsRi;
const mainTheme = {
   sizes: {
      container: '850px'
   },
   colors: {
      primary: '#4299e1',
      primaryLight: '#fff',
      secondary: '#818CF8',
      secondaryLight: '#fff',
      green: '#10B981'
   }
}

const lightTheme = {
   ...mainTheme,
   type: 'light',
   background: {
      default: '#f7fafc',
      paper: '#fff',
      linkHover: '#edf2f7',
      input: '#fff',
   },
   alert: {
      error: '#fff0f3',
      success: '#a7f3d0'
   },
   border: {
      primary: '#e2e2e2',
      input: '#e2e8f0'
   },
   progress: {
      linear: '#e6fffa',
      linearBar: '#bde8e0'
   },
   text: {
      primary: '#000',
      link: '#718096',
      activeLink: '#2b3044',
      outlinedButton: '#4c4f52',
      input: '#4a5568',
   },
   snackbar: {
      background: '#323232',
      text: '#fff'
   },
   blob: 'C7D2FE'
}

const darkTheme = {
   ...mainTheme,
   type: 'dark',
   background: {
      default: '#161a23',
      paper: '#252836',
      linkHover: '#1c2633',
      input: '#2d303e',
   },
   alert: {
      error: '#a54a5c',
      success: '#359a6c'
   },
   border: {
      primary: '#43454e',
      input: '#505261'
   },
   progress: {
      linear: '#588e83',
      linearBar: '#32695f'
   },
   text: {
      primary: '#fff',
      link: '#8493a9',
      activeLink: '#9b9fb1',
      outlinedButton: '#fff',
      input: '#cccede',
   },
   snackbar: {
      background: '#fff',
      text: '#000'
   },
   blob: '6373b3'
}

const loginLayoutStyles = theme => ({
   loginLayout: {

      background: `${theme.background.default} `,
   },
   rightAngleAction: {
      position: 'absolute',
      top: '70px',
      right: '20px'
   }
});

const loginPageStyles = theme => ({
   '@keyframes slideLeft': {
      from: {
         opacity: 0,
         transform: 'translateX(30px) scale(0.98)'
      },
      to: {
         opacity: 1,
         transform: 'translateX(0px) scale(1)'
      }
   },
   loginCard: {
      animation: '$slideLeft ease-in 0.3s',
      boxShadow: '0 2px 20px 3px rgb(0 0 0 / 6%)',
      background: theme.background.paper,
      color: theme.text.primary,
      width: '410px',

      padding: '2rem',
      position: 'relative',
      margin: 'auto'
   },
   forgotPassLink: {
      color: theme.text.activeLink,
      textDecoration: 'none',
      fontSize: '0.9em',
      '&:hover': {
         textDecoration: 'underline'
      }
   },
   cardHeader: {
      color: theme.text.activeLink,
      fontWeight: 600,
      fontSize: '1.6em'
   }
});

const buttonStyles = theme => ({
   buttonMain: {
      width: (props) => props.fullWidth ? '100%' : 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      paddingTop: '.75rem',
      paddingBottom: '.75rem',
      background: (props) => {
         if (props.color) return theme.colors[props.color];
         return theme.colors.primary;
      },
      borderRadius: '.25rem',
      border: 'none',
      color: '#fff',
      fontFamily: 'inherit',
      outline: 'none',
      cursor: 'pointer',
      '&:hover': {
         filter: 'brightness(90%)'
      },
      '&:focus': {
         boxShadow: (props) => {
            if (props.color) return `0 0 0 3px ${theme.colors[props.color] + '42'}`;
            return `0 0 0 3px ${theme.colors.primary + '42'}`;
         },
         outlineColor: 'rgba(0,0,0,0)',
         outlineOffset: '2px',
         outlineStyle: 'solid',
         borderColor: theme.colors.primary
      }
   },
   iconLeft: {
      marginRight: '.5rem',
      display: 'flex',
      alignItems: 'center'
   }
});

const inputStyles = theme => ({
   inputMain: {
      color: theme.text.input,
      fontSize: '.875rem',
      padding: '.5rem .75rem',
      lineHeight: '1.5',
      display: 'block',
      borderRadius: '.25rem',
      outline: 'none',
      backgroundColor: theme.background.input,
      border: `1px solid ${theme.border.input}`,
      width: '100%',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      marginTop: '.5rem',
      '&:focus': {
         boxShadow: `0 0 0 3px ${theme.colors.primary + '42'}`,
         outlineColor: 'rgba(0,0,0,0)',
         outlineOffset: '2px',
         outlineStyle: 'solid',
         borderColor: theme.colors.primary
      }
   },
   inputWrapper: {
      display: 'flex'
   },
   checkbox: {
      width: 'auto',
      marginRight: '.5rem',
      appearance: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '17px',
      width: '17px',
      padding: 0,
      '&:focus': {
         boxShadow: `0 0 0 3px ${theme.colors.primary + '42'}`,
         outlineColor: 'rgba(0,0,0,0)',
         outlineOffset: '2px',
         outlineStyle: 'solid',
         borderColor: theme.colors.primary
      },
      '&:checked': {
         backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E")`,
         backgroundColor: theme.colors.primary,
         borderColor: 'transparent',
         backgroundSize: '100% 100%',
         backgroundPosition: '50%',
         backgroundRepeat: 'no-repeat',
      }
   },
   inlineWrapper: {
      display: 'inline-block'
   }
});

const toggleThemeButtonStyles = theme => ({
   button: {
      border: 'none',
      padding: '5px',
      cursor: 'pointer',
      marginLeft: '15px',
      fontSize: (props) => props.size ? props.size : '1.5em',
      display: 'flex',
      borderRadius: '25px',
      color: theme.text.outlinedButton,
      background: (props) => {
         if (props.transparent) return 'transparent';
         return theme.type === 'light' ? '#4d515d' : '#f2f3f5'
      },
      color: (props) => {
         if (props.transparent) return theme.text.activeLink;
         return theme.type === 'light' ? '#fff' : '#000'
      },
      outline: 'none',
      '&:hover': {
         transition: 'transform 0.2s',
         transform: 'scale(1) rotate(0.1turn)',
      },
   },
   '@keyframes roundIn': {
      from: {
         opacity: 0,
         transform: 'rotate(0.5turn)',
      },
      to: {
         opacity: 1,
         transform: 'rotate(0)'
      }
   },
   themeIcon: {
      animation: '$roundIn ease-in 0.4s',
   }
});

const registrationPageStyles = theme => ({
   '@keyframes slideRight': {
      from: {
         opacity: 0,
         transform: 'translateX(-30px) scale(0.98)'
      },
      to: {
         opacity: 1,
         transform: 'translateX(0px) scale(1)'
      }
   },
   loginCard: {
      animation: '$slideRight ease-in 0.3s',
      boxShadow: '0 2px 20px 3px rgb(0 0 0 / 6%)',
      background: theme.background.paper,
      color: theme.text.primary,
      width: '410px',
      padding: '2rem',
      position: 'relative'
   },
   cardHeader: {
      color: theme.text.activeLink,
      fontWeight: 600,
      fontSize: '1.6em'
   }
});

const labelStyles = theme => ({
   label: {
      fontSize: '.875rem',
      display: 'block',
      marginBottom: '1rem',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      '& input': {
         marginTop: '.25rem',
      },
   },
});

const alertStyles = theme => ({
   '@keyframes slideRight': {
      from: {
         opacity: 0,
         transform: 'translateX(-10px) scale(0.98)'
      },
      to: {
         opacity: 1,
         transform: 'translateX(0px) scale(1)'
      }
   },
   alert: {
      animation: '$slideRight ease-in 0.3s',
      padding: '20px',
      background: (props) => {
         if (!props.type) return theme.alert.error;
         if (props.type === 'success') return theme.alert.success;
      },
      borderLeft: (props) => {
         if (!props.type) return '5px solid #FFB3C0';
         if (props.type === 'success') return '5px solid #A7F3D0';
      },
      borderRadius: '4px',
      fontSize: '.875rem',
      margin: '10px 0px',
      color: theme.text.primary
   },
   success: {
      background: '#fafffa',
      borderLeft: '5px solid #d4ffb3'
   },
   title: {
      fontWeight: 700
   },
   link: {
      cursor: 'pointer'
   }
});

/*============================ STYLES END ==============================*/
const CustomThemeContext = createContext();

const CustomThemeProvider = props => {
   const [currentTheme, setCurrentTheme] = useState('light');

   const toggleTheme = () => {
      let newValue = currentTheme === 'light' ? 'dark' : 'light';
      setCurrentTheme(newValue);
   }

   const themeData = { currentTheme, toggleTheme };
   return (
      <CustomThemeContext.Provider value={themeData}>
         <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
            {props.children}
         </ThemeProvider>
      </CustomThemeContext.Provider>
   );
};

const useThemeContext = () => {
   return useContext(CustomThemeContext);
};

function ToggleThemeButton(props) {
   const classes = props.classes;
   const { currentTheme, toggleTheme } = useThemeContext();

   return <button className={classes.button} onClick={toggleTheme}>
      {currentTheme === 'light' ? <RiMoonClearLine className={classes.themeIcon} /> : <RiSunLine className={classes.themeIcon} />}
   </button>
}
ToggleThemeButton = withStyles(toggleThemeButtonStyles)(ToggleThemeButton);

function LoginLayout(props) {
   const classes = props.classes;

   return <div className={classes.loginLayout}>
      <div className={classes.rightAngleAction}>
         <ToggleThemeButton size={'2.2em'} transparent />
      </div>
      {props.children}
   </div>
}
LoginLayout = withStyles(loginLayoutStyles)(LoginLayout);

function Divider(props) {
   return <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ height: '1px', width: '100%', background: '#d1d5db' }}></div>
      <p style={{ margin: '10px', fontWeight: 100, color: '#94979c' }}>OR</p>
      <div style={{ height: '1px', width: '100%', background: '#d1d5db' }}></div>
   </div>
}

function Alert(props) {
   const classes = props.classes;
   return <>
      <div className={classes.alert}>
         <summary className={classes.title}>{props.title}</summary>
         {props.children}
      </div>
   </>
}
Alert = withStyles(alertStyles)(Alert);

function Label(props) {
   const classes = props.classes;
   return (
      <label className={classes.label}>
         {props.children}
      </label>
   );
}
Label = withStyles(labelStyles)(Label);

function Button(props) {
   const classes = props.classes;
   return <button
      className={classes.buttonMain}
      onClick={props.onClick}
      type={props.type}
   >
      {props.iconLeft ? <span className={classes.iconLeft}>{props.iconLeft}</span> : ''}
      {props.children}
   </button>
}
Button = withStyles(buttonStyles)(Button);

function Input(props) {
   const classes = props.classes;
   return <div className={classes.inputWrapper + (props.type === 'checkbox' ? ' ' + classes.inlineWrapper : '')}>
      <input
         className={classes.inputMain + (props.type === 'checkbox' ? ' ' + classes.checkbox : '')}
         placeholder={props.placeholder}
         onChange={props.onChange}
         value={props.value}
         checked={props.value}
         type={props.type}
         style={{ ...props.style }}
      >
      </input>
   </div>
}
Input = withStyles(inputStyles)(Input);


function ToggleThemeHomeIcon(props) {
   const classes = props.classes;
   const { currentTheme, toggleTheme } = useThemeContext();

   return (currentTheme === 'light') ? "" : ""

}
// ToggleThemeHomeIcon = withStyles(toggleThemeButtonStyles)(ToggleThemeButton);

let LoginPage = (props) => {
   const dispatch = useDispatch();
   const users = useSelector(selectUser);
   const classes = props.classes;
   //    const history = useHistory();
   let navigate = useNavigate();
   const [cookies, setCookie] = useCookies(['user']);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [formErrors, setFormErrors] = useState([]);
   const [isSuccessed, setSuccess] = useState(false);

   const redirectToRegistration = () => {
      console.log("called redirectToRegistration");
      //   history.push('/registration');
   }
   let rspnse = "";
   // useLayoutEffect(()=>{
   //    rspnse = dispatch(loginUsers({"email":email,"password":password}))
   // },[rspnse])
   let loginCheck = async (e) => {
      // console.log("called");
      e.preventDefault();
      // rspnse = await dispatch(loginUsers({"email":email,"password":password}))
      // console.log("ResponseData users", users.ResponseStatus);
      // // console.log("ResponseData users", users.ResponseData.loginUserData.data.Data[0]);

      // if (users.ResponseStatus) {
      //    console.log(users.ResponseData);
      //    if (users.ResponseData.loginUserData.data.Data[0]) {
      //       console.log("Login success");
      //       // setCookie('userId',users.ResponseData.loginUserData.data.Data[0].id);
      //       // setCookie('userName',users.ResponseData.loginUserData.data.Data[0].username);
      //    }else{
      //       console.log("Invalid Login");
      //    }
      // }

      axios.get(`https://justjayapi.000webhostapp.com/login?username=${email}&password=${password}`)
         .then(function (response) {
            // handle success
            console.log(response);
            if (response.data.Code == 1) {
               dispatch(loginUsers({"email":email,"password":password}))
               console.log("inside success", response.data.Data[0].role_id);
               setCookie('userId', response.data.Data[0].id);
               setCookie('userName', response.data.Data[0].username);
               if (response.data.Data[0].role_id == 1) {
                  navigate(`/admin`);
               } else {
                  navigate(`/`);
               }

            } else {
               console.log("inside try again");

            }
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .then(function () {
            // always executed
         });
   }

   console.log(props);
   return (<>
      <div className="main-box" style={{ marginTop: '70px' }}>

         <div className="absolute svg-position">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 200" xmlSpace="preserve" height="700px" width="800px"><g><path fill="#C7D2FE" d="M41.3,-52.9C54.4,-47.3,66.6,-36.4,73.8,-22.1C81,-7.8,83.2,10,75.4,21.7C67.7,33.4,50.1,39.1,35.9,47.5C21.7,56,10.8,67.3,0,67.3C-10.8,67.3,-21.6,55.9,-35.7,47.4C-49.9,38.9,-67.3,33.2,-70,23.2C-72.7,13.1,-60.6,-1.3,-53.8,-15.9C-46.9,-30.5,-45.3,-45.3,-37.2,-52.5C-29.1,-59.7,-14.6,-59.4,-0.2,-59.1C14.1,-58.7,28.2,-58.5,41.3,-52.9Z" transform="translate(100 100) scale(1.21)" /></g></svg>
         </div>
         <div className={classes.loginCard}>
            <Link to={'/'}>

               <ToggleThemeHomeIcon />

            </Link>
            <div style={{ display: 'flex', alignItems: 'center', fontWeight: 100, marginBottom: '25px' }}>
               <FaChessBishop style={{ marginRight: '10px', fontSize: '1.3em', color: '#83afe0' }} />
               <span>Amazing service</span>
            </div>

            <h1 className={classes.cardHeader}>Log in</h1>

            <div className="form">

               <form onSubmit={loginCheck}>

                  {formErrors.length ? <Alert title="Failed to login">
                     {formErrors.map(err => <div>{err}</div>)}
                  </Alert> : ''}

                  {isSuccessed ? <Alert type="success">Welcome!</Alert> : ''}

                  <div name="email" >
                     <Label>
                        <span>Email</span>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                     </Label>
                  </div>

                  <div name="password">
                     <Label>
                        <span>Password</span>
                        <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                     </Label>
                  </div>

                  <div style={{ marginTop: '10px' }}>
                     <Button type="submit" fullWidth>Log in</Button>
                  </div>

               </form>

            </div>

            <Divider />
            <Link to="/registration" ><Button fullWidth color="green" iconLeft={<FaPlusCircle />}>Create account</Button></Link>


         </div>
      </div>
   </>
   )
}
LoginPage = withStyles(loginPageStyles)(LoginPage);


function App() {
   return <CustomThemeProvider>
      <LoginPage />
      <LoginLayout />
   </CustomThemeProvider>
}
export default App;