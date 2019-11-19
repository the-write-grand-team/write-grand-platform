import styled from 'styled-components';
import { Devices } from '../../../Global/responsive';

const StyledCard1 = styled.div`
display: flex;
box-shadow: 0px 0px 6px 1px #E0E0E0;
border-radius: 5px;
margin: 10px auto;
width: 500px;
max-width: 100%;
font-family: 'Source Sans Pro',sans-serif;

@media ${Devices.Mobile}
{
  margin: 10px auto;
  width: 387px;
}

@media ${Devices.smallMobile}
{
  margin: 10px auto;
  width: 340px;
}


.picture 
{
  display: flex;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: 95% 75%;
  margin-left: auto;
  border-radius: 0px 5px 5px 0px;
  max-width: 100%;

  @media ${Devices.Mobile}
{
  width: 150px;
  height: 150px;
}

@media ${Devices.smallMobile}
{
  width: 121px;
  height: 121px;
}
}

.info
{
  display: flex;
  flex-flow: column;

  .bookmark 
  {
    color: white;
    margin-left: auto;
    position:absolute;
    margin-left: 410px;
    background-color: #F06292;
    border-radius: 0px 0px 3px 3px;
    padding: 6px;
    cursor: pointer;
    box-icon
    {
        fill: white;
        height: 20px;
        width: 20px;
    }

    @media ${Devices.Mobile}
    {
        margin-left: 300px;
    }

    @media ${Devices.smallMobile}
    {
        margin-left: 275px;
        box-icon
    {
        fill: white;
        height: 14px;
        width: 14px;
    }
    }
  }

  .title 
  {
    color: #3c3c3c;
    font-size: 18px;
    font-weight: 600;
    margin: 10px 10px;
    text-transform: capitalize;
    height: 45px;
    overflow: hidden;
    width: 300px;

    @media ${Devices.Mobile}
    {
    font-size: 16px;
    width: 190px;
    height: 60px;
    margin: 7px 15px;
    }

    @media ${Devices.smallMobile}
    {
      font-size: 14px;
      width: 190px;
      height: 40px;
      margin: 5px 15px;
    }
  }

  .excerpt 
  {
    font-size: 14px;
    color: #999999;
    margin: 5px 10px;
    width: 300px;
    height: 33px;
    overflow: hidden;
    @media ${Devices.Mobile}
    {
      font-size: 14px;
      width: 190px;
      height: 40px;
      margin: 0px 15px;
    }

    @media ${Devices.smallMobile}
    {
      font-size: 12px;
      width: 190px;
      height: 30px;
      margin: 0px 15px;
    }
  }

  .meta 
  {
    display: flex;
    margin: 10px 5px;
    margin-bottom: 0px;
    color: #999999;
    fill: #999999;
    font-size: 14px;
    @media ${Devices.Mobile}
    {
    font-size: 14px;
    width: 200px;
    margin: 7px 5px;
    }

    @media ${Devices.smallMobile}
    {
    font-size: 12px;
    width: 200px;
    margin: 9px 5px;
    }
    .author 
    {
      display: flex;
      margin: 0px 10px;
      .authorIcon
      {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq2xF3vH3vE_xi2SiSbcQ_7HBd5ozlz3vyGc_8Z_HHB-bmAOxk');
      
      @media ${Devices.Mobile}
      {
      width: 20px;
      height: 20px;
      }

      @media ${Devices.smallMobile}
      {
      width: 15px;
      height: 15px;
      }
      }

      .authorName 
      {
        line-height: 1.8;
        margin-left: 10px;
        @media ${Devices.Mobile}
        {
          line-height: 1.5;

        }

        @media ${Devices.smallMobile}
        {
          line-height: 1.3;
          font-size: 11px;
        }
      }
    }

    .readingTime 
    {
      display: flex;

      .readingIcon 
      {
        margin-top: 2px;
        box-icon 
        {
            height: 20px;
            width: 20px;
        }
        @media ${Devices.Mobile}
         {
          margin-top: 0px;
          box-icon 
        {
        width: 20px;
        height: 20px;
        }
      }

      @media ${Devices.smallMobile}
         {
          margin-top: 0px;
          box-icon 
        {
        width: 15px;
        height: 15px;
        }
      }
      }

      .readTime 
      {
        margin-left: 5px;
        line-height: 1.8;
        @media ${Devices.Mobile}
      {
        line-height: 1.5;
      }

      @media ${Devices.smallMobile}
      {
        line-height: 1.2;
      }
      }
    }

    .publish 
    {
      display: flex;
      margin: 0px 10px;
      @media ${Devices.Mobile}
        {
          display: none;
        }

        @media ${Devices.smallMobile}
        {
          display: none;
        }
      .publishIcon
      {
        margin-top: 2px;
        box-icon 
        {
            height: 20px;
            width: 20px;
        }
      }

      .publishTime
      {
        margin-left: 5px;
        line-height: 1.8;
      }
    }
  }
}
`

const Style1 = (props) => {
    return(
        <StyledCard1>
            <div className="info">
                <div className="bookmark">
                <box-icon name='bookmark'></box-icon>
                </div>
              <div className="title">
                Learn React JS: From Zero to Hero In just 90 God Damn Days !
              </div>
              <div className="excerpt">
                This is a default excerpt that you should know about because we care alot about you, so YOLO and love you again
              </div>

              <div className="meta">
              <div className="author">
                <div className="authorIcon" />
                <div className="authorName"> Afzaal Afridi</div>
              </div>

              <div className="readingTime">
              <div className="readingIcon">
              <box-icon name='time-five'></box-icon>
              </div>
              <div className="readTime">
                2 Mins
              </div>
              </div>

              <div className="publish">
                <div className="publishIcon">
                <box-icon name='calendar-alt'></box-icon>
                </div>
                <div className="publishTime"> 2 Days</div>
              </div>
              </div>
            </div>
   
            <div className="picture" style={{backgroundImage: `url(${props.cover})`}}/>
          </StyledCard1>
    )
}

export default Style1;