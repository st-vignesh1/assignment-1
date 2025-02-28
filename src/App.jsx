
import RenderTable from './components/table/RenderTable';
import { tableKeys } from './constants/constants';

function App(){
  

  // const tableHeader = {
  //   [tableHeaders.CUSTOMER]:{
  //     columnLabel:"Customer service",
  //     key:tableHeaders.CUSTOMER
  //   }
  // }
  const tableHeaders={
    [tableKeys.COMPANY]:{
      columnLabel:"Company Name",
      key:tableKeys.COMPANY
    },
    [tableKeys.CONTACT]:{
      columnLabel:"Contact",
      key:tableKeys.CONTACT
    },
    [tableKeys.COUNTRY]:{
      columnLabel:"Country",
      key:tableKeys.COUNTRY
    }
  } 


  const headers=Object.keys(tableHeaders).map(header=>tableHeaders[header]);


  const data=[
    {company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany"},
    {company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico"},
    {company:"Ernst Handel",contact:"Roland Mendel",country:"Austria"},
    {company:"Island Trading",contact:"Helen Bennett",country:"UK"},
    {company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada"},
    {company:"Italy",contact:"Giovanni Rovelli",country:"Italy"},
  ];

        return <div className="p-0 m-0 box-border w-[100%] h-[100vh] flex items-center justify-center ">
          <RenderTable headers={headers} data={data}/>
          
        </div>;
}

export default App; 