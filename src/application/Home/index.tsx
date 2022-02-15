import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, selectorName } from 'store/homeSlice';

import { Title, LogoImg } from './style';
const Home = props => {
  const dispatch = useDispatch();
  const name = useSelector(selectorName);
  const value: unknown = {};
  const handleClick = () => {
    dispatch(changeName('home-change-name'));
  };
  const handleClickError = () => {
    // throw new Error('react 报错了');
  };
  return (
    <div className="title">
      <Title color={'blue'}>
        <div className="p-title">
          <span>$100</span>商品名称
        </div>
      </Title>
      <button onClick={handleClickError}>点击错误日志</button>
      <LogoImg />
      <button onClick={handleClick}>点击改变</button>
    </div>
  );
};

Home.whyDidYouRender = true;

export default Home;
