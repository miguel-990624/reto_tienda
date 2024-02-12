import { useSearchContext } from "./SearchContext"
import { Table } from 'antd';


export const Cart = () =>{
    const column = [{
        title: 'Card',
        dataIndex: 'id',
        key: "id",
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: "quantity",
    }]
    const {cart} = useSearchContext();

    return(
        <Table columns={column} dataSource={cart}/>
    );
}