export const columns = [
    {
        field: 'ubicacion',
        header: 'Ubicación'
    },
    {
        field: 'zona',
        header: 'Zona'
    },
    {
        field: 'pn',
        header: 'P/N'
    },
    {
        field: 'descripcion',
        header: 'Descripción'
    },
    {
        field: 'tipo',
        header: 'Tipo'
    },
    {
        field: 'sn',
        header: 'S/N'
    },
    {
        field: 'cantidad',
        header: 'Cantidad'
    },
    {
        field: 'lote',
        header: 'Lote'
    },
    {
        field: 'condicion',
        header: 'Condición'
    },
    {
        field: 'estado',
        header: 'Estado'
    }
];

export const bodyPrestar = {
    ubicacion: '',
    zona: '',
    pn: '',
    descripcion: '',
    tipo: '',
    sn: '',
    cantidad: '',
    lote: '',
    condicion: '',
    estado: '',
};

export const PrestarData = [
    {
        ubicacion: 'taller 1',
        zona: 'a',
        pn: 'Datos',
        descripcion: 'Descripción',
        tipo: 'Tipo',
        sn: 'Datos',
        cantidad: 'a',
        lote: '',
        condicion: '20',
        estado: '#4578',
    }
]

export const formularioPrestar = [
    {
        label: 'Ubicación',
        nameInput: 'ubicacion',
        type: 'text'
    },
    {
        label: 'Zona',
        nameInput: 'zona',
        type: 'text'
    },
    {
        label: 'P/N',
        nameInput: 'pn',
        type: 'text'
    },
    {
        label: 'Descripción',
        nameInput: 'descripcion',
        type: 'text'
    },
    {
        label: 'Tipo',
        nameInput: 'tipo',
        type: 'text'
    },
    {
        label: 'S/N',
        nameInput: 'sn',
        type: 'text'
    },
    {
        label: 'Cantidad',
        nameInput: 'cantidad',
        type: 'text'
    },
    {
        label: 'Condición',
        nameInput: 'condicion',
        type: 'text'
    },
    {
        label: 'Estado',
        nameInput: 'estado',
        type: 'text'
    },
]

export const optionTable = {
    btn: true,
    filter: true,
    import:true,
    btntext: 'Importar',
    btnTextTwo: 'Exportar',
    btnTextThree: 'Agregar componente'
}