import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import SearchResult from "./components/SearchResults/SearchResult";


export const BASE_URL = "http://localhost:9000";



const App =  () => {

  const [foodItems, setFoodItems] = useState([]);
  const [type, setType] = useState('All');
  const [search, setSearch] = useState('');


  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL);
      if(res?.data){
        setFoodItems(res.data )
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [type, search]);



console.log(type);

  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo_img">
        <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search_bar">
          
          <input type="text" placeholder="Search Food..." onChange={(e) => setSearch(e.target.value)} />
        </div>


      </TopContainer>

      <FilterCont>
        
      <div className="tag_btn" onClick={(e) => setType(e.target.textContent)}>
  All
</div>

<div className="tag_btn" onClick={(e) => setType((e.target.textContent))}>
  Breakfast
</div>

<div className="tag_btn" onClick={(e) => setType(e.target.textContent)}>
  Lunch
</div>

<div className="tag_btn" onClick={(e) => setType(e.target.textContent)}>
  Dinner
</div>

      </FilterCont>

    <SearchResult items={foodItems} type={type} title={search} />

    </Container>
    
    
    </>
  );
};

export default App;


export const Container = styled.div`
max-width: 1440px;
padding: 85px 120px 31px 120px;
`;
export const TopContainer = styled.div`
height: 100px;
display: flex;
justify-content: space-between;


.logo_img{
  width: 185px;
  height: 39px;
  
}
.search_bar{
 input{
  background-color: transparent;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder {
    color: white;
  }
 }  

}

`;

export const FilterCont = styled.div`

flex: 1; /* Expand to take remaining space */
display: flex;
gap: 20px;
margin-bottom: 20px;
justify-content: center; /* Center horizontally */
align-items: center; /* Center vertically */
.tag_btn{
  background-color:  #FF4343;
height: 31px;
cursor: pointer;
color: #FFFFFF; 
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
padding: 6px 12px 6px 12px;
border-radius: 3px solid #FF4343;
}


`;

export const MenuCont = styled.div`
height: 783px;
top: 2px;
background: #0D0D0DC2;

`