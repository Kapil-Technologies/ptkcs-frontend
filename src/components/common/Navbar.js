import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { Box, Icon, Stack, Typography, useMediaQuery } from "@mui/material";
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

const MainContainer = styled("header")(({ theme, hover, toggle }) => ({
  height: "75px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  // backgroundColor: theme.palette.primary.main,
  backgroundColor: hover ? theme.palette.primary.main : "transparent",
  position: "fixed",
  top: 0,
  zIndex: 99999,

  [theme.breakpoints.between("xs", "sm")]: {
    //  mobile
    backgroundColor: toggle ? theme.palette.primary.main : "transparent",
  },

  [theme.breakpoints.between("sm", "md")]: {
    // tab
    backgroundColor: toggle ? theme.palette.primary.main : "transparent",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const LogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  textDecoration: "none",
  color: "white",
  textTransform: "uppercase",
  gap: 2,
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
    background: theme.palette.primary.main,
    height: "calc(100% - 75px)",
    width: "300px",
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
    paddingBottom: "10px",
    paddingTop: "10px",
    // display: "flex",
    // alignItems: "left",
    // justifyContent: "center",
    width: "100%",
    height: "auto",
    // flexDirection: "column",
    left: "60px",
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
  justifyContent: "left",
  flexDirection: menuid ? "row" : "column",
  gap: 2,
  position: "absolute",
  top: "75px",
  right: menuid ? 0 : null,
  width: menuid ? "100%" : "auto",
  background: theme.palette.secondary.main,
  height: menuid ? "300px" : "auto",

  [theme.breakpoints.between("xs", "md")]: {
    position: "relative",
    top: "5px",
    background: theme.palette.primary.main,
    width: "100%",
    left: 0,
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
  color: "black",

  [theme.breakpoints.between("xs", "md")]: {
    display: "flex",
    alignItems: "center",
    color: "white",
    width: "100%",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const SubNavText = styled(Box)(({ theme, menuid }) => ({
  [theme.breakpoints.between("xs", "md")]: {
    display: "flex",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
    gap: 2,
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
  justifyContent: "space-evenly",
  width: "70%",
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
  padding: "10px",
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
  color: "black",

  [theme.breakpoints.between("xs", "md")]: {
    display: "flex",
    alignItems: "center",
    color: "white",
    width: "100%",
    marginLeft: "-18px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

const SubNavText1 = styled(Box)(({ theme, menuid }) => ({
  [theme.breakpoints.between("xs", "md")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    color: "white",
    width: "100%",
    marginLeft: "-18px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    // Desktop
  },

  [theme.breakpoints.up("xl")]: {},
}));

//  -----------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------

function Navbar({ Admin }) {
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

  return (
    <MainContainer
      onMouseLeave={handleMouseLeaves}
      hover={(hover && condition) || scrolling}
      toggle={toggle || scrolling}
      className="MainNavbar"
    >
      <ResponsiveContainer onClick={handleToggle}>
        {toggle ? <IconClose /> : <IconMenu />}
      </ResponsiveContainer>
      <LogoContainer to="/home">
        <Typography variant="body1" sx={{ background: "#E10009", px: 0.5 }}>
          kapil
        </Typography>

        <Typography variant="body1">Technologies</Typography>
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
                          <SubNavLink to={item.path}>
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
                                  <SubNavLink1 to={item.path}>
                                    <IconDot />
                                    <Typography variant="body1">
                                      {item.title}
                                    </Typography>
                                  </SubNavLink1>
                                ) : (
                                  <SubNavText1>
                                    <IconDot />
                                    <Typography variant="body1">
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
                      alignItems="start"
                      justifyContent="space-between"
                      sx={{ width: "100%" }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", p: 2, color: "primary.main" }}
                      >
                        Services at a Glance
                      </Typography>

                      <SubNavList1>
                        {item.submenu.map((item) => (
                          <SubNavItem1 key={item.id}>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold" }}
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
                                <IconDot />
                                {item.path ? (
                                  <SubNavLink1 to={item.path}>
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
                          <SubNavLink to={item.path}>{item.title}</SubNavLink>
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
    </MainContainer>
  );
}

export default Navbar;
