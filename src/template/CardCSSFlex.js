import * as React from 'react';

export default function CardCSSFlex() {
  return (
<div class="flex-container">
  <div className="flex-item">Teach <br /> <span style={{ color: '#8b05fa' }}>how to</span><br /> teach React</div>
  <div className="flex-item-right">You only know what you can teach others.</div>
</div>
  )
}