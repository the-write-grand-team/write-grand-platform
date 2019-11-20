
import styled from 'styled-components';
import { Devices } from './responsive';
import {useState} from 'react';
import {useStoreState,useStoreActions} from 'easy-peasy';

const Logo = styled.img`
width: 150px;
height: 31px;
max-width: 100%;
margin-top: 15px;
margin-left: 10px;
border-right: 1px solid #E0E0E0;
padding: 0px 10px;

@media ${Devices.smallMobile}
{
    width: 118px;
    height: 25px;
}


@media ${Devices.Mobile}
{
    width: 160px;
    height: 33px;
    margin-top: 8px;
}
`
const Navigation = styled.ul`
display: flex;
list-style: none;
overflow: hidden;
background: white;
max-width: 1366px;
margin: 0px auto;
`

const Navitem = styled.li`


`




{
    /**
     * MAIN NAVBAR & SIDEBAR FILE  
     */
}


const Nav = () => {
    var drawer = useStoreState(state => state.base.sidebar);
    var setDrawer = useStoreActions(actions => actions.base.setSidebar);
    return (
        <nav>
            <Navigation>
                <Logo src="/static/Assets/logo.png" />
                {
                    /**
                     * 
                     * 
                     *  MENU STARTS
                     * 
                     */
                }
                

                {
                    /**
                     * 
                     * 
                     *  MENU ENDS
                     * 
                     */
                }
            </Navigation>
        </nav>
    )
}

export default Nav;