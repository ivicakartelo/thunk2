import * as React from 'react';

export default function CardCSSFlexOverlap() {
  return (
<div class="grid-container">
  <div class="item left">
    <div class="inner-item">Item 1</div>
    <div class="inner-item">Item 2</div>
  </div>
  <div class="item middle"></div>
  <div class="item right">
    <div class="inner-item">Item 3</div>
    <div class="inner-item">Item 4</div>
  </div>
</div>
  )
}