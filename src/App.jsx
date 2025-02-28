
import RenderTable from './components/table/RenderTable';
import { data, tableHeaders } from './constants/constants';

function App(){
  const headers=Object.keys(tableHeaders).map(header=>tableHeaders[header]);
        return <div className="box-border w-full h-[100vh] pt-20 pl-10 pr-10">
        <RenderTable headers={headers} data={data} className="w-10"/>  
        </div>
}

export default App; 