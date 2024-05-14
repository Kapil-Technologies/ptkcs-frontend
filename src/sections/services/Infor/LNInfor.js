import React from "react";
import { SectionContainer } from "../../../pages/website/Services/SAP";
import { Grid, Card, Stack, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InforLN } from "../../../mock/Services";

export const MainCircle = styled(Stack)(({ theme, layercolor }) => ({
  width: "200px",
  height: "200px",
  border: "3px dashed gray",
  borderRadius: "50%",
  padding: "10px",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const HorizontalLine = styled(Stack)(({ theme, layercolor }) => ({
  width: "150px",
  height: "2px",
  background: "gray",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const VerticallLine = styled(Stack)(({ theme, layercolor }) => ({
  width: "3px",
  height: "800px",
  background: "gray",
  borderRadius: "10px",

  [theme.breakpoints.between("xs", "md")]: {
    //  mobile
  },
}));

export const CardComponent1 = ({
  count,
  color,
  title,
  linewidth,
  subtitle,
  list,
}) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="left"
    sx={{ width: "auto", marginLeft: "-80px" }}
  >
    {/* <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "50px",
        height: "50px",
        border: "2px solid white",
        backgroundColor: color,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: "25px",
        borderBottomRightRadius: "25px",
      }}
    >
      {count}
    </Stack>
    <Stack
      sx={{
        width: "60px",
        height: "2px",
        background: "gray",
      }}
    /> */}
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "150px",
        height: "auto",
        border: "2px solid white",
        bgcolor: color,
        textAlign: "center",
        p: 1,
        borderRadius: "30px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    </Stack>
    <Stack
      sx={{
        width: "150px",
        height: "2px",
        background: "gray",
      }}
    />
    <Stack
      direction="column"
      alignItems="left"
      justifyContent="center"
      sx={{
        width: "500px",
        border: "1px solid lightgray",
        height: "130px",
        p: 1,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        position: "relative",
      }}
      component={Card}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "60px",
          height: "60px",
          backgroundColor: color,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: "25px",
          borderBottomRightRadius: "25px",
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {count}
        </Typography>
      </Stack>
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
        {subtitle}
      </Typography>
      {list.map((item) => (
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="left"
          spacing={0.5}
          key={item.id}
        >
          <Typography variant="body2">{item.id}</Typography>
          <Typography variant="body2">.</Typography>
          <Typography variant="body2">{item.text}</Typography>
        </Stack>
      ))}
    </Stack>
  </Stack>
);

function LNInfor() {
  const Mobile = useMediaQuery((theme) =>
    theme.breakpoints.between("xs", "sm")
  );
  const Tab = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <SectionContainer>
      {Mobile || Tab ? (
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ position: "relative", width: "90%", mb: 4 }}
        >
          <MainCircle
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Kapil Tech's Comprehensive Infor LN Solutions
            </Typography>
          </MainCircle>
          <VerticallLine />
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{
              width: "100%",
              position: "absolute",
              top: "250px",
              height: "800px",
            }}
          >
            {InforLN.map((item) => (
              <Card
                sx={{
                  width: Mobile ? "90%" : "80%",
                  border: "1px solid gray",
                  p: 1,
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <Card
                  sx={{
                    border: "2px solid white",
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bgcolor: "lightgray",
                    width: "50px",
                    height: "50px",
                    right: 0,
                    top: 0,
                    borderBottomLeftRadius: "100%",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.count}
                  </Typography>
                </Card>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                {/* <Typography variant="body1">{item.subtitle}</Typography> */}
                {item.list.map((item) => (
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="left"
                    spacing={0.5}
                    key={item.id}
                  >
                    <Typography variant="body1">{item.id}</Typography>
                    <Typography variant="body1">.</Typography>
                    <Typography variant="body1">{item.text}</Typography>
                  </Stack>
                ))}
              </Card>
            ))}
          </Stack>
        </Stack>
      ) : (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "90%", p: 1 }}
        >
          <MainCircle
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Kapil Tech's Comprehensive Infor LN Solutions
            </Typography>
          </MainCircle>

          <HorizontalLine />
          <VerticallLine />
          <Stack
            direction="column"
            alignItems="left"
            justifyContent="space-between"
            sx={{ width: "auto", height: "800px" }}
          >
            {InforLN.map((item) => (
              <CardComponent1
                color={item.color}
                count={item.count}
                title={item.title}
                linewidth={item.linewidth}
                subtitle={item.subtitle}
                list={item.list}
              />
            ))}
          </Stack>
        </Stack>
      )}
    </SectionContainer>
  );
}

export default LNInfor;
