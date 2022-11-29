import React, {useRef} from 'react';

// Components
import WiperCarousel from "../components/WiperCarousel";

import image1 from '../public/images/1.jpeg';
import image2 from '../public/images/2.jpeg';
import image3 from '../public/images/3.jpeg';
import image4 from '../public/images/4.webp';

function Index () {
  const data = useRef([
    { title: 'Tower Bridge', sub: 'London, England', image: image1.src },
    { title: 'Big Ben', sub: 'London, England', image: image2.src },
    { title: 'London Eye', sub: 'London, England', image: image3.src },
    { title: 'Eiffel Tower', sub: 'Paris, France', image: image4.src },
  ])

  return (
    <div>
      <header>header</header>
      <WiperCarousel data={data.current}></WiperCarousel>
    </div>

  )
}

export default Index;
