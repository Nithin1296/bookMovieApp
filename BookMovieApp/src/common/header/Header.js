import React, {useState} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Link} from 'react-router-dom';

function Header(props) {
  
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}
const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");  
  const [firstname,setFirstName] = useState("");
  const [lastname,setlastName] = useState("");
  const [mobile,setMobileNumber] = useState("");
  const [passwordReg,setPasswordReg] = useState("");
  const [registrationSuccess,setRegistrationState] = useState(false);
  const [modalIsOpen, setModalState] = useState(false);
  const [value, setvalue] = useState(0);
  const [loggedIn, setLoggedinState] = useState(sessionStorage.getItem('access-token') == null ? false : true);

  const [usernameReq, setUserNameReq] = useState("dispNone");
  const [passwordReq, setpasswordReq] = useState("dispNone");
  const [firstnameReq, setFirstNameReq] = useState("dispNone");
  const [lastnameReq, setLastNameReq] = useState("dispNone");
  const [emailReq, setEmailReq] = useState("dispNone");
  const [mobileReq, setmobileReq] = useState("dispNone");
  const [passwordRegReq, setpasswordRegReq] = useState("dispNone");

  const openModalHandler = () => setModalState(true);
  const closeModalHandler = () => setModalState(false);
  
  const tabChangeHandler = (e, value) => {
    setvalue(value);
}
 
