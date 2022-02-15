import styled from 'styled-px2vw';

export const Title = styled.div`
  color: ${props => props.color};
  font-size: 28px;
  .p-title span {
    color: red;
    font-size: 50px;
  }
`;

export const LogoImg = styled.img.attrs({
  src: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98002abb79ac4f648ac0970f3ad88024~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp',
})`
  width: 100px;
`;
