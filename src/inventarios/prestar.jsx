/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { bodyPrestar, columns, formularioPrestar, PrestarData, optionTable} from "./prestar.data.js";
import { Form } from "../form/Form.jsx";
import { Table } from "../tabla/Table.jsx";
import './almacen.css'

const Almacen = () => {
  const [products, setProducts] = useState(PrestarData);

  const [valueInput, setValueInput] = useState('');
  const [valueInputPassword, setValueInputPassword] = useState('');
  

  const getDataForm = (datos) => {
    
    const copyProduct = products;

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

  copyProduct.push(newRow)
    setProducts(copyProduct);
    setValueInput('')
    setValueInputPassword('')
    setVisible(false)
  }


  const [visible, setVisible] = useState(false);

  
  return (
    <div className="card">

      <Table columns={columns} dataTabla={products} optionsTable={optionTable} btnAction={setVisible}></Table>

      <div className="card flex justify-content-center">
            <Dialog header="Agregar" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
              
              <Form title={'Reparar Componentes'} dataForm={formularioPrestar} bodyComponent={bodyPrestar} functionForm={getDataForm}></Form>
              
            </Dialog>
        </div>
    </div>
  );
};

export default Almacen;
