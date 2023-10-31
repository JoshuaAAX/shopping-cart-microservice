import React from "react";
import Button from "@mui/material/Button";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  CardActions,
  Stack,
  Container,
} from "@mui/material";

function ProductTable() {
  const tableData = [
    { id: "iphone", name: 11, description: 10 },
    { id: "samsung", name: 2, description: 20 },
    { id: "huawei", name: 3, description: 5 },
  ];

  return (
    <Container maxWidth="md" spacing={3}>
      <Card sx={{ margin: "20px", padding: "20px" }}>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ textAlign: "center" }}>
                    PRODUCTO
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    CANTIDAD
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>PRECIO</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell style={{ textAlign: "center" }}>
                      {row.id}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ bgcolor: "#FBB400", color: "#fff" }}
                      >
                        -
                      </Button>
                      {row.name}
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ bgcolor: "#FBB400", color: "#fff" }}
                      >
                        +
                      </Button>
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {row.description}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ bgcolor: "#FBB400", color: "#fff" }}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
              <Paper elevation={1} sx={{ marginLeft: "auto" }}>
                <Typography>Total: 44</Typography>
              </Paper>
            </Stack>
          </TableContainer>
        </CardContent>
        <CardActions
          sx={{ justifyContent: "space-between", marginTop: "10px" }}
        >
          <Button variant="outlined" sx={{ bgcolor: "#FFA500", color: "#fff" }}>
            Volver
          </Button>

          <Button variant="outlined" sx={{ bgcolor: "#FFA500", color: "#fff" }}>
            realizar compra
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default ProductTable;
