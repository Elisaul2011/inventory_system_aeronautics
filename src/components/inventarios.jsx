import { TabView, TabPanel } from "primereact/tabview";
import Almacen from "../inventarios/almacen";
import Aeronave from "../inventarios/Aeronave.jsx";
import Taller from '../inventarios/Taller.jsx';


export default function Inventarios() {
    // const [dateFilter, setDateFilter] = useState([]);

    // const filterValue = (event) => {
    //     const filterInput = event.target.value;
    //     if (rows && rows.length > 0) {
    //         const filterColumn = columns.filter(
    //             (col) => col.filterOption == true
    //         );
    //         const filtersKey = filterColumn.map((col) => col.column);
    //         const filterSearch = filtersKey
    //             .map((col) =>
    //                 rows.filter((fil) =>
    //                     fil[col]
    //                         .toString()
    //                         .toLowerCase()
    //                         .includes(filterInput.toLowerCase())
    //                 )
    //             )
    //             .flat();
    //         const reduceFilter = new Set(filterSearch);
    //         const result = [...reduceFilter];
    //         setDateFilter(result);
    //     }
    // };

    return (
        <div className="card">
            <TabView>
                <TabPanel header="Inventario General">
                    <div className="card">
                        <Almacen />
                    </div>
                </TabPanel>

                <TabPanel header="Componentes en Aeronave">
                    <Aeronave />
                </TabPanel>

                <TabPanel header="Taller de Reparación">
                    <Taller />
                </TabPanel>
            </TabView>
        </div>
    );
}
