import React from 'react'
import Carousel from "react-multi-carousel";
import { bannerData } from '../../constants/data';
import 'react-multi-carousel/lib/styles.css';
import {styled} from '@mui/material';

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

   const Image = styled('img')({
    width: "100%",
    height: 300,
   })

const Banner = () => {
  return (
   <Carousel responsive={responsive} draggable={true}  swipeable={true}
   containerClass="carousel-container"
   autoPlay={true}
   slidesToSlide={1}
    infinite={true}
  >
      
       {
              bannerData.map((data)=>(
               <Image src={data.url} alt='banner' />
              ))

       }
   </Carousel>
  )
}

export default Banner