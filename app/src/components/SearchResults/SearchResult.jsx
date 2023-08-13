import styled from "styled-components";
const SearchResult = ({ items,  type, title }) => {
  
  let filteredItems = [...items]; // Create a copy of the original items array
  const lowercaseType = type.toLowerCase(); 
  const lowercaseTitle = title.toLowerCase(); 
  console.log(items);
  console.log(title);
  if (type !== "All") {
    
    filteredItems = items.filter((item) => item.type === lowercaseType);
  
  }

  if (title !== '') {
    filteredItems = items.filter((item) => item.name.toLowerCase().startsWith(lowercaseTitle));
  }
  
  return (
  <Container>
    <ItemsCont>

    {filteredItems.map((item, index) => (
          <Card key={index}>
            <img src={`http://localhost:9000${item.image}`} alt="item_pic"  className="item_img"/>
            <div className="desc">
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </div>
            <Button>${item.price}.00</Button>
          </Card>
        ))}
      

    </ItemsCont>
  </Container>

  );
};

const Container= styled.div`
background-image: url("./bg.png");
height: 500px;
display: flex;
justify-content: center;
top: 2px;
align-items: center; 
@media (max-width: 768px) {
  height: auto;
}

`
const ItemsCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px; /* Adjust the gap as needed */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

`
const Card = styled.div`
width: 340px;
display: flex;
flex-direction: row;
gap: 10px;
height: 167px;
border-radius: 19px;
position: relative;
background: linear-gradient(
  135deg,
  #98f9ff 0%,
  rgba(255, 255, 255, 0) 100%
);
border: 0.66px solid;

transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Example: Scale up by 5% on hover */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Example: Add a box shadow on hover */
    cursor: pointer;
  }
border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%); /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;





.item_img{
width: 133px;
height: 133px;
top: 7px;
left: 13px;


}
.desc{
  width: 168px;
height: 86px;
top: 16px;
left: 163px;
margin-top: 10px;
display: flex;
flex-direction: column;
gap: 8px;


}
.desc p {
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  
}
.desc h4 {
font-size: 16px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
}



`
const Button = styled.div`
width: 62px;
  height: 25px;
  padding: 4px 6px;
  border-radius: 5px;
  background: #ff4343;
  color: #ffffff;
  position: absolute;
  bottom: 10px;
  right: 10px;


`
export default SearchResult;

