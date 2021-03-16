import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 100%;
`;

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.5rem;
  width: 100%;
`;

const SearchInput = styled.input`
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  width: 50%;
`;

const StyledLink = styled(Link)`
  min-width: 20%;
`;

const Thumbnail = styled.img`
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

const Search = ({ onChange, onClick, results }) => (
  <SearchContainer>
    <SearchInput onChange={({ target }) => onChange(target.value)} type="search" />

    <ResultContainer>
      {results?.map(({ show }) => (
        <StyledLink key={show.id} onClick={() => onClick(show)} to="/show">
          <Thumbnail alt={show?.name} src={show?.image?.medium} />
        </StyledLink>
      ))}
    </ResultContainer>
  </SearchContainer>
);

export default Search;
