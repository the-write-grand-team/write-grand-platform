
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
    visibility: hidden;
    position: absolute;
    flex-flow: column;
    background: white;
    width: 100%;
    justify-content: left;
    align-items: flex-start;
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
        margin-top: 14px;
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
    width: 22px;
    margin:0px 7px;
    margin-top: 5px;
}
`

const Button = styled.button`
padding: 10px 15px;
color: #263238;
font-weight: 600;
border-radius: 3px;
font-size: 15px;
font-family: 'AvenirNext',sans-serif;
`




{
    /**
     * MAIN NAVBAR & SIDEBAR FILE  
     */
}


const Nav = () => {
    var drawer = useStoreState(state => state.base.sidebar);
    var setDrawer = useStoreActions(actions => actions.base.setSidebar);
    var windowSize = useStoreState(state => state.windowSize);
    return (
        <nav>
            <Navigation>
                <Logo src="/Assets/Images/Logo.svg" />
                {
                    /**
                     * 
                     * 
                     *  MENU STARTS
                     * 
                     */
                }
                
                <MiddleSection style={{visibility: windowSize < 768 ? (drawer ? 'visible' : 'hidden') : null}}>
 
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
                <Navitem className="drawer" onClick={() => setDrawer(true)}>
                    <box-icon name='menu' ></box-icon>
                    </Navitem>
                    <Navitem>
                        <Button style={{marginTop: '2px'}}> Sign in</Button>
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