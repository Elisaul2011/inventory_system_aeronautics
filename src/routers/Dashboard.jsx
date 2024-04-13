import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import TableCustom from "../table/TableCustom";

const products = [
  {
    code: "data",
    name2: "data",
    category: "data",
    quantity: 5,
  },
  {
    code: "data",
    name: "data",
    category: "data",
    quantity: 5,
  },
  {
    code: "data",
    name: "data",
    category: "data",
    quantity: "5,00",
  },
  {
    code: "data",
    name: "data",
    category: "data",
    quantity: 5,
  },
];

const columns = [
  {
    column: "code",
    header: "Codigo",
    type: "text",
  },
  {
    column: "name",
    header: "Nombre",
    type: "text",
  },
  {
    column: "category",
    header: "Ctegoria",
    type: "text",
  },
  {
    column: "quantity",
    header: "Cantidad",
    type: "number",
  },
  {
    column: "quantity",
    header: "Cantidad2",
    type: "number",
  },
  {
    column: "quantity",
    header: "Cantidad3",
    type: "number",
  },
  {
    column: "quantit232y",
    header: "Cantidad4",
    type: "number",
  },
];

const Dashboard = () => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState(prodcuts);
  const [columnsTable, setColumnTabls] = useState(columns);

  // const parseNumber = (value, name) => {
  //   console.log(value);
  //   // console.log(name);
  //   return `${value.quantity},00Bs`;
  // };

  const [loading, setLoading] = useState(false);

  const load = () => {
      setLoading(true);

      setTimeout(() => {
          setLoading(false);
      }, 2000);
  };


  useEffect(() => {
    // ProductService.getProductsMini().then(data => setProducts(data));
  }, []);

  return (
    <div className=" bg-gray-800 w-screen h-screen flex  flex-col items-center justify-center">
      Dashboard
      <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" />
      </div>
      {/* <div className="buttons ">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
      </div> */}
      {/* <span className="p-float-label flex mt-8 transition-all duration-200">
        <InputText
          id="username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label
          htmlFor="username"
          className=" text-white"
        >
          Username
        </label>
      </span> */}

      <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
        </div>

      <TableCustom columnsTable={columnsTable} dataTable={products}></TableCustom>

    </div>
  );
};

export default Dashboard;
