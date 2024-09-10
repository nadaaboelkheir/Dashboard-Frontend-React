import { Box, Typography } from "@mui/material"

function Error() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
     
      <Typography variant="h3" fontWeight={700} sx={{ color: "#5d6c6b" }}>  404 Page Not Found</Typography>
    </Box>
  )
}

export default Error