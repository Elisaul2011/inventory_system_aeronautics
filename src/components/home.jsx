import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
const home = () => {
  return (
    <div>
      <Link to='/inventarios'>
      <Button label="INVENTARIOS" severity="danger" className="flex align-items-center gap-2"  listStyle={{ maxHeight: '250px' }} />
      </Link>
      <Link to='/inspeccion'>
      <Button label="Inspección" severity="danger" raised />
      </Link>
      <Link to='/prestar-componente'>
      <Button label="Prestar" severity="danger" raised />
      </Link>
      <Button label="Danger" severity="danger" raised />
    </div>
  )
}

export default home
