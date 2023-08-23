import * as React from 'react';

export default function CardHeader() {
  return (
    <div className="card">
      <div className="card-header">
      Teach React
      </div>
      <div className="card-content">
          <div className="card-content-div">
            Teach <br /> <span style={{ color: '#8b05fa' }}>how to</span><br /> teach React
          </div>
          <div className="card-content-div-right">
            You only know what you can teach others.
          </div>
          <div className="card-right-inside">
            
          </div>
      </div>
    </div>
  );
}