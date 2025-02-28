import PropTypes from 'prop-types';
import React from 'react';
export default function RenderTable({headers,data,className}) {
  
  return (
    <table className='w-full border-1 border-gray-200 capitalize' >
      <thead className='bg-white  border-gray-200 border-b-1'>
        <tr className='w-full'>
             {headers.length>0 && headers.map((header,index)=><th className={`text-left border-1  border-gray-200 p-2 ${className ? className : 'w-auto'}`} key={index} >{header.columnLabel}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.length>0 && data.map((val,index)=><tr className="odd:bg-gray-300 even:bg-white" key={index}>
          {headers.map((header,index)=><td className="border-1 border-gray-200 p-2"key={index}>{val[header.key]}</td>)}
        </tr>)}
      </tbody>
    </table>
  )
}
RenderTable.propTypes={
    headers:PropTypes.arrayOf(PropTypes.shape({columnLabel:PropTypes.string.isRequired,key:PropTypes.string.isRequired})).isRequired,
    data:PropTypes.arrayOf(PropTypes.objectOf([PropTypes.string,PropTypes.number])).isRequired,
    className:PropTypes.string,
}