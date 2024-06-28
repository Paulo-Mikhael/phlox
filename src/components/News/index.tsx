import styled from "styled-components";
import Picture from "../Picture";
import { news1 } from "../../data/News";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 381px;
  
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
      <div className="w-full flex justify-between">
        {news1.map(newsItem => (
          <StyledDiv>
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