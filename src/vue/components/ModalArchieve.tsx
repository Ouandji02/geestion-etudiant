import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../../model/columns';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/Store';
import { Student } from '../../model/Student';
import { Card } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


type Props = {
    open: boolean,
    handleClose: () => void,
}

export default function ModalArchieve({ open, handleClose }: Props) {

    const [student, setStudent] = React.useState([])
    const listStudentsArchieve = useSelector((state: RootState) => state.listStudentsArchieve)


    return (
        <Card >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <DataGrid
                        rows={listStudentsArchieve}
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
                            const s = listStudentsArchieve.filter((row: Student) => ids.includes(row.id));
                            const selectRow = listStudentsArchieve.filter((row: Student) => ids.includes(row.id));
                            console.log(s)
                            setStudent(selectRow)
                        }}
                    />
                </Box>

            </Modal>
        </Card>
    );
}