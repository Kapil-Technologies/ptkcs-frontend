import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Stack,
  useMediaQuery,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
} from "@mui/material";
import { CountriesList } from "../../App";
import { applyPosition } from "../../api/PostRequests";

const NpArray = [
  {
    id: 1,
    label: "Immediate Joiner",
    value: "immediate joiner",
  },
  {
    id: 2,
    label: "15 days",
    value: "15 days",
  },
  {
    id: 3,
    label: "30 days",
    value: "30 days",
  },
  {
    id: 4,
    label: "60 days",
    value: "60 days",
  },
];

const yesorno = [
  {
    id: 1,
    label: "Yes",
    value: "yes",
  },
  {
    id: 2,
    label: "No",
    value: "no",
  },
];

const schema = yup.object({
  firstname: yup.string().required(" First Name  is Required !"),
  lastname: yup.string().required(" Last Name is Required !"),
  email: yup.string().required(" Email is Required !"),
  // country: yup.string().required(" Country  is Required !"),
  ccode: yup.string().required(" Code is Required !"),
  mobile: yup
    .string()
    .required("Mobile is Required !")
    .matches(/^[0-9]/, "Must be only digits"),
  appliedto: yup.string().required("Applied to is Required !"),
  experience: yup.string().required("Experience is Required !"),
  relavent: yup.string().required("Relavent is Required !"),
  ctc: yup
    .string()
    .required("CTC is Required !")
    .matches(/^[0-9]/, "Must be only digits"),
  ectc: yup
    .string()
    .required("Expected CTC is Required !")
    .matches(/^[0-9]/, "Must be only digits"),
  noticeperiod: yup.string().required("Notice Period is Required !"),
  location: yup.string().required("Location is Required !"),
  relocation: yup.string().required("Relocate is Required !"),
  referance: yup.string(),
  empid: yup.string(),
  empname: yup.string(),
  resume: yup
    .mixed()
    .required("Please upload your resume.")
    .test("type", "Only PDF documents are accepted.", (value) => {
      return value ? value.type === "application/pdf" : true;
    }),
});

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  ccode: "",
  mobile: "",
  appliedto: "",
  experience: "",
  relavent: "",
  ctc: "",
  ectc: "",
  noticeperiod: "",
  location: "",
  relocation: "",
  referance: "",
  empid: "",
  empname: "",
  resume: null,
};

