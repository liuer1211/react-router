import React from 'react'

import './about.css'

const title= '123'
const m1='123'
const m2='123'
const title1= '123'
const chapter= '123'
const title2= '123'
const p1= '123'
const p2= '13'

// export default function About() {
//   return <div>{title}</div>
// }

export default class About extends React.Component {
  render() {
    return (
        <div className='about-main'>
          <div className='about-box'>
            <div className='about-tit'>{title}</div>
            <div className='about-introduce'>
              <div>{m1}&nbsp;&nbsp;&nbsp;&nbsp;{m2}</div>
              <p>{title1}</p>
            </div>
            <div className='about-chapter'>{chapter}</div>
            <div className='about-cen'>
              <div className='about-model centre'>
                <p>{title2}</p>
              </div>
              <div className='about-model left'>
                <p>{p1}</p>
              </div>
              <div className='about-model right'>
                <p>{p2}</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
