import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Student } from '../../model/Student';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../data/Store';
import { LoadingButton } from '@mui/lab';
import { GridSaveAltIcon } from '@mui/x-data-grid';
import { addstudents, editstudents } from '../../data/functionImpl';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "80%",
};

type Props = {
    open: boolean,
    handleClose: () => void,
    student1?: any,
}


export default function ModalForm({ open, handleClose, student1 = new Student('', '', '', '', '', '', '') }: Props) {

    const [student, setStudent] = React.useState(new Student('', '', '', '', '', '', ''))
    const dispatcher = useDispatch<AppDispatch>()
    const status = useSelector((state: RootState) => state.status)
    const listStudents = useSelector((state: RootState) => state.liststudents)

    const onCreate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        student1.id === '' ? (
            onAdd()
        )
            : dispatcher(editstudents(student))
    }

    const onAdd = () => {
        if (listStudents.find((s: Student) => s.id == student.id)) alert("ce matricule a ete deja attribue")
        else dispatcher(addstudents(student))
    }

    const formatDate = (date: string): string => {
        const year = date.split('/')[2]
        const month = date.split('/')[1]
        const day = date.split('/')[0]
        return `${year}-${month}-${day}`
    }

    React.useEffect(() => {
        console.log(student1)
        setStudent(student1)
    }, [student1.id])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var name = e.target.name
        var value = e.target.value
        setStudent(prev => ({ ...prev, [name]: value }))
    }

    const closeModal = () => {
        handleClose()
        setStudent(new Student('', '', '', '', '', '', ''))
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Formulaire
                    </Typography>
                    <form method='post' onSubmit={onCreate} >
                        <Box mt={2}>
                            Entrer le nom
                            <br /><TextField defaultValue={student.name} fullWidth name="name" placeholder='Entrer le nom' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            Entrer le prenom
                            <br /><TextField defaultValue={student.surname} fullWidth name="surname" placeholder='Entrer le prenom' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            Entrer la date de naissance
                            <br /><TextField defaultValue={formatDate(student.date)} type="date" fullWidth name="date" placeholder='Entrer la date de naissance' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            Entrer le matricule
                            <br /><TextField defaultValue={student.id} fullWidth name="id" placeholder='Entrer le matricule' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            Entrer le Telephone
                            <br /><TextField defaultValue={student.phone} fullWidth name="phone" placeholder='Entrer le numero de telephone' onChange={onChange} />
                        </Box> <Box mt={2}>
                            Entrer une filiere
                            <br /><TextField defaultValue={student.filiary} fullWidth name="filiary" placeholder='Entrer la filiere' onChange={onChange} />
                        </Box> <Box mt={2}>
                            Entrer le niveau
                            <br /><TextField defaultValue={student.niveau} fullWidth name="niveau" placeholder='Entrer le niveau' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            <br />
                            <LoadingButton
                                loading={status === "loading"}
                                loadingPosition="start"
                                startIcon={<GridSaveAltIcon />}
                                variant="contained" type="submit" color="primary"
                            >
                                {
                                    student1.id === '' ? "save" : "modifier"
                                }
                            </LoadingButton>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}