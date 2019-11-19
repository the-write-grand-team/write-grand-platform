import styled from 'styled-components';
import { Devices } from '../../Global/responsive';
import { useState,useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Swiper from 'react-id-swiper';
import SwiperCSS from 'react-id-swiper/lib/styles/css/swiper.css';
import RecentGrid from './RecentGrid';
import Style1 from './ArticleCards/Style1';
import Style2 from './ArticleCards/Style2';
import Style3 from './ArticleCards/Style3';
import Style4 from './ArticleCards/Style4';

const Container = styled.div`
display: flex;
flex-flow:column;
max-width: 100%;
margin: 10px 40px;
border: 1px solid #e0e0e0;
padding: 5px 0px;
@media ${Devices.Mobile}
{
  margin: 10px 0px;
}

@media ${Devices.iPad}
{
  margin: 10px 0px;
}

@media ${Devices.iPadPro}
{
  margin: 10px 0px;
}

@media ${Devices.smallMobile}
{
  margin: 10px 0px;
}

@media ${Devices.Desktop}
{
  margin: 10px 5px;
}
`

const RecentUpdates = styled.div`
display: flex;
flex-flow: column;

.recents-title 
{
  font-family: 'Source Sans Pro',sans-serif;
  font-size: 20px;
  color: #3c3c3c;
  margin: 10px 15px;
  font-weight: 600;
}

.navigateCarousel
  {
    display: flex;
    align-items: center;
    padding: 0px 8px;

    .navigateLeft 
    {
      @media ${Devices.largeDesktop}
      {
        display: none;
      }
    }

    .navigateRight
    {
      @media ${Devices.largeDesktop}
      {
        display: none;
      }
    }
  }
.swiper-container 
{
  padding: 10px;
}
`

const RecentsBlock= styled.div`
display: flex;
flex-flow: row;
overflow: scroll;
margin: 0px 0px;

@media ${Devices.largeDesktop}
{
  overflow: hidden;
}
::-webkit-scrollbar { 
    display: none;  // Safari and Chrome
}
`

const UserSidebar = styled.div`
display: flex;
flex-flow: column;
flex-grow: 1;
height: 1000px;
position: sticky;
top: 0;
@media ${Devices.Mobile}
{
  display: none;
}

@media ${Devices.smallMobile}
{
  display: none;
}

@media ${Devices.iPad}
{
  display: none;
}

`

const SiteSidebar = styled.div`
display: flex;
flex-flow: column;
flex-grow: 1;
height: 1000px;
position: sticky;
top: 0;
@media ${Devices.Mobile}
{
  display: none;
}

@media ${Devices.smallMobile}
{
  display: none;
}

`

const FeaturedPublishings = styled.div`
display: flex;
flex-flow: column;

.featuredTitleArea 
{
  display: flex;
  margin: 10px 0px;
  margin-top: 0px;
.featuredTitle 
{
  font-size: 20px;
  color: #3c3c3c;
  margin: 10px 15px;
  font-weight: 600;
  text-transform: uppercase;
}
.feedCategories
{
  display: flex;
  margin-left: auto;
  flex-wrap: wrap;
  margin-right: 10px;
  .feedCatIcon 
  {
    display: flex;
    margin: 0px 10px;
    margin-top: 9px;
    height: 26px;
    cursor: pointer;
    :hover 
    {
      border-bottom: 1.5px solid #90A4AE;
      padding-bottom: 3px;
    }
    @media ${Devices.iPad}
    {
      margin-top: 3px;
    }

    box-icon
    {
      height: 26px;
      width: 26px;
    }
}
}
}
`

const CatagoricalPublicationsStyle1 = styled.div`
display: flex;
flex-flow: column;

.catagoricalPublicationsStyle1Title
{
  font-size: 20px;
  color: #3c3c3c;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px 15px;
}
`


const Feed = styled.div`
display: flex;
flex-flow: column;
flex-grow: 0.1;
padding: 10px 0px;
font-family: 'Source Sans Pro',sans-serif;
border: 1px solid #cecece;

@media ${Devices.iPad}
{
margin: 0px auto;
}

@media ${Devices.iPadPro}
{
margin: 0px auto;
}

@media ${Devices.iPad}
{
margin: 0px auto;
}

@media ${Devices.mobile}
{
margin: 0px auto;
}

@media ${Devices.smallmobile}
{
margin: 0px auto;
}

`

const Main = styled.div`
display: flex;
max-width: 1300px;
width: 100%;
margin: 10px auto;
`

const Widget = styled.div`
display: flex;
width: 300px;
max-width:100%;
height: 200px;
padding: 10px;
box-shadow: 0px 0px 4px 1px #E0E0E0;
margin: 10px auto;
border-radius: 5px;

:first-child
{
  margin-top: 25px;
}

@media ${Devices.iPad}
{
width: 200px;
margin: 10px;

}

@media ${Devices.iPadPro}
{
  width: 200px;
  margin: 10px;
}
`

const FeedSection = styled.div`
display: flex;
flex-flow: column;
`

const FeedSectionTitle = styled.h1`
  font-size: 20px;
  color: #3c3c3c;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px 0px;
  margin-left: 5px;
  :first-child
  {
    margin-left: 15px;
  }
`
const FeedSectionTitleArea = styled.div`
display: flex;
`


const Divider = styled.div`
display: flex;
font-family: 'Source Sans Pro',sans-serif;
margin: 15px 0px;
.line 
{
border-bottom: 1px solid #cecece;
width: 32%;
margin: 0px 10px;
margin-bottom: 17px;

@media ${Devices.Mobile}
{
  width: 26%;
}

@media ${Devices.smallMobile}
{
  width: 22%;
}

}

.text
{
  color: #3c3c3c;
  font-weight: 600;
  font-size: 22px;
  padding: 5px;
  text-transform: uppercase;
}

`




const params = {
  slidesPerView: 5,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1366: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
}
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

    const [next,setNext] = useState(null);
    const [previous,setPrevious] = useState(null);
    const [translate,setTranslate] = useState(0);
    const [translateSmall,setSmallTranslate] = useState(0);

    var size = useWindowSize();
    var setSidebar = useStoreActions(actions => actions.base.setSidebar);
    var sidebar = useStoreState(state => state.base.sidebar);
    
    return (
        <Container onClick={() => setSidebar(false)}>
        <RecentUpdates>
          <div className="recents-title">
            RECENT UPDATES
          </div>
          <div className="navigateCarousel">
          <div className="navigateLeft">
          <box-icon name='left-arrow' onClick={() => {translate == 0 ? null : setTranslate(translate+300)}}></box-icon>
          </div>
          <RecentsBlock>
            <RecentGrid  cover='https://img.freepik.com/free-vector/colorful-geometric-shapes-landing-page-template_23-2148264252.jpg?size=626&ext=jpg' translate={translate}/>
            <RecentGrid cover='https://image.freepik.com/free-vector/colorful-geometric-shapes-wallpaper_23-2148312892.jpg' translate={translate}/>
            <RecentGrid cover='https://image.freepik.com/free-vector/wallpaper-with-geometric-shapes-concept_23-2148310375.jpg' translate={translate}/> 
            <RecentGrid cover='https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg' translate={translate}/>
            <RecentGrid cover='https://image.freepik.com/free-vector/geometric-shapes-background-design_23-2148309522.jpg' translate={translate}/>
          </RecentsBlock>
          <div className="navigateRight">
          <box-icon name='right-arrow' onClick={() => {(size.width < 400 ? (translate == -1200 ? null : setTranslate(translate -300)) : size.width >= 400 && size.width < 768 ? (translate == -1200 ? null : setTranslate(translate -300)) : size.width >= 768 && size.width < 1024 ? (translate == -900 ? null : setTranslate(translate -300)) : size.width >= 1024 && size.width < 1200 ? (translate == -600 ? null : setTranslate(translate -300)) : size.width >= 1200 && size.width < 2000 ? (translate == -300 ? null : setTranslate(translate -300)) : null )}} ></box-icon>
        </div>
          </div>
        </RecentUpdates> 
      <Main>
        <UserSidebar>
        <Widget>
          Widget
        </Widget>

        <Widget>
            Widget
          </Widget>

          <Widget>
            Widget
          </Widget>

          <Widget>
            Widget
          </Widget>
        </UserSidebar>
        <Feed>
        <FeaturedPublishings>
        <div className="featuredTitleArea">
        <div className="featuredTitle">
          Featured Publications
        </div>

        <div className="feedCategories">
        <div className="feedCatIcon">
        <box-icon name='javascript' type='logo' style={{fill:'#ffd54f'}} ></box-icon>
        </div>

        <div className="feedCatIcon">
        <box-icon name='react' type='logo' style={{fill:'#64b5f6'}} ></box-icon>
        </div>

        <div className="feedCatIcon">
        <box-icon name='angular' type='logo' style={{fill:'#e57373'}} ></box-icon>
        </div>

        <div className="feedCatIcon">
        <box-icon name='vuejs' type='logo' style={{fill:'#81c784'}} ></box-icon>
        </div>

        <div className="feedCatIcon">
        <box-icon name='nodejs' type='logo' style={{fill:'#aed581'}} ></box-icon>
        </div>
        <div className="feedCatIcon">
        <box-icon name='sass' type='logo' style={{fill:'#f06292'}} ></box-icon>
        </div>
        </div>
        </div>
          <Style1 cover='https://image.freepik.com/free-vector/gradient-3d-shapes-background_52683-11602.jpg'/>
          <Style1 cover='https://image.freepik.com/free-vector/abstract-background_23-2148039750.jpg'/>
          <Style1 cover='https://image.freepik.com/free-vector/abstract-background_23-2148031884.jpg'/>
          <Style1 cover='https://image.freepik.com/free-vector/design-elements-background-memphis-style_23-2147731201.jpg'/>
          </FeaturedPublishings>

          <Divider>
          <div className="line" />
          <div className="text"> Articles Feed </div>
          <div className="line" />
        </Divider>


          <FeedSection>
           <Style2 cat1='Physical Therapy' cat2='Musculoskeletal' catColor= '#4FC3F7' cover='https://image.freepik.com/free-vector/illustration-with-rocket_1045-566.jpg' />
           <Style2 cat1='Vue' catColor='#81C784' cover='https://image.freepik.com/free-vector/blue-background-with-colorful-shapes-flat-design_23-2147646159.jpg' />
           <Style2 cat1='Angular' catColor='#e57373' cover='https://image.freepik.com/free-vector/colorful-background-with-abstract-shapes_23-2147758169.jpg' />
           <Style2 cat1='Javascript' catColor='#FFD54F' cover='https://img.freepik.com/free-vector/abstract-sales-background-flat-design_23-2148233123.jpg?size=626&ext=jpg' />
           <Style2 cat1='Redux' catColor='#BA68C8' cover='https://cdn.dribbble.com/users/381530/screenshots/4017312/freepik_dribbble_generico.gif' />
          </FeedSection>

          <FeedSection>
            <Style3 cat1='Physical Therapy' cat2='Musculoskeletal' catColor='#4FC3F7' cover='https://image.freepik.com/free-vector/abstract-background-with-colorful-rounded-shapes_23-2147857926.jpg' />
            <Style3 cat1='Vue' catColor='#81C784' cover='https://image.freepik.com/free-vector/abstract-background-with-colorful-stripes-flat-design_23-2147639630.jpg' />
            <Style3 cat1='Angular' catColor='#e57373' cover='https://thumbs.dreamstime.com/z/sports-car-abstract-colorful-spotted-background-differen-different-elements-flat-design-bright-color-39322201.jpg' />
            <Style3 cat1='Redux' catColor='#BA68C8' cover='https://image.freepik.com/free-vector/abstract-new-arrival-background_23-2147884670.jpg' />
          </FeedSection>

          <FeedSection>
            <Style4 cat1='React' catColor='#4FC3F7' cover='https://www.crazyleafdesign.com/blog/wp-content/uploads/2018/02/Colorful-Background-Cover-image.png' />
            <Style4 cat1='Vue' catColor='#81C784' cover='https://img.freepik.com/free-vector/abstract-geometric-modern-circles-background_23-2148282483.jpg?size=626&ext=jpg' />
            <Style4 cat1='Physical Therapy' cat2='Musculoskeletal' catColor='#e57373' cover='https://image.freepik.com/free-vector/geometric-abstract-background_23-2148008023.jpg' />
            <Style4 cat1='Redux' catColor='#9575CD' cover='https://static.vecteezy.com/system/resources/previews/000/664/539/non_2x/trendy-geometric-shapes-memphis-hipster-background-vector.jpg' />
          </FeedSection>

        </Feed>
        <SiteSidebar>
          <Widget>
            Widget
          </Widget>

          <Widget>
            Widget
          </Widget>

          <Widget>
            Widget
          </Widget>

          <Widget>
            Widget
          </Widget>
        </SiteSidebar>
        </Main>
        </Container>

    )
}

export default Home;