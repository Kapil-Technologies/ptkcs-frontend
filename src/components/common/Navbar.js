import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import {
  Box,
  FormControlLabel,
  Icon,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  IconClose,
  IconDot,
  IconDownArrow,
  IconMenu,
  IconRightArrow,
  IconUpArrow,
} from "../../themes/Icons";
import { NavData, Services, ServicesNew } from "../../mock/Navigations";

// -----------------------------------------------------------------------------------

const MainContainer = styled("header")(
  ({ theme, hover, toggle, visibility,nobanner }) => ({
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: hover || nobanner ? theme.palette.primary.BlueSonki : "transparent",
    position: "fixed",
    top: 0,
    zIndex: 99999,
    transition: "transform 1s ease",
    transform: visibility ? "translateY(-100%)" : "translateY(0)",

    [theme.breakpoints.between("xs", "md")]: {
      // Mobile
      position: "relative",
      backgroundColor: theme.palette.primary.BlueSonki,
    },

    [theme.breakpoints.between("md", "lg")]: {
      // Desktop
    },

    [theme.breakpoints.up("xl")]: {},
  })
);

const LogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  textDecoration: "none",
  color: "white",
  textTransform: "uppercase",
  gap: 2,
  fontWeight: "bolder",

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

const ResponsiveContainer = styled(Stack)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  cursor: "pointer",
  fontSize: "25px",
  color: "white",

  [theme.breakpoints.between("xs", "sm")]: {
    display: "flex",
  },

  [theme.breakpoints.between("sm", "md")]: {
    display: "flex",
  },
}));

// const MainNavList = styled("ul")(({ theme, Toggle }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: "10px",

//   [theme.breakpoints.between("xs", "md")]: {
//     top: "75px",
//     background: theme.palette.primary.main,
//     height: "100%",
//     width: "300px",
//     margin: "auto",
//     position: "fixed",
//     overflowY: "scroll",
//     left: Toggle ? 0 : "-200%",
//     display: "flex",
//     alignItems: "flex-start",
//     justifyContent: "center",
//     flexDirection: "column",
//     border: "1px solid white",
//   },

//   [theme.breakpoints.between("md", "lg")]: {
//     // Desktop
//   },

//   [theme.breakpoints.up("xl")]: {},
// }));

