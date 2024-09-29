import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import HeaderPage from "./../../components/HeaderPage";
import { useState } from "react";
import { useForm } from "react-hook-form";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;



  export const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (d) =>{ console.log(d);
    handleClick()
  };
  const [open, setOpen] =useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
    >
    <HeaderPage title={"CREATE USER"} subtitle={"Create a New User Profile"} />
      <Stack direction={"row"} sx={{ gap: 3 }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "Enter Valid Name." : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "Enter Valid Name." : null}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={errors.email ? "Enter Valid email." : null}
        {...register("email", { required: true,pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.numbers)}
        helperText={errors.numbers ? "Enter Valid numbers." : null}
        {...register("numbers", { required: true,pattern :phoneRegExp  })}
        label="Numbers"
        variant="filled"
      />
      <TextField label="Address one" variant="filled" />
      <TextField label="Address Two" variant="filled" />

      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="User"
        helperText="Please select your currency"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          // onClick={handleClick}
        >
          create new user
        </Button>
        <Snackbar anchorOrigin={{vertical:"top" , horizontal:"right"}} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Add Successful
        </Alert>
      </Snackbar>
      </Box>
    </Box>
  );
};
