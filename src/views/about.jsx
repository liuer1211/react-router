import React from 'react'

import './about.css'

const title= '夜灵犀传奇之邪剑黑曜'
const m1='我的马儿子，我永远是你爹爹！'
const m2='---六耳'
const title1= '简介：这江湖沉寂了二十余年，终于被一位少年打破！'
const chapter= '第一回 群雄并起'
const title2= '十年前。。。'
const p1= '夜灵犀说：爱你在心口难开！'
const p2= '苏晚说：那就给老娘闭嘴！'

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
