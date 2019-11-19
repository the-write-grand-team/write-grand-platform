import styled from 'styled-components';
import { Devices } from '../../../Global/responsive';

const StyledCard4 = styled.div`
display: flex;
box-shadow: 0px 0px 4px 1px #E0E0E0;
width: 500px;
min-height: 200px;
margin: 10px auto;
border-radius: 5px;
font-family: 'Source Sans Pro',sans-serif;

@media ${Devices.Mobile}
{
    width: 389px;
}

@media ${Devices.smallMobile}
{
    width: 349px;
    height: 250px;
}
.style4Cover 
{
  width: 50%;
  background-position: center;
  background-size: cover;
  border-radius: 0px 5px 5px 0px;
  min-height: 200px;

  @media ${Devices.smallMobile}
{
    height: 250px;
}
}

.style4Info 
{
 display: flex;
 flex-flow: column;
 width: 50%;

 .style4Title
 {
   font-size: 22px;
   color: #3c3c3c;
   font-weight: 600;
   margin: 20px 20px;
   margin-bottom: 10px;
   width: 200px;
   overflow: hidden;

   @media ${Devices.Mobile}
    {
    width: 150px;
    font-size: 18px;
    font-weight: 600;
    }   

    @media ${Devices.smallMobile}
        {
        width: 140px;
        font-size: 16px;
        height: 120px;
        }
 }


.categoryArea 
{
  display: flex;
  width: 155px;
  flex-wrap: wrap;

  .category 
  {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    margin-left: 20px;
  }

  .catArrow
    {
      margin: auto;
      box-icon 
      {
        fill: #999999;
        height: 15px;
        width: 15px;
      }

      @media ${Devices.smallMobile}
      {
        margin: auto;
      }
      @media ${Devices.Mobile}
      {
        margin: auto;
      }
    }

    @media ${Devices.Mobile}
    {
      width: 150px;
    }

    @media ${Devices.smallMobile}
    {
      width: 150px;
    }
}

  .style4Excerpt
  {
    font-size: 16px;
    color: #999999;
    width: 200px;
    margin: 10px 20px;
    height: 60px;
    overflow: hidden;

    @media ${Devices.Mobile}
    {
    width: 130px;
    font-size: 16px;
    margin-top: 15px;
    } 

    @media ${Devices.smallMobile}
    {
    width: 130px;
    font-size: 14px;
    margin-top: 10px;
    height: 85px;
    }
  }


 .style4Meta
 {
   display: flex;
   margin-left: 20px;
   margin-top: 10px;
   width: 200px;
   margin-bottom: 10px;

   @media ${Devices.Mobile}
    {
        margin-top: 25px;
        width: 150px;
    } 

    @media ${Devices.smallMobile}
    {
        margin-top: 10px;
        width: 140px;
        margin-bottom: 10px;
    } 
   .style4Author
   {
    font-size: 16px;
    color: #999999;
   }

   .bookmark
   {
     margin-left: auto;
     margin-top: 4px;
     box-icon 
     {
       height: 20px;
       width: 20px;
       fill: #F06292;
     }
   }
 }
}

`

const Style4 = (props) => {
    return(
        <StyledCard4>
            <div className="style4Info">
            <div className="style4Title">
            Learning How To tailor Pitch Perfect UIs and UX's In Just 90 Days SO Guys Have A Blast
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
            <div className="style4Excerpt">
              Hello This is just a random excerpt saying that you are so awesome and we love you even if you think you are lacking in any department
            </div>
            <div className="style4Meta">
              <div className="style4Author">
                Afzaal Afridi
              </div>
              <div className="bookmark">
              <box-icon name='bookmark'></box-icon>
              </div>
            </div>
            </div>
            <div className="style4Cover" style={{backgroundImage: `url(${props.cover})`}}/>
          </StyledCard4>
    )
}

export default Style4;