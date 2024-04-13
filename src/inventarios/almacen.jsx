/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { bodyProducts, columns, formularioAlmacen, productosData, optionTable} from "./almacen.date.js";
import { Form } from "../form/Form.jsx";
import { Table } from "../tabla/Table.jsx";
import './almacen.css'

const Almacen = () => {
  const [products, setProducts] = useState(productosData);

  //Para que esto funcione tienes que instalar formik con npm i formik y luego cambiar los datos que mostraras en el formulario, por ejemplo


  const [valueInput, setValueInput] = useState('');
  const [valueInputPassword, setValueInputPassword] = useState('');
  

  const getDataForm = (datos) => {
    
    const copyProduct = products;

//Si vas a agregar datos, debes de tener un objecto preparado el cual sea igual a la estructura de la tabla como es este caso, luego simplemente tienes que ir modicando cada uno de estos

//Como tal, para no tener que estar creando una variable para cada tipo de input puedes utilizar formik para que te maneje eso
    const newRow = {
      ubicacion: datos.ubicacion,
      zona: datos.zona,
      pn: datos.pn,
      description: datos.description,
      tipo: datos.tipo,
      sN: datos.sN,
      lote: datos.lote,
      estado: datos.estado,
      shelflife: datos.shelflife,
      orden: datos.orden,
  }

//con esto puedes limpiar los datos del formulario ya que hace que al enviar se guarden y se mantengan como en un variable

//Ahora, dandome cuenta, creo que esto lo puedo poner más simple xdd
//Nunca lo he hecho, pero lo averiguaremos xdd
// formik.initialValues = bodyProducts;
      //Ok, aqui que es lo que estoy haciendo como tal, estoy recorriendo los datos asi como cuando los voy a mostrar, pero estoy utilizandolo para acceder a las propiedades del objeto, esto funciona asi
      //Entonces aqui hago eso practicamente, al recorrer el arreglo, le estoy dando los valores que tiene los nombre de los formularios, al ingresar el input solo le digo que es lo que va a tener o sobreescribo el valor de esa propiedad del objeto

      
      //Es lo que hago aqui
      //Versión corta
      // me sirve... algo mas que tenga que saber?

    //La otra opción para eso o su forma larga, seria la siguienter:
    //Y esto hace exactamente lo mismo, accediendo a los nombre especificos
    //Es lo mismo
    //Version a pata
    // formik.values.ubicacion = '';
    // formik.values.zona = '';
    // formik.values.pn = '';
    // formik.values.description = '';
    // formik.values.tipo = '';
    // formik.values.sN = '';
    // formik.values.lote = '';
    // formik.values.estado = '';
    // formik.values.shelflife = '';
    // formik.values.orden = '';


    // const nuevoObjeto = {
    //   nombre: 'Eli'
    // }

    // const nombreDelObjeto = 'nombre';

    //Tu para acceder a un objeto necesitas saber cual es su propiedad y enviarla
    //Como puedes ver, aqui accedo directo pq se cual es su propiedad, pero en caso de no saberla o querer hacerlo de otra forma, puedo hacerlo a travez de una variable el cual, su valor sea un string, por ejemplo
    //Ambsa maneras funcionan
    // alert(nuevoObjeto.nombre);
//Cuando accedes al objeto y le das un igual le pones el nuevo valor que tendra
    // nuevoObjeto.nombre = 'Eduardo'
    // alert(nuevoObjeto[nombreDelObjeto]);


  //Algo asi seria

  copyProduct.push(newRow)
    //Otra cosa que podria hacer seria esto
    setProducts(copyProduct);
    setValueInput('')
    setValueInputPassword('')
    setVisible(false)
  }


  const [visible, setVisible] = useState(false);

  
  return (
    <div className="card">

      <Table columns={columns} dataTabla={products} optionsTable={optionTable} btnAction={setVisible}></Table>
      
      {/* <Splitter style={{ height: "300px" }}>
        <SplitterPanel
          className="flex align-items-center justify-content-center w-full"
          size={75}
        >
          <DataTable
            className="w-full overflow-y-auto h-[30rem]"
            value={products}
            sortMode="multiple"
          >
            {columns.map((col, key) => (
              <Column
                field={col.field}
                header={col.header}
                sortable
                key={key}
                style={{ width: "25%" }}
              ></Column>
            ))}
          </DataTable>
        </SplitterPanel>
      </Splitter>
      <div>
        <Paginado />
      </div> */}



      <div className="card flex justify-content-center">
            <Dialog header="Agregar" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
              
              <Form title={'Formulario Almacen'} dataForm={formularioAlmacen} bodyComponent={bodyProducts} functionForm={getDataForm}></Form>
              
            </Dialog>
        </div>
    </div>
  );
};

export default Almacen;
