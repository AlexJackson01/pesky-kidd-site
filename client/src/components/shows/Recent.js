import react, { useState } from 'react';
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
  createData('Sat 18 March 2023', 'The Fiddler\'s Elbow, London'),
  createData('Sat 4 February 2023', 'InPop - supporting Pulled Apart By Horses, O2 Academy Islington, London'),
  createData('Fri 9 December 2022', 'InPop Presents, O2 Academy Islington, London'),
  createData('Sat 29 October 2022', 'The Warrington Hotel, London'),
  createData('Fri 14 October 2022', 'Underground Sound, The Beehive, London'),



];

export default function Recent() {
  const [showPrevious, setShowPrevious] = useState(false);

  return (
    <div>
      <h3 className='shows-subtitle' data-cy='see-previous-shows-header' onClick={() => setShowPrevious(!showPrevious)}>See Previous Shows</h3>

      {showPrevious && (
        <TableContainer sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
      <Table sx={{ maxWidth: 900, backgroundColor: "transparent" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TabHeader align="center">Date</TabHeader>
            <TabHeader align="center">Venue</TabHeader>
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
              <TabData align="center">{row.tickets ? <TicketButton sx={{color: "#5C9EA0"}} variant="contained"><a href={row.tickets} target="_blank">Get Tickets</a></TicketButton> : null}</TabData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      )}

    
    </div>
  );
}