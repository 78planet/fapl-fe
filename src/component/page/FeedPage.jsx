import React from 'react';
import styled from 'styled-components';

const FeedPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FeedPost = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const FeedPage = () => {
    return (
        <FeedPageWrapper>
            <FeedPost>
                <p>첫 번째 포스트</p>
            </FeedPost>
            <FeedPost>
                <p>두 번째 포스트</p>
            </FeedPost>
        </FeedPageWrapper>
    );
};

export default FeedPage;
