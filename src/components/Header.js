import { Button, Flex } from "antd";
import { useSearchContext } from "./SearchContext";
import Search from "antd/es/input/Search";
import { ShoppingCartOutlined, createFromIconfontCN } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import {Nav, Navbar as NavbarBs} from "react-bootstrap"

export const Header = () => {
    const {handleSearchClick,searchVal, setSearchVal} = useSearchContext();
    return (
        <NavbarBs>
            <Nav className="me-auto">
                <Nav.Link to ="/" as={NavLink} >
                    <img
                    src="https://cdn11.bigcommerce.com/s-3b5vpig99v/images/stencil/250x100/star-city-logo_1573013805__82344.original.png" 
                    alt="logo"
                    onClick={handleSearchClick}
                    />
                </Nav.Link>
                <Nav.Link to="/" as={NavLink}>
                    <Search
                    placeholder="search"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    onSearch={handleSearchClick}
                    enterButton
                    className="col-17" />
                </Nav.Link>
                <Nav.Link to="/cart" as={NavLink}>
                    <Button><ShoppingCartOutlined height="10rem" className="col-1" /></Button>
                </Nav.Link>
            </Nav>
        </NavbarBs>
    );
}