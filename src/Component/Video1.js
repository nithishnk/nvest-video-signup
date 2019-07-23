import React, { Component } from 'react'
import '../Component/Video.css'
export default class Video extends Component {
  render() {
    return (
      <div className="container">
      <div id="video-laptop" > <iframe width="560" height="390" src="https://www.youtube.com/embed/YghA3irlrn4" frameborder="0" allowfullscreen
      allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"></iframe> 
                </div>
             </div>
    )
  }
}
