import React, {useRef} from 'react';

// Components
import WiperCarousel from "../components/WiperCarousel";

import image1 from '../public/images/1.jpeg';
import image2 from '../public/images/2.jpeg';
import image3 from '../public/images/3.jpeg';
import image4 from '../public/images/4.jpeg';

function Index () {
  const data = useRef([
    { title: '', sub: '', image: image1 },
    { title: '', sub: '', image: image2 },
    { title: '', sub: '', image: image3 },
    { title: '', sub: '', image: image4 },
  ])

  return (
    <div>
      <header>header</header>
      <WiperCarousel data={data.current}></WiperCarousel>
    </div>

  )
}

export default Index;
