import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MUITable = () => {
  const rows = [
    { id: 1, firstName: "Enes", lastName: "Bayram", age: 24 },
    { id: 2, firstName: "Gizem", lastName: "Kapar", age: 25 },
    { id: 3, firstName: "Harun", lastName: "Davud", age: 26 },
    { id: 4, firstName: "Halil", lastName: "Çevik", age: 28 },
  ];
  return (
    <>
      <Table sx={{ border: "2px solid red" }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>İSİM</TableCell>
            <TableCell>SOYİSİM</TableCell>
            <TableCell>YAŞ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default MUITable;
