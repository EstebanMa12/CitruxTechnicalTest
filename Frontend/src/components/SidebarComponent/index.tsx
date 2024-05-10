import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { useState } from 'react';
import './styles.sass'
const SidebarComponent = () => {
    const [collapsed, setCollapsed]= useState(true)

    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Sidebar className='SidebarComponent' collapsed={collapsed}>
            <Menu>
                <MenuItem 
                    // icon={<img src="https://img.icons8.com/ios/452/home.png" alt="Home" />}
                    onClick={toggleSidebar} 
                >Home</MenuItem>
                <SubMenu title="Components">
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
}

export default SidebarComponent;