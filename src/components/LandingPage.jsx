import Box from "@mui/material/Box";

const LandingPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 2,
          p: 2,
        }}
      >
        <div> Product Connoisseur </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          m: 2,
          p: 2,
        }}
      >
        <div> Making the right choice at a fraction of the time </div>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(1, 1fr)",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <div> 'Placeholder text</div>
      </Box>
    </>
  );
};

export default LandingPage;
