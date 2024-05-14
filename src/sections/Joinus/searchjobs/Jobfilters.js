import {
  Chip,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const filters = {
  catergory: "",
  jobtitle: "",
  jobmode: "",
  location: "",
};

const Category = [
  {
    id: 1,
    cname: "Infor",
  },
  {
    id: 2,
    cname: "SAP",
  },
  {
    id: 3,
    cname: "Oracle",
  },
  {
    id: 4,
    cname: "Web Technologies",
  },
  {
    id: 4,
    cname: "Other",
  },
];

const JobMode = [
  {
    id: 1,
    cname: "Remote",
  },
  {
    id: 2,
    cname: "Hybrid",
  },
  {
    id: 3,
    cname: "Onsite",
  },
];

function Jobfilters({ Filters }) {
  const [filterData, setfilter] = useState("");

  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const handleCategoryChange = (e) => {
    setfilter(e.target.value);
    Filters(e.target.value);
  };

  const handleSelectedFilter = (filtername) => {
    // console.log(filtername);
    Filters(filtername);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{ width: "80%" }}
    >
      {Mobile || Tab ? (
        <Select
          fullWidth
          label="Select Category"
          value={filterData} // Assuming selectedCategory is the state for selected category
          onChange={handleCategoryChange} // Assuming handleCategoryChange is the function to handle category changes
        >
          {Category.map((item) => (
            <MenuItem key={item.cname} value={item.cname}>
              {item.cname}
            </MenuItem>
          ))}
        </Select>
      ) : (
        Category.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "150px",
              height: "30px",
              backgroundColor: "lightgray",
              borderRadius: "25px",
              p: 1,
              cursor: "pointer",
            }}
            onClick={() => {
              handleSelectedFilter(item.cname);
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              {item.cname}
            </Typography>
          </Stack>
        ))
      )}
    </Stack>
  );
}

export default Jobfilters;
