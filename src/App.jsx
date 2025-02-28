import { useState } from 'react';
import RenderTable from './components/table/RenderTable';

function App(){
  const tableHeaders={
    CUSTOMER:"customer",
    CONTACT:"contact",
    COUNTRY:"country",

  }
  const [headers,setHeaders]=useState(Object.keys(tableHeaders).map(headers=>tableHeaders[headers]));
  const [data,setData]=useState([
    {customer:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany"},
    {customer:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico"},
    {customer:"Ernst Handel",contact:"Roland Mendel",country:"Austria"},
    {customer:"Island Trading",contact:"Helen Bennett",country:"UK"},
    {customer:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada"},
    {customer:"Italy",contact:"Giovanni Rovelli",country:"Italy"},
  ]);

        return <div className="p-0 m-0 box-border w-[100%] h-[100vh] flex items-center justify-center ">
          <RenderTable headers={headers} data={data}/>
          
        </div>;
}

export default App; 