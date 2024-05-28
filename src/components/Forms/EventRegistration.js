import { yupResolver } from "@hookform/resolvers/yup";
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CountriesList } from "../../App";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { eventRegister } from "../../api/PostRequests";

const schema = yup.object({
  firstname: yup.string().required(" First Name  is Required !"),
  lastname: yup.string().required(" Last Name is Required !"),
  company: yup.string().required(" Company is Required !"),
  designation: yup.string().required("Designation is Required !"),
  wemail: yup.string().required(" Email is Required !"),
  country: yup.string().required(" Country  is Required !"),
  ccode: yup.string(),
  mobile: yup.string(),
  tc: yup.string(),
});

function EventRegistration({ eventobject }) {
  // console.log(eventobject);
  const { enqueueSnackbar } = useSnackbar();
  const { eventid, eventtype } = useParams();

  const Navigate = useNavigate();
  const domain = useSelector((state) => state.domain.domain);
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const countrydata = useContext(CountriesList);

  const defaultValues = {
    firstname: "",
    lastname: "",
    company: "",
    designation: "",
    wemail: "",
    country: "",
    ccode: "",
    mobile: "",
    tc: "No",
  };

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

  // console.log(eventobject.speaker)

  const onSubmit = (data) => {
    const Mobile = `${data.ccode} ${data.mobile}`;
    // console.log(eventobject);
    const requestData = {
      firstname: data.firstname,
      lastname: data.lastname,
      company: data.company,
      designation: data.designation,
      email: data.wemail,
      country: data.country,
      mobile: Mobile,
      tc: data.tc,
      eventid: eventobject.eventid,
      eventname: eventobject.eventname,
      eventdescription: eventobject.eventdescription,
      eventstarttime: eventobject.eventtimeanddate,
      duration: eventobject.duration,
      urllink: eventobject.url,
    };

    console.log(requestData);
    eventRegister(requestData)
      .then((res) => {
        console.log(res);
        const status = res.data.success
        if (status === true) {
          enqueueSnackbar(res.data.message,{variant:'success'})
        } else {
          enqueueSnackbar(res.data.message, { variant: "error" });
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid
      item
      xs={12}
      md={5.5}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid blue",
        p: 1,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography variant="h5" sx={{ p: 1, fontWeight: "bold" }}>
          Fill the Details to Register for {eventtype}
        </Typography>
        <Stack
          direction={Mobile || Tab ? "column" : "row"}
          alignItems="center"
          spacing="10px"
          sx={{ width: "100%" }}
        >
          <TextField
            label="First Name"
            fullWidth
            autoComplete="off"
            error={errors.firstname}
            helperText={errors.firstname?.message}
            {...register("firstname")}
          />
          <TextField
            label="Last Name"
            fullWidth
            autoComplete="off"
            error={errors.lastname}
            helperText={errors.lastname?.message}
            {...register("lastname")}
          />
        </Stack>

        <TextField
          label="Company"
          fullWidth
          autoComplete="off"
          error={errors.company}
          helperText={errors.company?.message}
          {...register("company")}
        />
        <TextField
          label="Designation"
          fullWidth
          autoComplete="off"
          error={errors.designation}
          helperText={errors.designation?.message}
          {...register("designation")}
        />
        <TextField
          label="Work Email"
          fullWidth
          autoComplete="off"
          error={errors.wemail}
          helperText={errors.wemail?.message}
          {...register("wemail")}
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
                    error={errors.country}
                    helperText={errors.country?.message}
                  />
                )}
              />
            );
          }}
        />
        <Stack
          direction={Mobile || Tab ? "column" : "row"}
          alignItems="center"
          spacing="10px"
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
                      error={errors.ccode}
                      helperText={errors.ccode?.message}
                    />
                  )}
                />
              );
            }}
          />
          <TextField
            label="Mobile"
            fullWidth
            autoComplete="off"
            error={errors.mobile}
            helperText={errors.mobile?.message}
            {...register("mobile")}
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
          sx={{ width: "100%" }}
          direction="row"
          alignItems="center"
          justifyContent="left"
        >
          <Button variant="contained" sx={{ width: "150px" }} type="submit">
            Register
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default EventRegistration;
