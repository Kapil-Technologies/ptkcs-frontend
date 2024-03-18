import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { countrys } from "../../mock/FormFields";
import { useSelector } from "react-redux";

// -----------------------------------------------  Form Components

const schema = yup.object({
  fullname: yup.string().required(" Full Name  is Required !"),
  company: yup.string().required(" Company is Required !"),
  email: yup.string().required(" Email is Required !"),
  country: yup.string().required(" Country  is Required !"),
  ccode: yup.string().required(" Code is Required !"),
  mobile: yup.string().required("Mobile is Required !"),
  industry: yup.string().required("Industry is Required !"),
  message: yup.string().required("Message is Required !"),
  tc: yup.string(),
});

const defaultValues = {
  fullname: "",
  company: "",
  email: "",
  country: "",
  ccode: "",
  mobile: "",
  industry: "",
  message: "",
  tc: "No",
};

// -----------------------------------------------  Form Components

function ContactForm() {
  const { enqueueSnackbar } = useSnackbar();
  const Navigate = useNavigate();
  const domain = useSelector((state) => state.domain.domain);
  //   console.log(domain);
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  // -----------------------------------------------  Form Components

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);

    const reqdata = {
      fullname: data.fullname,
      company: data.company,
      wemail: data.email,
      country: data.country,
      mobile: `${data.ccode} - ${data.mobile}`,
      message: data.message,
      tc: data.tc,
    };
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ width: "100%", height: "inherit" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={1}
    >
      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <TextField
          variant="standard"
          label="Full Name"
          fullWidth
          autoComplete="off"
          error={errors.fullname}
          helperText={errors.fullname?.message}
          {...register("fullname")}
        />
        <TextField
          variant="standard"
          label="Company"
          fullWidth
          autoComplete="off"
          error={errors.company}
          helperText={errors.company?.message}
          {...register("company")}
        />
      </Stack>

      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <TextField
          variant="standard"
          label="Work Email"
          fullWidth
          autoComplete="off"
          error={errors.email}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                sx={{ width: "100%" }}
                value={
                  value
                    ? countrys.find((option) => {
                        return value == option.label;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return `${option.label} (${option.id})`;
                }}
                options={countrys}
                // onChange={(e, newValue) => {
                //   onChange(newValue ? newValue.dail : null);
                // }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Country "
                    variant="standard"
                    error={errors.country}
                    helperText={errors.country?.message}
                  />
                )}
              />
            );
          }}
        />
      </Stack>

      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Controller
            name="ccode"
            control={control}
            render={({ field }) => {
              const { onChange, value } = field;
              return (
                <Autocomplete
                  sx={{ width: "20%" }}
                  value={
                    value
                      ? countrys.find((option) => {
                          return value == option.dail;
                        }) ?? null
                      : null
                  }
                  getOptionLabel={(option) => {
                    return `${option.dail} (${option.id})`;
                  }}
                  options={countrys}
                  // onChange={(e, newValue) => {
                  //   onChange(newValue ? newValue.dail : null);
                  // }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Code "
                      variant="standard"
                      error={errors.ccode}
                      helperText={errors.ccode?.message}
                    />
                  )}
                />
              );
            }}
          />
          <TextField
            variant="standard"
            label="Mobile"
            fullWidth
            autoComplete="off"
            error={errors.mobile}
            helperText={errors.mobile?.message}
            {...register("mobile")}
          />
        </Stack>
        <TextField
          variant="standard"
          label="Niche Industry"
          fullWidth
          autoComplete="off"
          error={errors.industry}
          helperText={errors.industry?.message}
          {...register("industry")}
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <TextField
          variant="standard"
          label="Message"
          multiline
          rows={2}
          fullWidth
          autoComplete="off"
          error={errors.message}
          helperText={errors.message?.message}
          {...register("message")}
        />
      </Stack>

      <Stack
        direction="column"
        alignItems="left"
        justifyContent="left"
        sx={{ width: "100%" }}
      >
        <FormControl component="fieldset">
          <Controller
            control={control}
            name="conditions"
            render={({ field }) => (
              <RadioGroup {...field}>
                <Stack direction="row" alignItems="center">
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="I agree to the Terms and Conditions"
                  />
                </Stack>
              </RadioGroup>
            )}
          />
          <ErrorMessage
            errors={errors}
            name="tc"
            render={({ message }) => (
              <Typography variant="body2" sx={{ color: "red" }}>
                {message}
              </Typography>
            )}
          />
        </FormControl>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="right"
        sx={{ width: "100%", pb: 2 }}
        spacing={2}
      >
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}

export default ContactForm;
