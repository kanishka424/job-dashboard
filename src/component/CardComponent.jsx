import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Table from './TableComponent';
import Table2 from './TableComponent2';


const { Meta } = Card;

    const { loading } = true;

function CardComponent() {
    return (
        <div>
        <Card style={{ margin: 16 }} loading={loading}>
         <Table2/>
        </Card>
        </div>
    );
  }
  
  export default CardComponent;
  



