import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [type, setType] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BASE_URL);
        if (res?.data) {
          setFoodItems(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [type, search]);

  return (
    <Container>
      <TopContainer>
        <Logo>
          <img src="/logo.svg" alt="logo" />
        </Logo>
        <SearchBar>
          <input
            type="text"
            placeholder="Search Food..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBar>
      </TopContainer>

      <FilterCont>
        <FilterButton onClick={() => setType('All')}>All</FilterButton>
        <FilterButton onClick={() => setType('Breakfast')}>Breakfast</FilterButton>
        <FilterButton onClick={() => setType('Lunch')}>Lunch</FilterButton>
        <FilterButton onClick={() => setType('Dinner')}>Dinner</FilterButton>
      </FilterCont>

      <SearchResult items={foodItems} type={type} title={search} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  max-width: 185px;
  margin-bottom: 10px;
`;

const SearchBar = styled.div`
  input {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    padding: 0 10px;
    &::placeholder {
      color: white;
    }
  }
`;

const FilterCont = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 5px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilterButton = styled.div`
  background-color: #FF4343;
  height: 31px;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  padding: 6px 12px;
  border-radius: 3px solid #FF4343;
`;

export default App;
