import styled from 'styled-components';
import { Devices } from '../../../Global/responsive';
const StyledCard2 = styled.div`
display: flex;
flex-flow: row;
box-shadow: 0px 0px 4px 1px #E0E0E0;
border-radius: 5px;
margin: 10px auto;
max-width: 500px;
width: 100%;
font-family: 'Source Sans Pro',sans-serif;
color: #3c3c3c;
min-height: 200px;

@media ${Devices.Mobile}
{
  max-width: 390px;
  margin: 10px 7px;
}

@media ${Devices.smallMobile}
{
    width: 340px;
}

.style2Cover 
{
  background-size: cover;
  background-position: 48%;
  width: 150px;
  min-height: 200px;
  border-radius: 5px 0px 0px 5px;
  @media ${Devices.smallMobile}
{
    width: 100x;
}
}

.style2Info
{
  display: flex;
  flex-flow: column;
  margin-left: 20px;

  .style2TitleArea  
  {
      display: flex;
  .style2Title
  {
    margin: 10px 0px;
    font-size: 18px;
    font-weight: 600;
    max-width: 300px;
    width: 100%;
    color: #3c3c3c;
    line-height: 23px;
    overflow: hidden;
    height: 45px;
    text-transform: capitalize;

    @media ${Devices.Mobile}
    {
      font-size: 16px;
      max-width: 200px;
      height: 65px;
      line-height: 21px;
      margin: 5px 0px;

    }

    @media ${Devices.smallMobile}
    {
      font-size: 14px;
      max-width: 200px;
      height: 60px;
      line-height: 20px;
    }
  }

  .style2Bookmark
  {
      margin-right: 5px;
    box-icon 
    {
        height: 20px;
        width: 20px;
        fill: #F06292;
        margin-top: 37px;
    }
  }

}
  .categoryArea
  {
    display: flex;
    flex-wrap: wrap;
    .category 
    {
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 5px;


        :nth-child(2)
        {
          margin-left: 10px;
          @media ${Devices.Mobile}
          {
            margin-left: 0px;
          }

          @media ${Devices.smallMobile}
          {
            margin-left: 0px;
          }
        }
    }

    .catArrow
    {
      margin: 0px 3px;
      box-icon 
      {
        fill: #999999;
        height: 15px;
        width: 15px;
      }
    }
    @media ${Devices.Mobile}
          {
            flex-wrap: nowrap;
            width: 200px;
          }

          @media ${Devices.smallMobile}
          {
            margin-left: 0px;
          }

  }

  .style2Excerpt
  {
    font-size: 14px;
    color: #999999;
    margin: 0px 0px;
    max-width: 280px;
    width: 100%;
    height: 35px;
    overflow: hidden;

    @media ${Devices.Mobile}
    {
      max-width: 200px;
      font-size: 14px;
      height: 35px;
      overflow: hidden;
    }

    @media ${Devices.smallMobile}
    {
      max-width: 200px;
      font-size: 14px;
      height: 38px;
      overflow: hidden;
    }
  }

  .style2Meta
  {
    display: flex;
    flex-flow: column;
    max-width: 280px;
    width: 100%;
    margin: 10px 0px;
    height: 55px;
    @media ${Devices.Mobile}
    {
      max-width: 210px;
      font-size: 14px;
      height: 45px;
    }

    .style2Author
    {
      font-size: 14px;
      color: #999999;
      text-transform: capitalize;
      @media ${Devices.Mobile}
    {
      font-size: 14px;
      font-weight: 600;
    }
    }

    .style2Time
    {
      display: flex;
      margin: 10px 0px;
      .style2TimeIcon
      {
        box-icon 
        {
          height: 20px;
          width: 20px;
          fill: #999999;

        }
      }

      .style2ReadingTime
      {
        color: #999999;
        margin-left: 5px;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}
`

const Style2 = (props) => {
    return(
        <StyledCard2>
            <div className="style2Cover" style={{backgroundImage: `url(${props.cover})`}}/>
            <div className="style2Info">
            <div className="style2TitleArea">
            <div className="style2Title">
                How To Become Expert At Freelancing in Just 90 Freaking Days !
              </div>
              <div className="style2Bookmark">
              <box-icon name='bookmark'></box-icon>
              </div>
            </div>
            <div className="categoryArea">
            <div className="category" style={{color: `${props.catColor}`}}>
              {props.cat1}
            </div>
            {
              props.cat2 ?
            (
              <div className="catArrow">
            <box-icon name='grid-small'></box-icon>
            </div>
            )
            : null
            }
            <div className="category" style={{color: `${props.catColor}`}}>
              {props.cat2}
            </div>
            </div>
              <div className="style2Excerpt">
                This is just a general excerpt of what you might call a good writing skill that we all see and admire
              </div>
              <div className="style2Meta">
                <div className="style2Author">
                Afzaal Afridi
                </div>
                <div className="style2Time">
                  <div className="style2TimeIcon">
                  <box-icon name='time-five'></box-icon>
                  </div>
                  <div className="style2ReadingTime">
                    2 Mins
                  </div>
                </div>
              </div>
            </div>
          </StyledCard2>
    );
}

export default Style2;