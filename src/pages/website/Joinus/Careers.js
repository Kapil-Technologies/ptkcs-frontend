import {
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Page from "../../../components/common/Page";
import { Layer, MainContainer } from "../../../sections/Banners/Home";
import { motion } from "framer-motion";
import Jobfilters from "../../../sections/Joinus/searchjobs/Jobfilters";
import { getPosition, getPositions } from "../../../api/GetRequests";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { CareersTable } from "../../../mock/TablesHead";
import BannerComponent from "../../../components/common/BannerComponent";

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
  const domainname = "kcs-tech.com";
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const [FilterData, setFilterData] = useState("");
  const [jobopenings, setJobopenings] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - jobopenings.length) : 0;

  const handleFilters = (data) => {
    console.log(data);
    setFilterData(data);
  };

  const BannerText = () => {
    return (
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        component={motion.div}
        initial={{ y: "30px" }}
        animate={{ y: 0 }}
        exit={{ y: "30px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        sx={{ textAlign: "center" }}
      >
        Text
      </Stack>
    );
  };

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
    Navigate(`/join-us/job-description/${item.jobid}`);
  };
  return (
    <Fragment>
      <Page name="Careers" pagename="Careers Page" description="" />
      <BannerComponent
        mainheight="500px"
        layercolor={theme.palette.terinary.main}
        // imagename={ }
        // imagedata={}

        textdispaly={<BannerText />}
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
            width: Mobile || Tab ? "85%" : "95%",
            px: "15px",
            py: "30px",
            // border: "1px solid blue",
          }}
        >
          <Jobfilters Filters={handleFilters} />
        </Stack>
        <Stack
          component={Grid}
          container
          sx={{
            width: Mobile || Tab ? "90%" : "95%",
            p: 2,
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
                  Fetching Positions ....
                </Typography>
              </Stack>
            ) : (
              jobopenings
                .filter((item) => item.category.includes(FilterData))
                .map((row) =>
                  row.domain.includes(domainname) ? (
                    <Card
                      component={Grid}
                      sx={{
                        display: "flex",
                        alignItems: "left",
                        justifyContent: "left",
                        width: "400px",
                        height: "300px",
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
                  ) : (
                    jobopenings
                      .filter((item) => item.category.includes(FilterData))
                      .map((row) =>
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
      </Stack>
    </Fragment>
  );
}

export default Careers;
