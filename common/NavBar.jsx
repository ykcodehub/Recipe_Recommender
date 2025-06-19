
import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';

//Routing ka link component ko import garyeu
import { Link } from "react-router-dom";
const NavBar = () => {
    return(
        <Menu borderless fixed='top'>
            <Menu.Item>
                <img src={ logo } alt='logo' style = {{width:40}}/>
            </Menu.Item>
            <Menu.Item name='Home' as={Link} to='/'/>
            <Menu.Item name='Recipes' as={Link} to='/recipes'/>
            <Menu.Item name='About us' as={Link} to='/About_us'/>
            <Menu.Item name='Contact us' as={Link} to='/contact_us'/>
            <Menu.Item name='Login' as={Link} to='/login'/>

        </Menu>
    )
}

export default NavBar;