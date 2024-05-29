import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSnackbar } from "notistack";
import { useLocation, useNavigate } from "react-router-dom";
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
import { CountriesList, Domain } from "../../App";
import { raiseEnquiry } from "../../api/PostRequests";

// -----------------------------------------------  Form Components

const schema = yup.object({
  fullname: yup.string().required(" Full Name  is Required !"),
  company: yup.string().required(" Company is Required !"),
  email: yup.string().required(" Email is Required !"),
  country: yup.string().required(" Country  is Required !"),
  ccode: yup.string(),
  mobile: yup.string(),
  industry: yup.string().required("Industry is Required !"),
  message: yup.string(),
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

  const { pathname } = useLocation()
  console.log(pathname)
  const domain = useSelector((state) => state.domain.domain);
  const page = useSelector((state) => state.enquiry.enquiryfrompage);
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

  const countrydata = useContext(CountriesList);

  const condition = pathname === "/contact-us"

  // console.log(countrydata);

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
      domain: domain,
      page:page === null ? "Contact" : page
    };

    raiseEnquiry(reqdata)
      .then((res) => {
        // console.log(res);
        const status = res.data.success;
        if (status) {
          enqueueSnackbar(res.data.message, { variant: "success" });
        } else {
          enqueueSnackbar(res.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ width: "100%", height: "inherit" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={condition ? 1 : 2}
    >
      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <TextField
          variant={condition ?  "standard" : "outlined"}
          label="Full Name"
          fullWidth
          autoComplete="off"
          error={errors.fullname}
          helperText={errors.fullname?.message}
          {...register("fullname")}
        />
        <TextField
          variant={condition ?  "standard" : "outlined"}
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
          variant={condition ?  "standard" : "outlined"}
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
                    ? countrydata.find((option) => {
                        return value == option.countryname;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return `${option.countryname}`;
                }}
                options={countrydata}
                onChange={(e, newValue) => {
                  onChange(newValue ? newValue.countryname : null);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Country"
                    variant={condition ?  "standard" : "outlined"}
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
          direction={Mobile || Tab ? "column" : "row"}
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
                  sx={{ width: "100%" }}
                  value={
                    value
                      ? countrydata.find((option) => {
                          return value == option.countrydailcode;
                        }) ?? null
                      : null
                  }
                  getOptionLabel={(option) => {
                    return `${option.countrydailcode} (${option.countrycode})`;
                  }}
                  options={countrydata}
                  onChange={(e, newValue) => {
                    onChange(newValue ? newValue.countrydailcode : null);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Code "
                      variant={condition ?  "standard" : "outlined"}
                      error={errors.ccode}
                      helperText={errors.ccode?.message}
                    />
                  )}
                />
              );
            }}
          />
          <TextField
            variant={condition ?  "standard" : "outlined"}
            label="Mobile"
            fullWidth
            autoComplete="off"
            error={errors.mobile}
            helperText={errors.mobile?.message}
            {...register("mobile")}
          />
        </Stack>
        <TextField
          variant={condition ?  "standard" : "outlined"}
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
          variant={condition ?  "standard" : "outlined"}
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
        justifyContent="left"
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
