import { Button, Divider, Box, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const Slide = ( {products} ) => {
   
    
  return (
    <Carousel responsive={responsive}>
    {
        products.map((data)=>(
        
            <img src={data.url} alt={data.title} style={{ width: "100%", height: "300px" }} />            ))

  }
    </Carousel>
  );
};

export default Slide;
