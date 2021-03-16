import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
  min-width: 20%;
`;

const Thumbnail = styled.img`
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
  max-width: 100%;
`;


const Home = ({ onClick }) => {
  const results = Object.values(localStorage).filter(item => item?.id);

  return (
    <div>
      <ResultContainer>
        {results?.map(item => {
          const show = JSON.parse(item);

          return (
            <StyledLink key={show.id} onClick={() => onClick(show)} to="/show">
              <Thumbnail alt={show?.name} src={show?.image?.medium} />
            </StyledLink>
          );
        })}
      </ResultContainer>
    </div>
  );
};

export default Home;
