import { Table, Tag, Radio, Space } from 'antd';
import React, { useState } from 'react';

import data from '../data/JobJsonFile.json'

const columns = [
  {
    title: 'Status',
    dataIndex: 'jobStatus',
    key: 'jobStatus',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Queued',
    dataIndex: 'queuedTime',
    key: 'queuedTime',
  },
  {
    title: 'Start',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: 'End',
    dataIndex: 'endTime',
    key: 'endTime',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a>View</a>
      </Space>
    ),
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];


function TableComponent() {

  // console.log(data.jobs);

  // const [top, setTop] = useState('topLeft');
  // const [bottom, setBottom] = useState('bottomRight');
    return (
      <div>
      <Table
        columns={columns}
        // pagination={{ position: [top, bottom] }}
        dataSource={data.jobs}
      />  
    </div>
    );
  }
  
  export default TableComponent;
  



