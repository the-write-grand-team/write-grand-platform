
import styled from 'styled-components';
import { Devices } from './responsive';
import {useState} from 'react';
import {useStoreState,useStoreActions} from 'easy-peasy';

const Logo = styled.img`
width: 150px;
max-width: 100%;
margin-top: 15px;
border-right: 1px solid #E0E0E0;
padding: 5px 10px;
`
const Navigation = styled.ul`
display: flex;
list-style: none;
overflow: hidden;
background: white;
max-width: 1366px;
margin: 0px auto;
`

const MiddleSection = styled.div`
margin-left: auto;
display: flex;
justify-content: center;
align-items:center;

@media ${Devices.Mobile}
{
    display: none;
}
`

const LastSection  = styled.div`
margin-left: auto;
display: flex;
justify-content: center;
align-items:center;
.drawer 
{
    display: none;
    @media ${Devices.Mobile}
    {
        display: flex;
        margin-top: 16px;
    }

    box-icon 
    {
        width: 24px;
    }
}
`
const Navitem = styled.li`
display: flex;
margin: 0px 5px;
margin-top: 15px;
font-size: 16px;
color: #999999;

box-icon 
{
    fill: #546E7A;
    width: 24px;
    margin:0px 7px;
    margin-top: 1px;
}
`

const Button = styled.button`
padding: 10px 15px;
color: #263238;
font-weight: 600;
border-radius: 3px;
font-size: 14px;
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
                <Logo src="/static/Assets/logo.svg" />
                {
                    /**
                     * 
                     * 
                     *  MENU STARTS
                     * 
                     */
                }
                
                <MiddleSection>
 
                <Navitem>
                <box-icon name='search-alt'></box-icon>
                </Navitem>
                <Navitem>
                <box-icon  name='bookmark'></box-icon>
                </Navitem>
                <Navitem>
                <box-icon name='message-square' ></box-icon>
                </Navitem>
                <Navitem>
                <box-icon name='bell'  ></box-icon>
                </Navitem>
                </MiddleSection>

                <LastSection>
                <Navitem className="drawer">
                    <box-icon name='menu' ></box-icon>
                    </Navitem>
                    <Navitem>
                        <Button> Sign in</Button>
                    </Navitem>
                    <Navitem>
                        <Button style={{color: '#263238',backgroundColor: '#00E676'}}>
                        Sign up
                        </Button>
                    </Navitem>
                </LastSection>

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