function JobApplicationForm({ jobdata }) {
  const { enqueueSnackbar } = useSnackbar();
  const Navigate = useNavigate();
  const domain = useSelector((state) => state.domain.domain);
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  // -----------------------------------------------  Form Components

  const countrydata = useContext(CountriesList);

  // console.log(countrydata);

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

  const values = watch();

  const referedValue = values.referance;

  const onSubmit = (data) => {
    // console.log(data);

    const file = data.resume;
    const AMobile = `${data.country}-${data.mobile}`;
    const AFilename = `${data.firstname}-${data.lastname}.pdf`;

    const reqdata = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      mobile: AMobile,
      appliedto: data.appliedto,
      experience: data.experience,
      relavent: data.relavent,
      ctc: data.ctc,
      ectc: data.ectc,
      noticeperiod: data.noticeperiod,
      location: data.location,
      relocation: data.relocation,
      referance: data.referance,
      empid: referedValue === "Yes" ? data.empid : null,
      empname: referedValue === "Yes" ? data.empname : null,
      resume: file,
      filename: AFilename,
    };

    console.log(reqdata)

    applyPosition(reqdata)
      .then((res) => {
        console.log(res);
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
    <Grid
      container
      columnGap={1}
      rowGap={1}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        textAlign: "left",
        gap: 1,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", alignSelf: "left" }}>
        Fill the form to Apply !
      </Typography>
      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
        component={Grid}
        item
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
      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
        component={Grid}
        item
      >
        <TextField
          label="Email"
          fullWidth
          autoComplete="off"
          error={errors.email}
          helperText={errors.email?.message}
          {...register("email")}
        />
      </Stack>
      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
        component={Grid}
        item
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
                  return `${option.countrydailcode} - ${option.countrycode} `;
                }}
                options={countrydata}
                onChange={(e, newValue) => {
                  onChange(newValue ? newValue.countrydailcode : null);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Country Code"
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
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
        component={Grid}
        item
      >
        <Controller
          name="appliedto"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                sx={{ width: "100%" }}
                value={
                  value
                    ? jobdata.find((option) => {
                        return value == `${option.jobid} - ${option.jobtitle}`;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return `${option.jobid} - ${option.jobtitle}`;
                }}
                options={jobdata}
                onChange={(e, newValue) => {
                  onChange(
                    newValue ? `${newValue.jobid} - ${newValue.jobtitle}` : null
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Applied to"
                    error={errors.appliedto}
                    helperText={errors.appliedto?.message}
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
        spacing={2}
        sx={{ width: "100%" }}
        component={Grid}
        item
      >
        <TextField
          label="Experience"
          fullWidth
          autoComplete="off"
          error={errors.experience}
          helperText={errors.experience?.message}
          {...register("experience")}
        />
        <TextField
          label="Relavent"
          fullWidth
          autoComplete="off"
          error={errors.relavent}
          helperText={errors.relavent?.message}
          {...register("relavent")}
        />
      </Stack>
      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
        component={Grid}
        item
      >
        <TextField
          label="Current CTC"
          fullWidth
          autoComplete="off"
          error={errors.ctc}
          helperText={errors.ctc?.message}
          {...register("ctc")}
        />
        <TextField
          label="Expected CTC"
          fullWidth
          autoComplete="off"
          error={errors.ectc}
          helperText={errors.ectc?.message}
          {...register("ectc")}
        />
        <Controller
          name="noticeperiod"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                sx={{ width: "100%" }}
                value={
                  value
                    ? NpArray.find((option) => {
                        return value == option.value;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return option.label;
                }}
                options={NpArray}
                onChange={(e, newValue) => {
                  onChange(newValue ? newValue.value : null);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Notice Period"
                    error={errors.noticeperiod}
                    helperText={errors.noticeperiod?.message}
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
        spacing={2}
        sx={{ width: "100%" }}
        component={Grid}
        item
      >
        <TextField
          label="Location"
          fullWidth
          autoComplete="off"
          error={errors.location}
          helperText={errors.location?.message}
          {...register("location")}
        />
        <Controller
          name="relocation"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                sx={{ width: "100%" }}
                value={
                  value
                    ? yesorno.find((option) => {
                        return value == option.value;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => {
                  return option.label;
                }}
                options={yesorno}
                onChange={(e, newValue) => {
                  onChange(newValue ? newValue.value : null);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Willing to relocate"
                    error={errors.relocation}
                    helperText={errors.relocation?.message}
                  />
                )}
              />
            );
          }}
        />
      </Stack>
      <FormControl component="fieldset" sx={{ width: "100%" }}>
        <FormLabel component="legend">
          Refferred by Internal Employee of Kapil Technologies
        </FormLabel>
        <Controller
          control={control}
          name="referance"
          render={({ field }) => (
            <RadioGroup {...field}>
              <Stack direction="row" alignItems="center">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </Stack>
            </RadioGroup>
          )}
        />
      </FormControl>

      {referedValue === "Yes" ? (
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <TextField
            label="Employee ID"
            fullWidth
            autoComplete="off"
            error={errors.empid}
            helperText={errors.empid?.message}
            {...register("empid")}
          />
          <TextField
            label="Employee Name"
            fullWidth
            autoComplete="off"
            error={errors.empname}
            helperText={errors.empname?.message}
            {...register("empname")}
          />
        </Stack>
      ) : null}
      <Stack
        direction={Mobile || Tab ? "column" : "row"}
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
        component={Grid}
        item
      >
        <Controller
          name="resume"
          control={control}
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <TextField
                fullWidth
                type="file"
                onChange={(e, newValue) => {
                  // console.log(e.target.files[0]);
                  // const file = e.target.files[0];
                  // const reader = new FileReader(file);
                  // reader.readAsDataURL(file);
                  // reader.onloadend = () => {
                  //   const base64 = reader.result;
                  //   const CleanResume = base64.substring(
                  //     "data:application/pdf;base64,".length
                  //   );
                  //   setFileData(CleanResume);
                  // };
                  onChange(e.target.files[0]);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={errors.resume}
                    helperText={errors.resume?.message}
                  />
                )}
              />
            );
          }}
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="left"
        sx={{ width: "100%" }}
      >
        <Button variant="contained" type="submit">
          Apply
        </Button>
      </Stack>
    </Grid>
  );
}

export default JobApplicationForm;
