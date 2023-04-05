import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import ModalForm from '../components/Modal';
import ModalDelete from '../components/ModalDelete';
import { Delete, Edit } from '@mui/icons-material';
import { StudentMethodImplement } from '../../data/StudentMethodImplement';
import { Student } from '../../model/Student';
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, all } from '../../data/Store';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'Matricule', width: 90 },
    {
        field: 'name',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'surname',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date Naissance',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'filiary',
        headerName: 'Filiere',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'niveau',
        headerName: 'niveau',
        type: 'string',
        width: 110,
        editable: true,
    },
];

const rows = [
    { id: "1", lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: "2", lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: "3", lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: "4", lastName: 'Stark', firstName: 'Arya', age: 16 },
]


export default function MainPage() {
    const [student, setStudent] = React.useState([])
    const [listStudent, setListStudent] = React.useState([{}])
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenDelete = () => setOpenDelete(true)
    const handleCloseDelete = () => setOpenDelete(false)
    const dispatcher = useDispatch()

    React.useEffect(() => {
        // const list = getStudent().length ==0 ? [] : getStudent().map(student => student.toMap())
        // console.log(getStudent())
        // setListStudent(list)
        dispatcher(all())
    }, [])

    const onDelete = () => {
        handleCloseDelete()
    }

    function getStudent(): Student[] | [] {
        const studentMethod = new StudentMethodImplement()
        console.log(studentMethod.getStudent())
        return studentMethod.getStudent()
    }


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
                                    student.length === 1 ?
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
                    rows={[]}
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
            <ModalForm open={open} handleClose={handleClose} onSubmit={() => dispatcher(add())} />
            <ModalDelete open={openDelete} handleClose={handleCloseDelete} onDelete={onDelete} />
        </div>

    );
}