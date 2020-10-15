import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = (props) => {
  const { register, handleSubmit, errors,reset } = useForm();
  const serviceAccount = process.env.REACT_APP_SERVICE_ACCOUNT
  const mailTemplate = process.env.REACT_APP_MAIL_TEMPLATE
  const userId = process.env.REACT_APP_USER_ID
  const toastifyWorking=()=>{
    toast.dark('Fetching a carrier pigeon', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'toast'
      });
  }
  const toastifySuccess=()=>{
    toast.success('I got your message i will get back you ASAP!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'toast',
    });
  }
  
  const toastifyFail=()=>{
    toast.error('Something went wrong, sorry! Please try again!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'toast',
    });
  }
  const onSubmit = (data) => {
    toastifyWorking()
    emailjs.send(serviceAccount, mailTemplate, data, userId)
    .then(function() {
      toastifySuccess()
      reset()
    }, function() {
      toastifyFail()
    });
  };
  const theme = createMuiTheme({
    palette: {
      text: {
        primary: "#ffffff",
        secondary: "#00000",
      },
      primary: {
        light: "#fbaf00",
        main: "#fbaf00",
        dark: "#fbaf00",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#fff",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <form
          noValidate
          autoComplete="off"
          className="form-input"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            error={errors.name}
            label="Name"
            name="name"
            fullWidth
            inputRef={register({ required: true,pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u })}
          />
          {errors.name?.type === "required"  && (
            <p className="error-text">Please tell me who you are</p>
          )}
          {errors.name?.type === "pattern"  && (
            <p className="error-text">Please only use human language</p>
          )}
          <TextField
            error={errors.email}
            label="Email"
            name="email"
            fullWidth
            inputRef={register({ required: true,pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
          />
          {errors.email?.type === "required" && (
            <p className="error-text">Please tell me your email so I can answer</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="error-text">Please tell me a real email </p>
          )}
          <TextField
            error={errors.message}
            label="Message"
            name="message"
            fullWidth
            multiline
            rows={4}
            className="input"
            inputRef={register({ required: true })}
          />
          {errors.message && (
            <p className="error-text">Please tell me what you have to say!</p>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="form-btn"
          >
            Send Message
          </Button>
        </form>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
