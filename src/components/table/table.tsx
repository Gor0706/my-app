import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';




function createData(
	id: number,
	name: string,
	middleName: string,
	lastName: string,
	address: string,
	email: string,
	status: string,
) {
	return { id, name, middleName, lastName, address, email, status };
}

const rows = [
	createData(123, 'Bennett', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated'),
	createData(123, 'Bennett', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated'),
	createData(123, 'Bennett', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated'),
	createData(123, 'Bennett', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated'),
	createData(123, 'Bennett', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated'),
	createData(123, 'Bennett', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated'),
	createData(123, 'Bennett', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated'),
];

export default function BasicTable() {
	return (
		<TableContainer component={Paper} style={{width: '60%', backgroundColor: 'lightgrey'}}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Customer ID</TableCell>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Middle Name</TableCell>
						<TableCell align="right">Last Name</TableCell>
						<TableCell align="right">Address</TableCell>
						<TableCell align="right">Email</TableCell>
						<TableCell align="right" >Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.id}
							</TableCell>
							<TableCell align="right">{row.name}</TableCell>
							<TableCell align="right">{row.middleName}</TableCell>
							<TableCell align="right">{row.lastName}</TableCell>
							<TableCell align="right">{row.address}</TableCell>
							<TableCell align="right">{row.email}</TableCell>
							<TableCell align="right">
								<Chip size="small" label={row.status} color="error" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
