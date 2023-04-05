import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import ModalForm from '../components/Modal';
import ModalDelete from '../components/ModalDelete';
import { Delete, Edit } from '@mui/icons-material';
import { StudentMethodImplement } from '../../data/StudentMethodImplement';
import { Student } from '../../model/Student';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const data = [
    { id: 1, lastName: 'sdf' }
]

export default function MainPage() {
    const [student, setStudent] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenDelete = () => setOpenDelete(true)
    const handleCloseDelete = () => setOpenDelete(false)

    const onDelete = () => {
        handleCloseDelete()
    }

    const getStudent = () => { 
        const studentMethod = new StudentMethodImplement()
        studentMethod.getStudent()
     }

     console.log( new Student(
        "Ouandji",
        "Thierry",
        "10/04/2002",
        "19sci2148",
        "informatique",
        "master1"
      ),)
     getStudent()

    return (
        <div>
            <Box sx={{ width: '100%' }} >
                <Typography variant="h4" align="left" >
                    Liste des etudiants
                </Typography>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                    <Typography align="right">
                        <Button variant="contained" color="primary" onClick={handleOpen} >
                            Ajouter un nouvel etudiant
                        </Button>
                    </Typography>
                    {
                        student.length > 0 ?
                            <Typography >
                                {
                                    student.length === 1?
                                        <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleOpenDelete}>
                                            <Edit />
                                        </IconButton>
                                        : null
                                }

                                <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleOpenDelete}>
                                    <Delete />
                                </IconButton>
                            </Typography> : null
                    }

                </div>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    autoHeight
                    onRowSelectionModelChange={(ids) => {
                        const selectRow = rows.filter(row => row.id === Number(ids[0]));
                        console.log(ids)
                        console.log(selectRow)
                        setStudent(selectRow)
                    }}
                />
            </Box>
            <ModalForm open={open} handleClose={handleClose} />
            <ModalDelete open={openDelete} handleClose={handleCloseDelete} onDelete={onDelete} />
        </div>

    );
}