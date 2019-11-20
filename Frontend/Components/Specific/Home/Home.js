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
    var setSidebar = useStoreActions(actions => actions.base.setSidebar);
    var sidebar = useStoreState(state => state.base.sidebar);
    
    return (
        <Container onClick={() => setSidebar(false)}>
        
        </Container>

    )
}

export default Home;