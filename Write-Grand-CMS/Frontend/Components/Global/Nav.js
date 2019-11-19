
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
box-shadow: 0px 0px 4px 2px #F5F5F5;
overflow: hidden;
background: white;


.mobile 
{
    opacity: 0;
    transition: width 0.7s,opacity 0.9s, linear;
    position: absolute;
    width: 0px;
    left: 0;
    background: white;
    padding: 10px 0px 10px 0px;
    margin-top: 49px;
    height: 100%;
    box-shadow: 2px 2px 2px 2px #F5F5F5;
    border-radius: 2px;
    width:0px;
    z-index: 2;

    @media ${Devices.iPad}
    {
        display: block;
        li
        {
            .text 
            {
                @media ${Devices.iPad}
                {
                    display: block;
                }
            }
        }
        
    }

    @media ${Devices.smallMobile}
    {
        margin-top: 52px;
    }

    @media ${Devices.Mobile}
    {
        li 
        {
            .icon 
            {
                margin-top: 15px;
                font-size: 30px;
            }

            .text 
            {
                font-size: 18px;
                margin-top: 18px;
            }
        }
    }
}

.show 
{
   width: 250px; 
  opacity: 1;

  @media ${Devices.smallMobile}
    {
        width: 200px;
    }
}

.desktop 
{
    display: flex;
    width:100%;
    padding: 5px;
    li
        {
            .text 
            {
                @media ${Devices.iPad}
                {
                    display: none;
                }

                @media ${Devices.Mobile}
                {
                    display: none;
                }
                @media ${Devices.smallMobile}
                {
                display: none;
                }
            }

            .getStartedButton
            {
                margin-top: 8px;
                padding: 8px 12px;

                @media ${Devices.iPad}
                {
                    display: block;
                }
            }
        }
.entry 
{
    @media ${Devices.smallMobile}
    {
        display: none;
        
    }

    @media ${Devices.Mobile}
    {
        display: none;
        
    }

    @media ${Devices.iPad}
    {
        display: none;
        
    }

    @media ${Devices.iPadPro}
    {
        display: none;
        
    }
}

.sidebar 
{
display:none;

@media ${Devices.smallMobile}
{
    display: block;
}

@media ${Devices.Mobile}
{
    display: block;
}

@media ${Devices.iPad}
{
    display: block;
}

@media ${Devices.iPadPro}
{
    display: block;
}


}


}


`

const Navitem = styled.li`
    margin-right:5px;
    display: flex;
    margin: 0px 10px;
    cursor: pointer;
    :nth-last-child(7)
    {
        margin-left: auto;
    }

    @media ${Devices.Mobile}
    {
        padding: 0px;
        margin: 0px 5px;
    }

    @media ${Devices.smallMobile}
    {
        padding: 5px;
    }


    .text 
    {
    font-family: 'Source Sans pro',sans-serif;
    font-size: 16px;
    margin-left: 7px;
    margin-top: 16px;
    color: #999999;
    @media ${Devices.smallMobile}
    {
        margin-top: 14px;
        font-size: 12px;
    }
    }

    .getStartedButton 
    {
        padding: 7px 20px;
        border: 1.3px solid #F06292;
        font-size: 16px;
        border-radius: 3px;
        margin-top: 12px;
        margin-bottom: 4px;
        margin-left: 0px;
        color: #F06292;
    }

    .icon 
    {
        margin-top:16px;
        font-size:22px;
        fill: #90A4AE;

    @media ${Devices.smallMobile}
    {
        margin-top: 10px;
        font-size: 16px;
    }

    @media ${Devices.Mobile}
    {
        margin-top: 8px;
        font-size: 24px;
    }
    }

`

const Avatar = styled.div`
background-image: url("https://i.pinimg.com/originals/95/49/ff/9549ff7f5600476511721eade4f4b91f.png");
border-radius: 50%;
width: 22px;
height:22px;
background-size:cover;
background-position: center;

@media ${Devices.smallMobile}
    {
        width: 14px;
        height: 14px;
    }
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
                <div className="desktop">

                
                <Navitem className="entry"> 
                    <div className="text">
                    React JS
                    </div>
                </Navitem>

                <Navitem className="entry"> 
                    <div className="text">
                    Javascript
                    </div>
                </Navitem>
                <Navitem> 
                    <div className="icon">
                    <box-icon name='star' type="solid" style={{fill: '#FBD10D'}}></box-icon>
                    </div>
                </Navitem>
                <Navitem> 
                    <div className="icon">
                    <box-icon name='search' ></box-icon>
                    </div>
                </Navitem>
                <Navitem> 
                    <div className="icon">
                    <box-icon name='bookmark' style={{fill: '#F06292'}}></box-icon>
                    </div>
                </Navitem>
                <Navitem> 
                    <div className="icon">
                    <box-icon name='message-alt-dots' style={{fill: '#AED581', width: 26, height: 26}}></box-icon>
                    </div>
                </Navitem>
                <Navitem> 
                    <div className="icon">
                    <box-icon name='bell' ></box-icon>
                    </div>
                </Navitem>
                <Navitem className="sidebar" onClick={() => setDrawer(!drawer)}> 
                    <div className="icon">
                    <box-icon name='menu'></box-icon>
                    </div>
                </Navitem>
                <Navitem> 
                    <div className="icon">
                        { /**
                    <i className='bx bxs-user-circle' />
                    
                   <Avatar  />
                            */
                        }
                    </div>
                    <div className="text getStartedButton">
                    Get Started
                    </div>
                </Navitem>
                </div>

                {
                    /**
                     * 
                     * 
                     *  MENU ENDS
                     * 
                     */
                }

                
                {
                    /**
                     * 
                     * 
                     *  MOBILE SIDEBAR STARTS
                     * 
                     */
                }
                <div className= { drawer ? "mobile show" : "mobile"}>
                <Navitem> 
                    <div className="icon">
                    <box-icon name='react' type='logo' style={{fill: '#19bcfb'}}></box-icon>
                    </div>
                    <div className="text">
                    React Javascript
                    </div>
                </Navitem>

                <Navitem> 
                    <div className="icon">
                    <box-icon name='javascript' type='logo' style={{fill: '#EDD719'}}></box-icon>
                    </div>
                    <div className="text">
                    Javascript
                    </div>
                </Navitem>
                </div>
                {
                    /**
                     * 
                     * 
                     *  MOBILE SIDEBAR ENDS
                     * 
                     */
                }
            </Navigation>
        </nav>
    )
}

export default Nav;