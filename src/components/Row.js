import { TableCell, TableRow } from "@mui/material";
import React from "react";

export default function Row({ user, index }) {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.gender}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.status}</TableCell>
    </TableRow>
  );
}
