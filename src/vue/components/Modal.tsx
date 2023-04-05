import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { Student } from '../../model/Student';

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
}


export default function ModalForm({ open, handleClose }: Props) {

    const [student, setStudent] = React.useState(new Student('','','','','',''))

    const onCreate = () => {
        
     }

    const onEdit = () => { }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var name = e.target.name
        var value = e.target.value
        setStudent(prev => ({...prev, [name] : value}))
    }

    console.log(student)

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Formulaire
                    </Typography>
                    <form action="">
                        <Box mt={2}>
                            Entrer le nom
                            <br /><TextField fullWidth name="name" placeholder='Entrer le nom' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            Entrer le prenom
                            <br /><TextField fullWidth name="surname" placeholder='Entrer le prenom' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            Entrer la date de naissance
                            <br /><TextField type="date" fullWidth name="date" placeholder='Entrer la date de naissance' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            Entrer le matricule
                            <br /><TextField fullWidth name="matricule" placeholder='Entrer le matricule' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            Entrer le Telephone
                            <br /><TextField fullWidth name="phone" placeholder='Entrer le numero de telephone' onChange={onChange} />
                        </Box> <Box mt={2}>
                            Entrer une filiere
                            <br /><TextField fullWidth name="filiary" placeholder='Entrer la filiere' onChange={onChange} />
                        </Box> <Box mt={2}>
                            Entrer le niveau
                            <br /><TextField fullWidth name="niveau" placeholder='Entrer le niveau' onChange={onChange} />
                        </Box>
                        <Box mt={2}>
                            <br /><Button variant="contained" type="submit" color="primary" >
                                Enregistrer
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}