import React from 'react';

type Props={
    size:number;
}
const DatahubIcon: React.FC<Props> = props => {
  return (
    <svg
          id='odh'
          width={props.size}
          height={props.size}
          viewBox='0 0 100 100'
          > 
            <defs id='defs'/>
            <g id='ODH'>
              <g>
                <path
                  fill="#FFFFFF"
                  d='M35.7,23.2c-0.5,1-1.8,1.2-2.7,0.7c-1-0.5-1.2-1.8-0.7-2.7s1.8-1.2,2.7-0.7C36,21.1,36.3,22.2,35.7,23.2
                  L35.7,23.2z M35,39.2c-1,0.5-2.2,0.3-2.7-0.7c-0.5-1-0.3-2.2,0.7-2.7c1-0.5,2.2-0.3,2.7,0.7C36.3,37.4,36,38.6,35,39.2L35,39.2z
                  M36.3,41.5c2.2-1.2,2.9-4.1,1.7-6.3c-0.9-1.6-2.7-2.4-4.3-2.3l-1.8-3l1.8-3c1.7,0.1,3.5-0.7,4.3-2.3c1.2-2.2,0.5-5.1-1.7-6.3
                  c-2.2-1.2-5-0.5-6.3,1.7c-0.9,1.6-0.8,3.5,0.2,4.9l-1.8,3H25c-0.8-1.5-2.3-2.6-4.2-2.6c-2.6,0-4.6,2-4.6,4.6s2,4.6,4.6,4.6
                  c1.8,0,3.4-1.1,4.1-2.6h3.5l1.8,3c-1,1.4-1.1,3.3-0.2,4.9C31.3,41.9,34.1,42.7,36.3,41.5L36.3,41.5z M20.8,31.8
                  c-1.2,0-2-0.9-2-1.9c0-1.1,0.9-2,2-2c1.2,0,2,0.9,2,2C22.9,31,22,31.8,20.8,31.8z'
                  id='svg'
                />
                <path fill="#FFFFFF" d="M14.7,38.5l4.3,7.6c0.4,0.6,1.1,1,1.8,1h8.8c0.8,0,1.5-0.4,1.8-1.2l1.6-2.8c-1.3-0.2-2.6-0.9-3.5-1.9
                l-1.2,1.9h-6.5l-3.3-5.6l1.2-1.9c-1.4-0.3-2.6-1-3.5-2l-1.7,2.9C14.4,37.1,14.4,37.8,14.7,38.5L14.7,38.5z M14.7,21.3l4.3-7.6
                c0.4-0.6,1.1-1,1.8-1h8.8c0.8,0,1.5,0.4,1.8,1.2l1.6,2.8c-1.3,0.2-2.6,0.9-3.5,1.9l-1.1-1.9H22l-3.3,5.6l1.2,1.9
                c-1.4,0.3-2.6,1-3.5,1.9l-1.7-2.9C14.4,22.6,14.4,21.9,14.7,21.3L14.7,21.3z M44.5,21.3l4.4,7.6c0.4,0.6,0.4,1.4,0,2l-4.4,7.6
                c-0.4,0.7-1.2,1.1-1.9,1h-3.3c0.4-1.2,0.5-2.7,0-4h2.2l3.3-5.7l-3.3-5.6h-2.2c0.5-1.3,0.4-2.7,0-4h3.5
                C43.5,20.2,44.1,20.6,44.5,21.3z"/>
              </g>
            </g>
            <g id="circle">
              <path fill="#FFFFFF" d="M29.8,54.1c-13.5,0-24.5-11-24.5-24.5c0-13.5,11-24.5,24.5-24.5c13.5,0,24.5,11,24.5,24.5
                C54.3,43.1,43.3,54.1,29.8,54.1z M29.8,5.9c-13,0-23.6,10.6-23.6,23.6c0,13,10.6,23.6,23.6,23.6c13,0,23.6-10.6,23.6-23.6
                C53.4,16.5,42.8,5.9,29.8,5.9z"/>
            </g>
        </svg>
  );
}

export default DatahubIcon;
