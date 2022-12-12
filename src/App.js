import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Box,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  Typography,
  Paper,
} from "@mui/material";
import { Man, Woman } from "@mui/icons-material";
import Row from "./components/Row";

const paperStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  "& > :not(style)": {
    m: 1,
    width: 128,
    height: 128,
  },
};
const text = {
  color: "#043322",
  fontWeight: "bold",
  fontSize: 18,
  textAlign: "center",
  marginTop: 2,
};

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  // GETTING DATA FROM API
  const getData = async () => {
    const response = await axios.get("https://gorest.co.in/public/v2/users");
    setData(response.data);
  };
  // To Get count of Genders
  const getmales = () => {
    let male = 0;
    for (let d of data) {
      if (d.gender === "male") {
        ++male;
      }
    }
    return male;
  };

  return (
    <Box>
      <Box>
        <Box sx={paperStyle}>
          <Paper elevation={3}>
            <Typography sx={text}>Total Males</Typography>
            <Typography sx={text}>
              <Man sx={{ fontSize: 32, color: "#192a56" }} /> {getmales()}
            </Typography>
          </Paper>
          <Paper elevation={3}>
            <Typography sx={text}>Total Females</Typography>
            <Typography sx={text}>
              <Woman sx={{ fontSize: 32, color: "#e84118" }} />
              {data.length - getmales()}
            </Typography>
          </Paper>
        </Box>
      </Box>
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Sr.No</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Gender</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((user, i) => (
                <Row key={user.id} user={user} index={i} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
