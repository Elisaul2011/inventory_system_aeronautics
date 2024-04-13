import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import PropTypes from "prop-types";

const TableCustom = ({columnsTable, dataTable}) => {
  return (
    <div className="card">
    <DataTable value={dataTable} tableStyle={{ minWidth: "50rem" }}>
      {columnsTable.map((col, idnex) => (
        <Column key={idnex} field={col.column}  sortable  header={col.header}></Column>
      ))}
    </DataTable>
  </div>
  )
}

export default TableCustom


TableCustom.propTypes = {
  columnsTable: PropTypes.string,
  dataTable: PropTypes.string,
}