import React from 'react';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Accessory {
  image: string;
  name: string | React.ReactNode;
  quantity: string;
  description: string[];
}

interface AccessoriesTableProps {
  accessories: Accessory[];
}

const AccessoriesTable: React.FC<AccessoriesTableProps> = ({ accessories }) => {
  return (
    <table style={{ 
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      minWidth: '100%',
      display: 'table'
    }}>
      <colgroup>
        <col style={{ width: '5%' }} />
        <col style={{ width: '35%' }} />
        <col style={{ width: '5%' }} />
        <col style={{ width: '55%' }} />
      </colgroup>
      <thead>
        <tr style={{ width: '100%' }}>
          <th style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', width: '25%' }}>
            <Translate id="accessoriesTable.header.image" description="The header for the image column in accessories table">
              图片
            </Translate>
          </th>
          <th style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', width: '25%' }}>
            <Translate id="accessoriesTable.header.name" description="The header for the name column in accessories table">
              名称
            </Translate>
          </th>
          <th style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', width: '25%' }}>
            <Translate id="accessoriesTable.header.quantity" description="The header for the quantity column in accessories table">
              数量
            </Translate>
          </th>
          <th style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', width: '25%' }}>
            <Translate id="accessoriesTable.header.description" description="The header for the description column in accessories table">
              说明
            </Translate>
          </th>
        </tr>
      </thead>
      <tbody>
        {accessories.map((accessory, index) => (
          <tr 
            key={index}
            style={{ width: '100%' }}
          >
            <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', width: '25%' }}>
              <div style={{ width: '100%', height: '80px', margin: '0 auto' }}>
                <img 
                  src={useBaseUrl(accessory.image)} 
                  alt={typeof accessory.name === 'string' ? accessory.name : 'Product accessory'} 
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }} 
                />
              </div>
            </td>
            <td style={{ padding: '8px 15px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', width: '25%' }}>
              <span style={{ fontWeight: '500' }}>{accessory.name}</span>
            </td>
            <td style={{ padding: '8px 15px', textAlign: 'center', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', width: '25%' }}>
              {accessory.quantity}
            </td>
            <td style={{ padding: '8px 15px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', width: '25%' }}>
              {accessory.description.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccessoriesTable; 