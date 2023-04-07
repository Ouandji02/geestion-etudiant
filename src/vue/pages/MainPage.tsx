import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridCellEditStopParams, GridCellEditStopReasons, GridCellParams, GridColDef, GridValueGetterParams, MuiBaseEvent, MuiEvent } from '@mui/x-data-grid';
import { Button, Card, CardHeader, IconButton, Stack, Typography } from '@mui/material';
import ModalForm from '../components/Modal';
import ModalDelete from '../components/ModalDelete';
import { Delete, Edit } from '@mui/icons-material';
import { Student } from '../../model/Student';
import { useSelector, useDispatch } from 'react-redux'
import { RootState, fetchStudents, AppDispatch, deleteStudent, handleModalForm, handleCloseModalForm, handleCloseModal, handleModal } from '../../data/Store';
import { columns } from '../../model/columns';





export default function MainPage() {
    const [student, setStudent] = React.useState([])
    const dispatcher = useDispatch<AppDispatch>()
    const listStudents = useSelector((state: RootState) => state.liststudents)
    const { openModalForm, openModal } = useSelector((state: RootState) => state)

    React.useEffect(() => {
        dispatcher(fetchStudents())
    }, [dispatcher])

    const onDelete = () => {
        dispatcher(deleteStudent(student))
    }

    const handleCloseDelete = () => dispatcher(handleCloseModal())

    const closeModalForm = () => {
        dispatcher(handleCloseModalForm())
    }

    const onUpdate = () => {
        dispatcher(handleModalForm())
    }

    const onAdd = () => {
        setStudent([])
        dispatcher(handleModalForm())
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
                    {
                        student.length === 0 ? <Typography align="right">
                            <Button variant="contained" color="primary" onClick={onAdd} >
                                Ajouter un nouvel etudiant
                            </Button>
                        </Typography> : null
                    }

                    {
                        student.length > 0 ?
                            <Typography >
                                {
                                    student.length === 1 ?
                                        <IconButton color="primary" aria-label="upload picture" component="label" onClick={onUpdate}>
                                            <Edit />
                                        </IconButton>
                                        : null
                                }

                                <IconButton color="primary" aria-label="upload picture" component="label" onClick={()=>dispatcher(handleModal())}>
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
                        const s = listStudents.filter((row : Student) => ids.includes(row.id));
                        const selectRow = listStudents.filter((row : Student) => ids.includes(row.id));
                        console.log(s)
                        setStudent(selectRow)
                    }}
                    
                />
            </Box>

             <ModalForm open={openModalForm} handleClose={closeModalForm} student1={student[0]} /> 
            <ModalDelete open={openModal} handleClose={handleCloseDelete} onDelete={onDelete} />

        </Card>

    );
}