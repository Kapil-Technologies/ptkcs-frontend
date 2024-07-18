import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { motion } from "framer-motion";
import Jobfilters from "../../../sections/Joinus/searchjobs/Jobfilters";
import { getPosition, getPositions } from "../../../api/Careers";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { CareersTable } from "../../../mock/TablesHead";
import BannerComponent from "../../../components/common/BannerComponent";
import { IconClose } from "../../../themes/Icons";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",

  [theme.breakpoints.between("xs", "sm")]: {
    //  mobile
  },

  [theme.breakpoints.between("sm", "md")]: {
    // tab
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

function Careers() {
  const theme = useTheme();
  const Navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const domainname = "ptkcs.com";
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [FilterData, setFilterData] = useState("");
  const [jobopenings, setJobopenings] = useState([]);

  //

  const searchFilter = (array, query) =>
    array.filter((item) => {
      const values = Object.values(item);
      for (let value of values) {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

  const filterjobs = searchFilter(jobopenings, FilterData);

  const handleResetInput = () => {
    setFilterData("");
  };

  //  ---------------------------------------------------------------- Pagination

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filterjobs.length) : 0;

  //  --------------------------------------------------------

  useEffect(() => {
    getPositions()
      .then((res) => {
        console.log(res);
        const status = res.data.success;
        if (status) {
          // enqueueSnackbar(res.data.message, { variant: "success" });
          setJobopenings(res.data.response);
        } else {
          enqueueSnackbar(res.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNavigate = (item) => {
    Navigate(`/join-us/job-openings/${item.jobid}`);
  };
  return (
    <Fragment>
      <Page name="Careers" pagename="Careers Page" description="" />
      <BannerComponent
        mainheight="550px"
        textdispaly={
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ height: "100%" }}
          >
            <Typography
              variant={Mobile || Tab ? "h5" : "h4"}
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Find Your Dream Job Here !
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "white", width: "80%", textAlign: "center" }}
            >
              New opportunities to explore every day - find your perfect fit!
            </Typography>
          </Stack>
        }
      />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="start"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: Mobile || Tab ? "85%" : "50%",
            px: "15px",
            py: "10px",
            // border: "1px solid blue",
          }}
        >
          <TextField
            label="Search Jobs"
            fullWidth
            value={FilterData}
            autoComplete="off"
            onChange={(e) => setFilterData(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear search input"
                    onClick={handleResetInput}
                    edge="end"
                  >
                    <IconClose />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          component={Grid}
          container
          sx={{
            width: Mobile || Tab ? "90%" : "95%",
            p: "10px",
          }}
          direction="row"
          alignItems="center"
          justifyContent={Mobile || Tab ? "center" : "space-between"}
          columnGap={2}
          rowGap={2}
        >
          {Mobile || Tab ? (
            jobopenings.length === 0 ? (
              <Stack
                direction="row"
                alignItems="left"
                justifyContent="left"
                sx={{ width: "100%", p: 1 }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  No Active Positions...
                </Typography>
              </Stack>
            ) : (rowsPerPage > 0
                ? filterjobs.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filterjobs
              ).length === 0 ? (
              <Typography>No Jobs Found !</Typography>
            ) : (
              (rowsPerPage > 0
                ? filterjobs.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filterjobs
              ).map((row) =>
                row.domain.includes(domainname) ? (
                  <Card
                    component={Grid}
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      justifyContent: "left",
                      width: "400px",
                      height: "280px",
                      p: 1,
                      border: "1px solid lightgray",
                      flexDirection: "column",
                      gap: 2,
                      position: "relative",
                    }}
                    key={row.id}
                  >
                    <Typography variant="body1">{row.category}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {row.jobtitle}
                    </Typography>
                    <Typography variant="body1">{row.jobmode}</Typography>
                    <Typography variant="body1">{row.location}</Typography>
                    <Typography variant="body1">{row.experience}</Typography>
                    <Stack
                      direction="row"
                      alignItems="left"
                      justifyContent="left"
                      sx={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={() => handleNavigate(row)}
                      >
                        Apply
                      </Button>
                    </Stack>
                  </Card>
                ) : null
              )
            )
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {CareersTable.map((item) => (
                      <StyledTableCell
                        component="th"
                        align={item.align}
                        key={item.id}
                      >
                        {item.tablename}
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody sx={{ width: "100%" }}>
                  {jobopenings.length === 0 ? (
                    <Stack
                      direction="row"
                      alignItems="left"
                      justifyContent="left"
                      sx={{ width: "100%", p: 1 }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Fetching Positions ....
                      </Typography>
                    </Stack>
                  ) : (rowsPerPage > 0
                      ? filterjobs.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filterjobs
                    ).length === 0 ? (
                    <Typography>No Jobs Found !</Typography>
                  ) : (
                    (rowsPerPage > 0
                      ? filterjobs.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filterjobs
                    ).map((row) =>
                      row.domain.includes(domainname) ? (
                        <TableRow key={row.id}>
                          <TableCell align="left">{row.category}</TableCell>
                          <TableCell align="left">{row.jobid}</TableCell>
                          <TableCell align="left">{row.jobtitle}</TableCell>
                          <TableCell align="left">{row.jobmode}</TableCell>
                          <TableCell align="left">{row.location}</TableCell>
                          <TableCell align="left">{row.experience}</TableCell>
                          <TableCell align="left">{row.count}</TableCell>
                          <TableCell align="left">
                            <Button
                              variant="contained"
                              onClick={() => handleNavigate(row)}
                            >
                              Apply
                            </Button>
                          </TableCell>
                        </TableRow>
                      ) : null
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: Mobile || Tab ? "80%" : "95%",
            p: Mobile || Tab ? "10px" : "20px",
          }}
        >
          <TablePagination
            sx={{
              fontFamily: "Roboto Condensed",
              "& .MuiTablePagination-toolbar": {
                flexWrap: "wrap", // Ensures that pagination controls wrap on small screens
                justifyContent: "center", // Center the pagination controls
              },
              "& .MuiTablePagination-actions": {
                margin: "0 10px", // Adds some margin to the pagination controls
              },
              "& .MuiSelect-select": {
                fontSize: "0.875rem", // Slightly smaller font size for dropdowns
              },
              "& .MuiInputBase-root": {
                fontSize: "0.875rem", // Adjust font size for input
              },
            }}
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={filterjobs.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Stack>
      </Stack>
    </Fragment>
  );
}

export default Careers;
