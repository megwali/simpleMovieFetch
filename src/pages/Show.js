import { useState } from 'react';
import styled from 'styled-components';

const ShowContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: 2rem;
  max-width: 100%;
`;

const Thumbnail = styled.img`
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

const Show = ({ onClick, show }) => {
  const [isAdded, setIsAdded] = useState(localStorage.getItem(show?.id));

  return (
    <div>
      <ShowContainer>
        <Thumbnail alt={show?.name} src={show?.image?.medium} />
        <div>
          <p>{show?.name}</p>
          <h4>{show?.type}</h4>
          <span dangerouslySetInnerHTML={{ __html: show?.summary }} />
        </div>
      </ShowContainer>
      <button onClick={() => {
        setIsAdded(isAdded => !isAdded)
        onClick(show)
        }} style={{ padding: '0.5rem' }}>{isAdded ? 'Remove from the list' : 'Add to watchlist'}</button>
    </div>
  );
};

export default Show;
