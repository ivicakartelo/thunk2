import * as React from 'react';

export default function CardCSSFlexOverlap() {
  return (
<div class="flex-container">
  <div class="left">
    <div class="item overlap">
      <img src={process.env.PUBLIC_URL + 'assets/images/1.jpg'} alt={'image 1'} />
    </div>
    <div class="item overlap shifted">
      <img src={process.env.PUBLIC_URL + 'assets/images/2.jpg'} alt={'image 2'} />
  </div>
  </div>
  <div class="middle">
    <img src={process.env.PUBLIC_URL + 'assets/images/7.jpg'} alt={'image 7'} />
  </div>
  <div class="right">
    <div class="item overlap">
      <img src={process.env.PUBLIC_URL + 'assets/images/3.jpg'} alt={'image 3'} />
    </div>
    <div class="item overlap shifted">
      <img src={process.env.PUBLIC_URL + 'assets/images/4.jpg'} alt={'image 4'} />
    </div>
  </div>
</div>
  )
}