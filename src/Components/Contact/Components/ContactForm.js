import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import emailjs from 'emailjs-com';

const ContactForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    emailjs.send(process.env.SERVICE_ACCOUNT, process.env.MAIL_TEMPLATE, data, process.env.USER_ID)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
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
      <h1>Shoot me a message</h1>
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
            inputRef={register({ required: true,pattern: /^[A-Za-z]+$/i })}
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
            inputRef={register({ required: true,pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
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
    </div>
  );
};

export default ContactForm;