const loginClickHandler = () => {
    
    username === "" ? setUserNameReq({ usernameReq: "dispBlock" }) : setUserNameReq({ usernameReq: "dispNone" });
    password === "" ? setpasswordReq({ passwordReq: "dispBlock" }) : setpasswordReq({ passwordReq: "dispNone" });

    if (username === "" || password === "") { return }

    //let that = this;
    let dataLogin = null

    let xhrLogin = new XMLHttpRequest();
    xhrLogin.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(xhrLogin.getResponseHeader('access-token'));

            sessionStorage.setItem('uuid', JSON.parse(this.responseText).id);
            sessionStorage.setItem('access-token', xhrLogin.getResponseHeader('access-token'));

            setLoggedinState({ loggedIn: true });
            closeModalHandler();
        }
    })


    xhrLogin.open("POST",  props.baseUrl + "auth/login");
    xhrLogin.setRequestHeader("Authorization", "Basic " + window.btoa( username + ":" +  password));
    xhrLogin.setRequestHeader("Content-Type", "application/json");
    xhrLogin.setRequestHeader("Cache-Control", "no-cache");
    xhrLogin.send(dataLogin);

}

  const logoutHandler = () => {
    console.log(sessionStorage.getItem('access-token'));
    sessionStorage.removeItem('uuid');
    sessionStorage.removeItem('access-token');
    setLoggedinState({ loggedIn: false })

}
   
    const inputUsernameChangeHandler = (e) => {
        setUserName(e.target.value);
    }
    
    const inputPasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }


    const inputEmailChangeHandler = (e) => {
        setEmail(e.target.value);

    }

    const inputFirstnameChangeHandler = (e) => {
        setFirstName(e.target.value);

    }

    const inputLastnameChangeHandler = (e) => {
        setlastName(e.target.value);

    }

    const inputMobileChangeHandler = (e) => {
        setMobileNumber(e.target.value);

    }

    const inputPasswordRegChangeHandler = (e) => {
        setPasswordReg(e.target.value);

    }


    const registerClickHandler = () => {
         email === "" ?  setEmailReq({ emailReq: "dispBlock" }) :  setEmailReq({ emailReq: "dispNone" });
         firstname === "" ?  setFirstNameReq({ firstnameReq: "dispBlock" }) :  setFirstNameReq({ firstnameReq: "dispNone" });
         lastname === "" ?  setLastNameReq({ lastnameReq: "dispBlock" }) :  setLastNameReq({ lastnameReq: "dispNone" });
         mobile === "" ?  setmobileReq({ mobileReq: "dispBlock" }) :  setmobileReq({ mobileReq: "dispNone" });
         passwordReg === "" ?  setpasswordRegReq({ passwordRegReq: "dispBlock" }) :  setpasswordRegReq({ passwordRegReq: "dispNone" });
        if ( email === "" ||  firstname === "" ||  lastname === "" ||  mobile === "" ||  passwordReg === "") { return; }

        //let that = this;
        let dataSignUp = JSON.stringify({
            "email_address":  email,
            "first_name":  firstname,
            "last_name":  lastname,
            "mobile_number":  mobile,
            "password":  passwordReg
        })

        let xhrSignup = new XMLHttpRequest();
        xhrSignup.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                setRegistrationState({ registrationSuccess: true })
            }
        })

        xhrSignup.open("POST",  props.baseUrl + "signup");
        xhrSignup.setRequestHeader("Content-Type", "application/json");
        xhrSignup.setRequestHeader("Cache-Control", "no-cache");
        xhrSignup.send(dataSignUp);

    }
    
    return(
        <div>
            <header className='header'>               
                    <img src = {logo} className= 'logo' alt='logo'/>
                    {!loggedIn ?
                        <div className='loginButton'>
                            <Button variant="contained" color="default" onClick={openModalHandler}>Login</Button>
                        </div>
                        :
                        <div className='loginButton'>
                            <Button variant="contained" color="default" onClick={logoutHandler}>Logout</Button>
                        </div>}

                    {props.showBookShowButton === "true" && !loggedIn ?
                        <div className="bookshow-button">
                            <Button variant="contained" onClick={openModalHandler} color="primary">
                                BOOK SHOW</Button>
                        </div> : ""}
                    {props.showBookShowButton === "true" && loggedIn ?
                        <div className="bookshow-button">
                            <Link to={"/bookshow/" + this.props.id}><Button variant="contained" color="primary">
                                BOOK SHOW</Button></Link>
                        </div> : ""}
             
        </header>      
        <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={closeModalHandler}
                    style={customStyles}>
                    <Tabs className="tabs" value={value} onChange={tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {value === 0 &&
                        <TabContainer >
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" autoFocus value ={username}onChange={inputUsernameChangeHandler} />
                                <FormHelperText className={usernameReq}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password"> Password </InputLabel>
                                <Input id="password" type="password" onChange={inputPasswordChangeHandler} />
                                <FormHelperText className={passwordReq}><span className="red">required</span></FormHelperText>
                            </FormControl><br /><br />
                            <Button variant="contained" color="primary" onClick={loginClickHandler}>LOGIN</Button>
                        </TabContainer>}
                    {value === 1 && <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="email" value={email} onChange={inputEmailChangeHandler} />
                            <FormHelperText className={ emailReq}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" value={firstname}onChange={ inputFirstnameChangeHandler} />
                            <FormHelperText className={ firstnameReq}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" value={lastname}onChange={ inputLastnameChangeHandler} />
                            <FormHelperText className={ lastnameReq}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="mobile">Mobile Number</InputLabel>
                            <Input id="mobile" value={mobile} type="mobile" onChange={ inputMobileChangeHandler} />
                            <FormHelperText className={ mobileReq}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required aria-describedby="name-helper-text">
                            <InputLabel htmlFor="passwordReg">Password</InputLabel>
                            <Input type="password" id="passwordReg" value= {passwordReg} onChange={ inputPasswordRegChangeHandler} />
                            <FormHelperText className={ passwordRegReq}><span className="red">required</span></FormHelperText>
                        </FormControl><br /><br />
                        { registrationSuccess === true &&
                            <FormControl>
                                <span className="successText"> Registration Successful. Please Login!</span>
                            </FormControl>}<br /><br />
                        <Button variant="contained" color="primary" onClick={ registerClickHandler}>
                            REGISTER
                        </Button>
                    </TabContainer>}
        </Modal>  
        </div>
    );
}


export default Header;
