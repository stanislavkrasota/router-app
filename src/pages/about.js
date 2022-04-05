import React, { Component } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { EMPLOYEES_TABLE_COLUMNS } from "../constants/en";
import AboutService from "../services/about.service";
import LocationOnIcon from '@mui/icons-material/LocationOn';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }

        this.columns = EMPLOYEES_TABLE_COLUMNS;
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers() {
        AboutService.getAllUsers().then((res) => {
            if (res.length) {
                this.setState({users: res});
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Employees List</h1>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{background: '#1A2027'}}>
                            <TableRow>
                                {this.columns.map((col, index) => (
                                    <TableCell align="left" key={index} sx={{color: '#fff'}}>{col.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.users.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.username}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.phone}</TableCell>
                                    <TableCell align="left">{row.website}</TableCell>
                                    <TableCell align="left">
                                        <Tooltip title={`${row.address.city} ${row.address.street} ${row.address.suite}`} placement={'top'}>
                                            <LocationOnIcon />
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default About


