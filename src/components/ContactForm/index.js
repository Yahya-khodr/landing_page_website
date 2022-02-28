import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { TextField, Typography, Button, Grid } from "@mui/material";
import { Send } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import swal from "sweetalert";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required for contact futher."),
  subject: yup.string().required("Subject is required for contact."),
  message: yup.string().required("Please write message for me."),
});

const defaultValue = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const SERVICE_ID = "service_w82hk7l";
const TEMPLATE_ID = "template_3o3rd2i";
const USER_ID = "0dDGGbld-uGrwsSWK";

const ContactForm = () => {
  const { control, reset, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    init(USER_ID);
    const templatePrams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templatePrams, USER_ID).then(
      (res) => {
        swal({
          title: "Success!",
          text: "Message is successfully send to Yahya.",
          icon: "success",
          button: "Done!",
        });
      },
      (err) => {
        console.log("Failure", err);
      }
    );
    reset(defaultValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} sx={{ p: 5 }}>
      <Grid container >
        <Grid item xs={12} md={6}>
          <Controller
            render={({ field, formState }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                autoFocus
                required
                margin="normal"
                error={Boolean(formState.errors?.name)}
                helperText={formState.errors.name?.message}
              />
            )}
            control={control}
            name="name"
            defaultValue={defaultValue.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            render={({ field, formState }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                fullWidth
                required
                margin="normal"
                error={Boolean(formState.errors?.email)}
                helperText={formState.errors.mobile?.message}
              />
            )}
            control={control}
            name="email"
            defaultValue={defaultValue.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            render={({ field, formState }) => (
              <TextField
                {...field}
                label="Subject"
                fullWidth
                required
                margin="normal"
                error={Boolean(formState.errors?.subject)}
                helperText={formState.errors.subject?.message}
              />
            )}
            control={control}
            name="subject"
            defaultValue={defaultValue.subject}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            render={({ field, formState }) => (
              <TextField
                {...field}
                label="Message"
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                error={Boolean(formState.errors?.message)}
                helperText={formState.errors.message?.message}
              />
            )}
            control={control}
            name="message"
            defaultValue={defaultValue.message}
          />
        </Grid>
      </Grid>
      <Typography align="center" py={3}>
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{
            mt: 3,
            mb: 2,
            px: 5,
            color: "white",
            backgroundColor: "red",
          }}
          endIcon={<Send />}
        >
          Send
        </Button>
      </Typography>
    </form>
  );
};

export default ContactForm;
