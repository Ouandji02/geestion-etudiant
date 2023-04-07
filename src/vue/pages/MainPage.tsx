import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridCellEditStopParams, GridCellEditStopReasons, GridCellParams, GridColDef, GridValueGetterParams, MuiBaseEvent, MuiEvent } from '@mui/x-data-grid';
import { Button, Card, CardHeader, IconButton, Stack, Typography } from '@mui/material';
import ModalForm from '../components/Modal';
import ModalDelete from '../components/ModalDelete';
import { Delete, Edit } from '@mui/icons-material';
import { StudentMethodImplement } from '../../data/StudentMethodImplement';
import { Student } from '../../model/Student';
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, RootState, fetchStudents, AppDispatch, deleteStudent } from '../../data/Store';
import { columns } from '../../model/columns';





export default function MainPage() {
    const [student, setStudent] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenDelete = () => setOpenDelete(true)
    const handleCloseDelete = () => setOpenDelete(false)
    const dispatcher = useDispatch<AppDispatch>()
    const listStudents = useSelector((state: RootState) => state.liststudents)
    const status = useSelector((state: RootState) => state.status)
    const [val, setVal] = React.useState("")

    React.useEffect(() => {
        dispatcher(fetchStudents())
    }, [dispatcher])

    const onDelete = () => {
        dispatcher(deleteStudent(student[0]))
    }
    return (
        <Card sx={{ p: 10, boxShadow: 10 }} className='app' >
            <Typography variant="h3" align="left" sx={{ mt: 0, mb: 10 }} >
                Liste des etudiants
            </Typography>
            <Box sx={{ width: '100%', mt: 3, mb: 3 }} >
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
                    rows={listStudents}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    loading={listStudents.length === 0}
                    checkboxSelection
                    disableRowSelectionOnClick
                    autoHeight
                    onRowSelectionModelChange={(ids) => {
                        const selectRow = listStudents.filter(row => row.id === ids[0]);
                        setStudent(selectRow)
                    }}
                    isCellEditable={true}
                    onCellEditStop={(params: GridCellParams, event: MuiEvent<MuiBaseEvent>) => {
                        console.log(params.value)
                    }}
                />
            </Box>
            <ModalForm open={open} handleClose={handleClose} />
            <ModalDelete open={openDelete} handleClose={handleCloseDelete} onDelete={onDelete} />
            
        </Card>

    );
}