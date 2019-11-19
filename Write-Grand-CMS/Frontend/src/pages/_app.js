import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../../lib/withApollo'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { createStore, StoreProvider } from 'easy-peasy';
import { globalStore } from '../../redux-store/global';


const light = {
  bg: 'white',
  fg: '#3c3c3c'
}

const dark = {
  bg: '#3c3c3c',
  fg: 'white'
}

const AppWrapper = styled.div`
/** 
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Lato Light'), local('Lato-Light'), url(/static/Fonts/Lato/Lato-Light.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Lato Regular'), local('Lato-Regular'), url(/static/Fonts/Lato/Lato-Regular.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Lato Bold'), local('Lato-Bold'), url(/static/Fonts/Lato/Lato-Bold.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'), url(/static/Fonts/Roboto/Roboto-Light.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'), url(/static/Fonts/Roboto/Roboto-Regular.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Roboto Medium'), local('Roboto-Medium'), url(/static/Fonts/Roboto/Roboto-Medium.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Roboto Bold'), local('Roboto-Bold'), url(/static/Fonts/Roboto/Roboto-Bold.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(/static/Fonts/Source_Sans_Pro/SourceSansPro-Light.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(/static/Fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'), url(/static/Fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(/static/Fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf) format('ttf');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
*/
`

const store = createStore(globalStore);
class WriteGrand extends App {

  handleScroll = (defaultTop) => {
    /**
     
    const el = document.querySelector('.Feedbar');
    var Top = el.offsetTop;
    if (Top > defaultTop + 30) {
      el.style.boxShadow = '0px 0px 3px 3px #cecece';
      el.style.margin = '5px 0%';
      el.style.background = 'white';
    }

    else {
      el.style.boxShadow = 'none';
      el.style.margin = '5px 5%';
      el.style.background = 'none';
    }
    */
  }
  componentDidMount() {
    /** 
    var defaultTop = document.querySelector('.Feedbar').offsetTop;
    document.addEventListener('scroll', () => this.handleScroll(defaultTop));
    */
  }
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
        <ApolloProvider client={apolloClient}>
          <StoreProvider store={store}>
            <ThemeProvider theme={dark}>
              <Component {...pageProps} />
            </ThemeProvider>
          </StoreProvider>
        </ApolloProvider>
    )
  }
}

export default withApollo(WriteGrand)
