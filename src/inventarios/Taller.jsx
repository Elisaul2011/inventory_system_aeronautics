import React from "react";
import { columns, bodyTaller, TallerData, formularioTaller } from "./Taller.data";
import { Button } from "primereact/button";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Paginado from "../components/paginado.jsx";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Dialog } from "primereact/dialog";
import { Form } from "../form/Form.jsx";

const Taller = () => {
  const [products, setProducts] = useState(TallerData);
  const [valueInput, setValueInput] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");

  const getDataForm = (datos) => {
    const copyProduct = products;
    const newRow = {
      taller: datos.taller,
      pn: datos.pn,
      descripcion: datos.descripcion,
      tipo: datos.tipo,
      sn: datos.sn,
      workorden: datos.workorden,
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
      <Splitter style={{ height: "300px" }}>
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
      </div>
      <div className="card flex justify-content-center">
        <Button label="Exportar" />
      </div>
      <div className="card flex justify-content-center">
        <Button label="Importar" />
      </div>
      <div className="card flex justify-content-center">
        <Button
          label="Agregar Componente"
          icon=""
          onClick={() => setVisible(true)}
        />
        <Dialog
          header="Agregar"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <Form
            title={"Formulario Taller"}
            dataForm={formularioTaller}
            bodyComponent={bodyTaller}
            functionForm={getDataForm}
          ></Form>
        </Dialog>
      </div>
    </div>
  );
};

export default Taller;
