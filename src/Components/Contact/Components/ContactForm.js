import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ErrorSharp } from "@material-ui/icons";

const ContactForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [errorState, setErrorState] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
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
            label="Name"
            name="name"
            fullWidth
            inputRef={register({ required: true })}
          />
          {errors.name && (
            <p className="error-text">Please tell me who you are</p>
          )}
          <TextField
            label="Email"
            name="email"
            fullWidth
            inputRef={register({ required: true })}
          />
          {errors.email && (
            <p className="error-text">Please tell me who your email so I can answer</p>
          )}
          <TextField
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
