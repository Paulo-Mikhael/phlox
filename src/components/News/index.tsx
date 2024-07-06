import styled from "styled-components";
import Picture from "../Picture";
import { DataNews } from "../../data/News";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 381px;
  margin-bottom: 50px;
  
  img{
    width: 100%;
    border-radius: 25px;
  }
  p, h5, h6{
    font-size: 20px;
  }
  h5{
    font-weight: bold;
  }
  h6{
    height: 92px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width:860px){
    width: 100%;
  }
`
export default function News() {

  return (
    <div className="h-[551px] flex flex-col items-center">
      <h3 className="text-[39px] font-bold">
        Recent News
      </h3>
      <h4 className="text-[20px] mb-[25px]">
        There are many variations passages
      </h4>
      <div className="w-full flex justify-evenly flex-wrap overflow-y-scroll">
        {DataNews.map(newsItem => (
          <StyledDiv key={newsItem.id}>
            <Picture
              src={newsItem.imageUrl}
              alt={newsItem.imageAlt ? newsItem.imageAlt : newsItem.imageUrl}
              title={newsItem.imageTitle ? newsItem.imageTitle : newsItem.imageUrl}
            />
            <p className="capitalize">
              {`
              ${newsItem.postDate.toLocaleDateString('default', { month: 'long' })} 
              ${newsItem.postDate.getDate()}, 
              ${newsItem.postDate.getFullYear()}
            `}
            </p>
            <h5>
              {newsItem.postTitle}
            </h5>
            <h6>
              {newsItem.postText.length > 120 ? `${newsItem.postText.slice(0, 120)}...`: newsItem.postText}
            </h6>
          </StyledDiv>
        ))}
      </div>
    </div>
  );
}