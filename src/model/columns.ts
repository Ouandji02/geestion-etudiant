import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [

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