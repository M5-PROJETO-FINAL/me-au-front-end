import { Outlet } from "react-router-dom";

import { Container, useMediaQuery } from "@mui/material";

import Menu from "../../components/Menu";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:660px)");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <Menu />
      <Outlet />
    </Container>
  );
};

export default Dashboard;