const MainNavList = styled("ul")(({ theme, Toggle }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px",

  [theme.breakpoints.between("xs", "md")]: {
    top: "75px",
    background: theme.palette.primary.BlueSonki,
    height: "calc(100vh - 75px)",
    width: "95%",
    margin: "auto",
    position: "fixed",
    overflowY: "scroll",
    left: Toggle ? 0 : "-200%",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "column",
    // border: "1px solid white",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const MainNavItem = styled("li")(({ theme }) => ({
  listStyle: "none",

  [theme.breakpoints.between("xs", "md")]: {
    position: "relative",
    top: "10px",
    padding: "20px",
    height: "auto",
    // border: "1px solid white",
    left: "10%",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const MainNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  padding: "10px",
  textTransform: "uppercase",

  [theme.breakpoints.between("xs", "md")]: {
    textAlign: "left",
    padding: 0,
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const MainNavText = styled(Box)(({ theme }) => ({
  color: "white",
  textTransform: "uppercase",
  cursor: "pointer",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",

  [theme.breakpoints.between("xs", "md")]: {
    textAlign: "left",
    padding: 0,
    display: "flex",
    gap: "20px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

// ----------------------------------------------------------- SubNavList

const SubNavList = styled("ul")(({ theme, menuid }) => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  flexDirection: menuid ? "row" : "column",
  gap: 2,
  position: "absolute",
  top: "75px",
  right: menuid ? 0 : null,
  width: menuid ? "100%" : "auto",
  background: theme.palette.primary.BlueSonki,
  height: menuid ? "300px" : "auto",
  padding: menuid ? "10px" : null,

  [theme.breakpoints.between("xs", "md")]: {
    position: "relative",
    top: "5px",
    background: theme.palette.primary.main,
    width: "100%",
    left: "-10px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const SubNavItem = styled("li")(({ theme, menuid }) => ({
  listStyle: "none",
  padding: "10px",
  textAlign: "left",
  [theme.breakpoints.between("xs", "md")]: {
    width: "100%",
    flexDirection: "column",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    left: 0,
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const SubNavLink = styled(NavLink)(({ theme, menuid }) => ({
  textDecoration: "none",
  color: theme.palette.primary.color3,

  [theme.breakpoints.between("xs", "md")]: {
    display: "flex",
    alignItems: "center",
    color: "white",
    width: "100%",
    gap: "15px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const SubNavText = styled(Box)(({ theme, menuid }) => ({
  color: theme.palette.primary.color3,
  [theme.breakpoints.between("xs", "md")]: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    color: "white",
    cursor: "pointer",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

// ----------------------------------------------------------- SubNavList1

const SubNavList1 = styled("ul")(({ theme, menuid }) => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  width: "100%",
  padding: "5px",

  [theme.breakpoints.between("xs", "md")]: {
    flexDirection: "column",
    width: "100%",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const SubNavItem1 = styled("li")(({ theme, menuid }) => ({
  listStyle: "none",
  textAlign: "left",

  [theme.breakpoints.between("xs", "md")]: {
    width: "100%",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const SubNavLink1 = styled(NavLink)(({ theme, menuid }) => ({
  textDecoration: "none",
  color: theme.palette.primary.color3,
  padding: "10px",

  "&:hover": {
    textDecoration: "underline",
  },

  [theme.breakpoints.between("xs", "md")]: {
    display: "flex",
    alignItems: "flex-start",
    gap: "5px",
    color: theme.palette.primary.color3,
    width: "90%",
    marginLeft: "5px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const SubNavText1 = styled(Box)(({ theme, menuid }) => ({
  padding: "5px",
  color: theme.palette.primary.color3,
  [theme.breakpoints.between("xs", "md")]: {
    display: "flex",
    alignItems: "flex-start",
    gap: "5px",
    color: "white",
    width: "90%",
    marginLeft: "6px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

//  -----------------------------------------------------------------------------------
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
// -----------------------------------------------------------------------------------

function Navbar({ Admin, ToggleTheme }) {
  const {pathname} = useLocation()
  const [Menuid, setMenuid] = useState(0);
  // ------------------------------------------------------------- Media Quires

  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );

  const isTab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));

  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );

  const isLargeScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );

  const isXLarge = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  // ------------------------------------------------------------- States

  const theme = useTheme();

  // Toggle

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const closeToggle = () => setToggle(false);

  // Hovers

  const [Click, setClick] = useState(false);

  const handleClick = (id) => {
    setMenuid(id);
    setClick(true);
  };

  const handleRemoveClick = () => setClick(false);

  const [hover, setHover] = useState(false);

  const handleMouseEnter = (id) => {
    setMenuid(id);
    setHover(true);
  };

  const handleMouseLeaves = () => setHover(false);

  const [Click1, setClick1] = useState(false);
  const [Menudatal3, setMenudatal3] = useState(0);

  const handleOpenSubmenu2 = (id) => {
    setMenudatal3(id);
    setClick1(!Click1);
  };

  const condition = Menuid === 2 || Menuid === 3 || Menuid === 4;

  // -------------------------------------------------------------------------  Color Change When Scrollerd

  const [scrolling, setScrolling] = useState(false);
  const [scrolling1, setScrolling1] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setScrolling1(true);
      } else {
        // Scrolling up
        setScrolling1(false);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    console.log(e ? "darkmode" : "lightmode");
    ToggleTheme();
    setChecked(e.target.checked);
  };

  const leadership = pathname === "/about-us/our-team";

  return (
    <MainContainer
      onMouseLeave={handleMouseLeaves}
      hover={(hover && condition) || scrolling}
      toggle={toggle || scrolling}
      visibility={isMobile || isTab ? null : scrolling1}
      className="MainNavbar"
      nobanner={leadership}
    >
      <ResponsiveContainer onClick={handleToggle}>
        {toggle ? <IconClose /> : <IconMenu />}
      </ResponsiveContainer>
      <LogoContainer to="/home">
        {isMobile || isTab ? (
          <Typography
            variant="h6"
            sx={{
              background: "transperant",
              px: 0.5,
              textAlign: isMobile || isTab ? "right" : "left",
            }}
          >
            PT KCS <br />
            Technologies Indonesia
          </Typography>
        ) : (
          <Typography variant="h6">PT KCS Technologies Indonesia</Typography>
        )}
      </LogoContainer>
      {isMobile || isTab ? (
        <MainNavList Toggle={toggle} className="MainNavbar">
          {NavData.map((item) => (
            <MainNavItem key={item.id}>
              {!item.path ? (
                <MainNavText onClick={() => handleClick(item.id)}>
                  <Typography variant="body1">{item.title}</Typography>
                  {item.submenu && Click && item.submenudata === Menuid
                    ? item.openicon
                    : item.submenu
                    ? item.closeicon
                    : null}
                </MainNavText>
              ) : (
                <MainNavLink to={item.path} onClick={closeToggle}>
                  {item.title}
                </MainNavLink>
              )}
              {item.submenu && Click && item.submenudata === Menuid ? (
                item.id !== 3 ? (
                  <SubNavList>
                    {item.submenu.map((item) => (
                      <SubNavItem key={item.id}>
                        {item.path ? (
                          <SubNavLink to={item.path} onClick={closeToggle}>
                            <IconDot />
                            <Typography variant="body1">
                              {item.title}
                            </Typography>
                          </SubNavLink>
                        ) : (
                          <SubNavText>
                            <IconDot />
                            <Typography variant="body1">
                              {item.title}
                            </Typography>
                          </SubNavText>
                        )}
                      </SubNavItem>
                    ))}
                  </SubNavList>
                ) : (
                  <SubNavList>
                    {ServicesNew.map((item) => (
                      <SubNavItem
                        key={item.id}
                        onClick={() => handleOpenSubmenu2(item.id)}
                      >
                        {!item.path ? (
                          <SubNavText>
                            {item.icon}
                            <Typography variant="body">{item.title}</Typography>
                            {item.submenu &&
                            Click1 &&
                            item.submenul3 === Menudatal3
                              ? item.openicon
                              : item.submenu
                              ? item.closeicon
                              : null}
                          </SubNavText>
                        ) : null}
                        {item.submenu &&
                        Click1 &&
                        item.submenul3 === Menudatal3 ? (
                          <SubNavList1>
                            {item.submenu.map((item) => (
                              <SubNavItem1 key={item.id}>
                                {item.path ? (
                                  <SubNavLink1
                                    to={item.path}
                                    onClick={closeToggle}
                                  >
                                    <IconDot sx={{ mt: "3px" }} />
                                    <Typography
                                      variant="body1"
                                      sx={{ width: "80%" }}
                                    >
                                      {item.title}
                                    </Typography>
                                  </SubNavLink1>
                                ) : (
                                  <SubNavText1>
                                    <IconDot sx={{ mt: "3px" }} />
                                    <Typography
                                      variant="body1"
                                      sx={{ width: "80%" }}
                                    >
                                      {item.title}
                                    </Typography>
                                  </SubNavText1>
                                )}
                              </SubNavItem1>
                            ))}
                          </SubNavList1>
                        ) : null}
                      </SubNavItem>
                    ))}
                  </SubNavList>
                )
              ) : null}
            </MainNavItem>
          ))}
        </MainNavList>
      ) : isDesktop || isLargeScreen || isXLarge ? (
        <MainNavList className="MainNavbar">
          {NavData.map((item) => (
            <MainNavItem
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
            >
              {!item.path ? (
                <MainNavText>
                  <Typography variant="body1">{item.title}</Typography>
                  {item.submenu && hover && item.submenudata === Menuid ? (
                    <IconUpArrow condition={Admin} />
                  ) : item.submenu ? (
                    <IconDownArrow condition={Admin} />
                  ) : null}
                </MainNavText>
              ) : (
                <MainNavLink to={item.path}>{item.title}</MainNavLink>
              )}
              {item.submenu && hover && item.submenudata === Menuid ? (
                Menuid === 3 ? (
                  <SubNavList
                    key={item.id}
                    menuid={Menuid === 3}
                    onMouseLeave={handleMouseLeaves}
                  >
                    <Stack
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="space-between"
                      sx={{ width: "100%" }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: "bold",
                          pl: "20px",
                          color: "primary.color3",
                          width: "30%",
                        }}
                      >
                        Services at a Glance
                      </Typography>

                      <SubNavList1>
                        {item.submenu.map((item) => (
                          <SubNavItem1 key={item.id}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: "bold",
                                color: "primary.color3",
                              }}
                              gutterBottom
                            >
                              {item.title}
                            </Typography>
                            {item.submenu.map((item) => (
                              <Stack
                                direction="row"
                                alignItems="center"
                                key={item.id}
                                spacing={1}
                                sx={{ marginBottom: "10px" }}
                              >
                                <IconDot sx={{ color: "primary.color3" }} />
                                {item.path ? (
                                  <SubNavLink1
                                    to={item.path}
                                    onClick={handleMouseLeaves}
                                  >
                                    {item.title}
                                  </SubNavLink1>
                                ) : (
                                  <SubNavText1>
                                    <Typography variant="body1">
                                      {item.title}
                                    </Typography>
                                  </SubNavText1>
                                )}
                              </Stack>
                            ))}
                          </SubNavItem1>
                        ))}
                      </SubNavList1>
                    </Stack>
                  </SubNavList>
                ) : (
                  <SubNavList onMouseLeave={handleMouseLeaves}>
                    {item.submenu.map((item) => (
                      <SubNavItem key={item.id}>
                        {item.path ? (
                          <SubNavLink
                            to={item.path}
                            onClick={handleMouseLeaves}
                          >
                            {item.title}
                          </SubNavLink>
                        ) : (
                          <SubNavText>
                            <Typography variant="body1">
                              {item.title}
                            </Typography>
                          </SubNavText>
                        )}
                      </SubNavItem>
                    ))}
                  </SubNavList>
                )
              ) : null}
            </MainNavItem>
          ))}
        </MainNavList>
      ) : null}

      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 2 }}
      >
        <MaterialUISwitch checked={checked} onChange={handleChange} />
      </Stack> */}
    </MainContainer>
  );
}

export default Navbar;
