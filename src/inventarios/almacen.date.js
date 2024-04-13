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
        header: 'PN'
    },
    {
        field: 'description',
        header: 'Descripción'
    },
    {
        field: 'tipo',
        header: 'Tipo'
    },
    {
        field: 'sN',
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
        field: 'estado',
        header: 'Estado'
    },
    {
        field: 'shelflife',
        header: 'Shelflite'
    },
    {
        field: 'orden',
        header: '#Orden'
    }
];

export const bodyProducts = {
    ubicacion: '',
    zona: '',
    pn: '',
    description: '',
    tipo: '',
    sN: '',
    cantidad: '',
    lote: '',
    estado: '',
    shelflife: '',
    orden: '',
}

export const productosData = [
    {
        ubicacion: 'Ubicación',
        zona: 'Maracaibo',
        pn: 'Datos',
        description: 'Descripción',
        tipo: 'Tipo',
        sN: 'Datos',
        cantidad: '20',
        lote: 'Datos',
        estado: 'Nuevo',
        shelflife: 'Datos',
        orden: '#4578',
    }
]

export const formularioAlmacen = [
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
        label: 'PN',
        nameInput: 'pn',
        type: 'text'
    },
    {
        label: 'Descripción',
        nameInput: 'description',
        type: 'text'
    },
    {
        label: 'Tipo',
        nameInput: 'tipo',
        type: 'text'
    },
    {
        label: 'SN',
        nameInput: 'sN',
        type: 'text'
    },
    {
        label: 'Cantidad',
        nameInput: 'cantidad',
        type: 'text'
    },
    {
        label: 'Lote',
        nameInput: 'lote',
        type: 'text'
    },
    {
        label: 'Estado',
        nameInput: 'estado',
        type: 'text'
    },
    {
        label: 'Shelflite',
        nameInput: 'shelflife',
        type: 'text'
    },
    {
        label: 'Orden',
        nameInput: 'orden',
        type: 'text'
    },
]

/*

Supongamos que tengo la siguiente variable 

const variable = []
Es una variable constante, por lo cual no se puede modificar su valor a diferencia de las variables de tipo let
Los estados son variables practicamente de tipo const, por lo cual necesita de la función de setVariable que es la que se encarga de actualizarlo como tal

Como tal, no modificas directamente la variable, guardas su valor en otra variable diferente que puedas cambiar el valor tantas veces como quieras de una forma más libre y el resultado final se lo asignas a la original
*/


export const optionTable = {
    btn: true,
    filter: true,
    import:true,
    btntext: 'Importar',
    btnTextTwo: 'Exportar',
    btnTextThree: 'Agregar componente'
}