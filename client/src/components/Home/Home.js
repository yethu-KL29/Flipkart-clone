import React, { useEffect } from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import { Box } from '@mui/system';
import { styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Action/productAction';
import Slide from './Slide';

const Ban = styled(Box)({
  padding: '30px',
  backgroundColor: '#EAEAEA',
});

const Home = () => {
  const { products } = useSelector(state => state.getProducts);
  console.log(products)
  const items = products.product
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Ban>
        <Banner />
        <Slide products={items} />
      </Ban>
    </div>
  );
};

export default Home;
