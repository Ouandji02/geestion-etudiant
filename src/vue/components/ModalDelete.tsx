import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
};


type Props = {
    open: boolean,
    handleClose: () => void,
    onDelete : () => void
}

export default function ModalDelete({ open, handleClose , onDelete}: Props) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Message de confirmation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Etes-vous sur de vouloir vider cet etudiant de la base donnees ? 
          </Typography>
          <Typography id="modal-modal-actions" sx={{mt:2}} >
            <Button onClick = {handleClose} variant="contained" color="secondary" sx={{mr : 2}} >
                Non
            </Button>
            <Button onClick = {onDelete} variant="contained" color="primary" >
                Oui
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}