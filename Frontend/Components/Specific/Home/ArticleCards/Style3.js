import styled from 'styled-components';
import { Devices } from '../../../Global/responsive';

const StyledCard3 = styled.div`
box-shadow: 0px 0px 4px 1px #E0E0E0;
margin: 10px auto;
border-radius: 5px;
display: flex;
width: 500px;
height: 370px;
flex-flow: column;
font-family: 'Source Sans Pro',sans-serif;
color: #3c3c3c;

@media ${Devices.Mobile}
{
    width: 389px;
}

@media ${Devices.smallMobile}
{
    width: 340px;
    height: 360px;
}
.style3Cover
{
  background-size:cover;
  background-position: center;
  height: 200px;
  width: 500px;
  @media ${Devices.Mobile}
{
    width: 389px;
}

@media ${Devices.smallMobile}
{
    width: 340px;
}
}

  .style3Title
  {
    font-size: 18px;
    font-weight: 600;
    margin: 15px 20px;
    text-transform: capitalize;
    margin-left: 10px;
    @media ${Devices.Mobile}
    {
        font-size: 18px;
    }

    @media ${Devices.smallMobile}
    {
        font-size: 14px;
    }
  }

  .style3Meta
  {
    display: flex;
    .style3Author
    {
      display: flex;
      margin: 15px 15px;
      .style3AuthorAvatar
      {
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background-position: center;
        background-size: cover;
        background-image: url('https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg');
      }

      .style3AuthorName
      {
        margin-left: 15px;
        font-size: 14px;
        line-height: 2.2;
        font-weight:600;
        color: #3c3c3c;

        @media ${Devices.smallMobile}
        {
          font-size: 14px;
          line-height: 2.4;
          margin-left: 10px;

        }
      }
    }

    .bookmark
    {
      margin-left: auto;
      margin-right: 15px;
      margin-top: 20px;
      box-icon 
      {
        height: 25px;
        width: 25px;
        fill: #F06292;

        @media ${Devices.smallMobile}
        {
          height: 20px;
        width: 20px;
        }
      }
    }
  }
   
   .bottomMeta 
   {
    display: flex;
    width: 100%;
    .style3ReadTime
    {
      margin-left: 10px;
      display: flex;
      .style3ReadTimeIcon 
      {
        box-icon 
        {
          height: 25px;
          width: 25px;
          fill: #999999;
        }
      }

      .style3ReadingTime
      {
        margin-left: 10px;
        color: #999999;
        line-height: 1.8;
        font-size: 14px;
      }
    }

 .categoryArea 
 {
   display: flex;
   flex-wrap: wrap;
   margin-left: auto;
    margin-right: 15px;
    .category
    {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.8;

    }

    .catArrow
    {
      margin: 3px 3px;
      box-icon 
      {
        fill: #999999;
        height: 15px;
        width: 15px;
      }
    }

    @media ${Devices.Mobile}
      {
        text-align: right;
        justify-content: flex-end;
      }

      @media ${Devices.smallMobile}
      {
        width: 200px;
        text-align: right;
        flex-wrap: nowrap;
        justify-content: flex-end;

      }
 }

   }
`
const Style3 = (props) => {

    return(
        <StyledCard3>
        <div className="style3Meta">

        <div className="style3Author">
            <div className="style3AuthorAvatar" />
            <div className="style3AuthorName">
              Afzaal Afridi
            </div>
          </div>

          <div className="bookmark">
          <box-icon name='bookmark' ></box-icon>
          </div>
        </div>
        <div className="style3Cover" style={{backgroundImage: `url(${props.cover})`}}/>

        <div className="style3Title"> Learning How To tailor Pitch Perfect UIs and UX's In Just 90 Days SO Guys Have A Blast</div>

        <div className="bottomMeta">
          <div className="style3ReadTime">
            <div className="style3ReadTimeIcon">
            <box-icon name='time-five' ></box-icon>
            </div>
            <div className="style3ReadingTime">
              2 Mins
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
          </div>
        </StyledCard3>
    )
}

export default Style3;