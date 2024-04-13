/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Paginado from "../components/paginado.jsx";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Button } from "primereact/button";
import { columns, formularioAlmacen, bodyProducts, productosData } from "./aeronave.data.js";
import { Dialog } from 'primereact/dialog';
import {Form} from '../form/Form.jsx'

const Aeronave = () => {
  const [product, setProducts] = useState(productosData);
  const [valueInput, setValueInput] = useState('');
  const [valueInputPassword, setValueInputPassword] = useState('');

  
    const getDataForm = (datos) => {
    
      const copyProduct = product;
  
      const newRow = {
        aeronave: datos.aeronave,
        pn: datos.pn,
        description: datos.description,
        tipo: datos.tipo,
        sN: datos.sN,
        cantidad: datos.cantidad,
        condicion: datos.condicion,
        workorden: datos.workorden,
    }
    copyProduct.push(newRow)
    //Otra cosa que podria hacer seria esto
    setProducts(copyProduct);
    setValueInput('')
    setValueInputPassword('')
    setVisible(false)
  };


  const [visible, setVisible] = useState(false);

  return (
    <div className="card">
      <Splitter style={{ height: "300px" }}>
        <SplitterPanel
          className="flex align-items-center justify-content-center"
          size={75}
        >
          
          <DataTable
            value={product}
            sortMode="multiple"
            tableStyle={{ minWidth: "50rem" }}
          >
            {columns.map((col, key) => (
              <Column
                key={col}
                field={col.field}
                header={col.header}
                sortable
                style={{ width: "25%" }}
              ></Column>
            ))}
          </DataTable>
        </SplitterPanel>
      </Splitter>
      <div>
        <Paginado />
      </div>
      <div className="card flex justify-content-center">
        <Button label="Exportar" />
      </div>
      <div className="card flex justify-content-center">
        <Button label="Instalar un Componente" />
      </div>
      <div className="card flex justify-content-center">
            <Button label="Agregar Componente" icon="" onClick={() => setVisible(true)} />
            <Dialog header="Agregar" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                
                <Form title={'Formulario Alamcen'} dataForm={formularioAlmacen} bodyComponent={bodyProducts} functionForm={getDataForm}></Form>

            </Dialog>
        </div>
    </div>
  );
};

export default Aeronave;
