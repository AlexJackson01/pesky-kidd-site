import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { alpha, styled } from '@mui/material/styles'


function createData(date, location, tickets) {
  return { date, location, tickets };
}

const TabHeader = styled(TableCell)(({ theme }) => ({
    color: "white", fontFamily: "Courier Prime", fontWeight: "bold"
  }))

  const TabData = styled(TableCell)(({ theme }) => ({
    color: "white", fontFamily: "Courier Prime", 
  }))

  const TicketButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    textDecoration: "none",
    backgroundColor: '#5C9EA0',
    color: 'white',
    fontFamily: "Courier Prime",
    // padding: '10px 20px 10px 20px',
    // width: 180,
    '&:hover': {
      backgroundColor: '#444E5A',
      color: "white"
    }
  }))

const rows = [
  createData('Sun 30 April 2023', 'The Star in Shoreditch, London', "https://bit.ly/3FA16wT"),
  createData('Sat 8 April 2023', 'Bobstock, The Wheatsheaf, Slough', ""),

];

export default function Upcoming() {
  return (
    <div>

    <TableContainer sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
      <Table sx={{ maxWidth: 900, backgroundColor: "transparent" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TabHeader align="center">Date</TabHeader>
            <TabHeader align="center">Venue</TabHeader>
            <TabHeader align="center">Tickets</TabHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TabData align="center">
                {row.date}
              </TabData>
              <TabData align="center">{row.location}</TabData>
              <TabData align="center">{row.tickets ? <TicketButton sx={{color: "#5C9EA0"}} variant="contained" data-cy="ticket-button"><a href={row.tickets} target="_blank" data-cy='ticket-link'>Get Tickets</a></TicketButton> : <p>TBA</p>}</TabData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}