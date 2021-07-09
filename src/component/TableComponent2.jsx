import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import data from '../data/JobJsonFile.json'

const menu = (
    <Menu>
      <Menu.Item>Action 1</Menu.Item>
      <Menu.Item>Action 2</Menu.Item>
    </Menu>
  );

  function TableComponent2() {
    const expandedRowRender = () => {
      const columns = [
        {
            title: 'Status',
            key: 'jobStatus',
            render: () => (
              <span>
                <Badge status="success" />
                Finished
              </span>
            ),
          },
        { title: 'Queued', dataIndex: 'queuedTime', key: 'queuedTime' },
        { title: 'Start', dataIndex: 'startTime', key: 'startTime' },
        { title: 'End', dataIndex: 'endTime', key: 'endTime' },
        { title: 'Duration', dataIndex: 'duration', key: 'duration' },
      ];
  
      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          date: '2014-12-24 23:12:00',
          name: 'This is production name',
          upgradeNum: 'Upgraded: 56',
        });
      }
      return <Table columns={columns} dataSource={data.jobs} pagination={false} />;
    };
  
    const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'Name', dataIndex: 'owner', key: 'owner' },
      { title: 'Date', dataIndex: 'name', key: 'name' },
    //   { title: 'Version', dataIndex: 'version', key: 'version' },
    //   { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    //   { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    //   { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    //   { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
    ];
  
    // const data = [];
    // for (let i = 0; i < 3; ++i) {
    //   data.push({
    //     key: i,
    //     name: 'Screem',
    //     platform: 'iOS',
    //     version: '10.3.4.5654',
    //     upgradeNum: 500,
    //     creator: 'Jack',
    //     createdAt: '2014-12-24 23:12:00',
    //   });
    // }
  
    return (
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandable={{ expandedRowRender }}
        dataSource={data.jobs}
      />
    );
  }
  export default TableComponent2;