import React from 'react';
import styled from 'styled-components';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <FullPage>
      <p>程序发生错误:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </FullPage>
  );
}

const FullPage = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #000;
`;

export default ErrorFallback;
