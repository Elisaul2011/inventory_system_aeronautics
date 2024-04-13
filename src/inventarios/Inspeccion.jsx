import React from "react";
import { columns, bodyInspeccion, InspeccionData, formularioInspeccion, optionTable } from "./Inspeccion.data.js";
import { Button } from "primereact/button";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Paginado from "../components/paginado.jsx";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Dialog } from "primereact/dialog";
import { Form } from "../form/Form.jsx";
import { Table } from "../tabla/Table.jsx";

const Inspeccion = () => {
  const [products, setProducts] = useState(InspeccionData);
  const [valueInput, setValueInput] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");

  const getDataForm = (datos) => {
    const copyProduct = products;
    const newRow = {
      ubicacion: datos.ubicacion,
      zona: datos.zona,
      pn: datos.pn,
      descripcion: datos.descripcion,
      tipo: datos.tipo,
      sn: datos.sn,
      cantidad: datos.cantidad,
      lote: datos.lote,
      condicion: datos.condicion,
      estado: datos.estado
    };

    copyProduct.push(newRow);
    //Otra cosa que podria hacer seria esto
    setProducts(copyProduct);
    setValueInput("");
    setValueInputPassword("");
    setVisible(false);
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className="card">

      <Table columns={columns} dataTabla={products} optionsTable={optionTable} btnAction={setVisible}></Table>

      {/* <Splitter style={{ height: "300px" }}>
        <SplitterPanel
          className="flex align-items-center justify-content-center"
          size={75}
        >
          <DataTable
            value={products}
            sortMode="multiple"
            tableStyle={{ minWidth: "50rem" }}
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




        
        <Dialog
          header="Agregar"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <Form
            title={"Formulario Inspección"}
            dataForm={formularioInspeccion}
            bodyComponent={bodyInspeccion}
            functionForm={getDataForm}
          ></Form>
        </Dialog>
    </div>
  );
};

export default Inspeccion;