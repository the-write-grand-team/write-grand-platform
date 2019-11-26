import styled from 'styled-components';
import { Devices } from '../../Global/responsive';
import { useState,useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';


const Container = styled.div`
display: flex;
flex-flow:column;
max-width: 1366px;
margin: 10px auto;
border: 1px solid #e0e0e0;
padding: 5px 0px;

@font-face {
font-family: 'AvenirNext';
font-style: normal;
font-weight: 400;
src: local('AvenirNextCyr-Regular'), url('/Assets/Fonts/Avenir-Next/AvenirNextCyr-Regular.woff') format('woff');
}

@font-face {
font-family: 'AvenirNext';
font-style: normal;
font-weight: 100;
src: local('AvenirNextCyr-Thin'), url('/Assets/Fonts/Avenir-Next/AvenirNextCyr-Thin.woff') format('woff');
}


@font-face {
font-family: 'AvenirNext';
font-style: normal;
font-weight: 200;
src: local('AvenirNextCyr-Light'), url('/Assets/Fonts/Avenir-Next/AvenirNextCyr-Light.woff') format('woff');
}



@font-face {
font-family: 'AvenirNext';
font-style: normal;
font-weight: 500;
src: local('AvenirNextCyr-Medium'), url('/Assets/Fonts/Avenir-Next/AvenirNextCyr-Medium.woff') format('woff');
}

@font-face {
font-family: 'AvenirNext';
font-style: normal;
font-weight: 600;
src: local('AvenirNextCyr-Demi'), url('/Assets/Fonts/Avenir-Next/AvenirNextCyr-Demi.woff') format('woff');
}


@font-face {
font-family: 'AvenirNext';
font-style: normal;
font-weight: 700;
src: local('AvenirNextCyr-Bold'), url('/Assets/Fonts/Avenir-Next/AvenirNextCyr-Bold.woff') format('woff');
}



@font-face {
font-family: 'AvenirNext';
font-style: normal;
font-weight: 900;
src: local('AvenirNextCyr-Heavy'), url('/Assets/Fonts/Avenir-Next/AvenirNextCyr-Heavy.woff') format('woff');
}

@font-face {
    font-family: 'TT Norms Pro';
    src: url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Regular.woff2') format('woff2'),
        url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'TT Norms Pro';
    src: url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Medium.woff2') format('woff2'),
        url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'TT Norms Pro';
    src: url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Bold.woff2') format('woff2'),
        url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'TT Norms Pro';
    src: url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Light.woff2') format('woff2'),
        url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'TT Norms Pro';
    src: url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Thin.woff2') format('woff2'),
        url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'TT Norms Pro';
    src: url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Black.woff2') format('woff2'),
        url('/Assets/Fonts/TT-Norms-Pro/TTNormsPro-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

`

const TopGrid = styled.div`
display:flex;
font-family: 'AvenirNext',sans-serif;
max-width: 1100px;
width: 100%;
margin: auto;
padding: 30px;

@media ${Devices.Mobile}
{
    flex-flow: column-reverse;
    padding: 10px;
}
.cover 
{
    background-size: cover;
    background-position: 95% 75%;
    background-image: url('https://image.freepik.com/free-vector/memphis-background-of-abstract-shapes_23-2147639629.jpg');
    width: 400px;
    height: 400px;
    margin-left: auto;
    border-radius: 10px;

    @media ${Devices.Mobile}
    {
    width: 390px;
    height: 390px;
    margin-left: 0;
    }
}

.details 
{
    display: flex;
    flex-flow: column;
    width: 50%;
    padding: 50px 10px;

    @media ${Devices.Mobile}
        {
        width: 100%;
        padding: 20px 10px;
        }

    .title 
    {
        font-weight: 700;
        font-size: 35px;
        color: #3c3c3c;
        text-transform: capitalize;
        width: 85%;
        @media ${Devices.Mobile}
        {
        width: 90%;
        }
    }

    .category
    {
        color: #4FC3F7;
        font-weight: 700;
        margin: 20px 0px;
        text-transform: uppercase;
        font-size: 14px;
    }

.excerpt
{
    width: 90%;
    color: #999999;
    font-weight: 600;
    font-size: 15px;
    text-transform: capitalize;
}

.meta 
{
    display: flex;
    margin: 20px 0px;
    .author 
    {
        color: #999999;
        font-weight: 700;
        font-size: 14px;
        text-transform: capitalize;
    }
}
}
`


function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}



const Home = () => {

    {
        /**
         * SIDEBAR HANDLE CLOSE ON CLICKING BODY
         */
    }
    var size = useWindowSize();
    var setSize = useStoreActions(actions => actions.setWindowSize);
    setSize(size.width);
    var setSidebar = useStoreActions(actions => actions.base.setSidebar);
    var sidebar = useStoreState(state => state.base.sidebar);
    
    return (
        <Container onClick={() => setSidebar(false)}>
         {
            
            <TopGrid>
            <div className="details">

                <div className="title">
                7 Psychological Superpowers Few People Have (That You Can Use to Set Yourself Apart)
                </div>
                <div className="category">
                    React
                </div>
                <div className="excerpt">
                    This is a general excerpt that i think needs your attention so just be careful about this
                </div>
                <div className="meta">
                    <div className="author">Afzaal Afridi</div>
                </div>
            </div>
            <div className="cover" />


            </TopGrid>

         
          }
        </Container>

    )
}

export default Home;