import * as React from 'react';

export default function CardCSSFlexOverlap() {
  return (
<div class="flex-container">
  <div class="left">
    <div class="item overlap">Item 1</div>
    <div class="item overlap shifted">Item 2</div>
  </div>
  <div class="middle"></div>
  <div class="right">
    <div class="item overlap">Item 3</div>
    <div class="item overlap shifted">Item 4</div>
  </div>
</div>
  )
}