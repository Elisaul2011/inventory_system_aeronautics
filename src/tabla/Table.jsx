import PropTypes from "prop-types";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Splitter, SplitterPanel } from "primereact/splitter";
import Paginado from "../components/paginado.jsx";
import { Button } from "primereact/button";
//ahora si xd
export const Table = ({ columns, dataTabla, optionsTable, btnAction }) => {


    const handleBtn = () => {
        btnAction(true)
    }

    return (
        <div className="colorCss">
            {/*  bueno, en si splitter esta demas... pero en si solo el splitterpanel hace la funcion.*/}

            
            {optionsTable && optionsTable.btn && (
                <div className="w-full flex items-center justify-between my-5">
                        <div className="flex gap-5">
                        <div className="card flex justify-content-center">
                            <Button label={optionsTable.btntext ? optionsTable.btntext : 'Importar'} />
                        </div>
                        <div className="card flex justify-content-center">
                            <Button label={optionsTable.btnTextTwo ? optionsTable.btnTextTwo : 'Exportar'} />
                        </div>
                    </div>
                        
                    
                    <div className="card flex justify-content-center">
                        <Button
                            label={optionsTable.btnTextThree ? optionsTable.btnTextThree : 'Agregar componente'}
                            icon=""
                            onClick={handleBtn}
                        />
                    </div>
                </div>
            )}

            <Splitter style={{ height: "20rem" }}>
                <SplitterPanel
                    className="flex align-items-center justify-content-center w-full overflow-y-auto"
                    size={75}
                >
                    <DataTable className="w-full" value={dataTabla} sortMode="multiple">
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

        </div>
    );
};

Table.propTypes = {
    columns: PropTypes.array,
    dataTabla: PropTypes.array,
    optionsTable: PropTypes.object,
    btnAction: PropTypes.func,
};
