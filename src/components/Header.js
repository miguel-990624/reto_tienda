import { Button, Flex } from "antd";
import { useSearchContext } from "./SearchContext";
import Search from "antd/es/input/Search";
import { ShoppingCartOutlined, createFromIconfontCN } from '@ant-design/icons';



export const Header = () => {
    const {handleSearchClick,searchVal, setSearchVal} = useSearchContext();
    return (
        <Flex justify="space-between" align="center" gap="middle" className="header" flex="1">
                <img src="https://cdn11.bigcommerce.com/s-3b5vpig99v/images/stencil/250x100/star-city-logo_1573013805__82344.original.png" alt="logo"></img>
                <Search 
                placeholder="search"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onSearch={handleSearchClick} 
                enterButton />
                <Button><ShoppingCartOutlined height="10rem" /></Button>
                
        </Flex>
    );
}