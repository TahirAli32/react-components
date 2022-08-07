// import React, { useState } from 'react'
import styled from 'styled-components'

const Tabs = () => {

  // const [toggleState, setToggleState] = useState(1)

  return (
    <Container>

      <div className="tabsHeading">
        <div className="tabs activeTab">Tab 1</div>
        <div className="tabs">Tab 2</div>
        <div className="tabs">Tab 3</div>
      </div>
      <div className="tabsContent">
        <div className="content activeContent">
          <h2>Content 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aspernatur, sit in consequuntur beatae earum.</p>
        </div>
        <div className="content">
          <h2>Content 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aspernatur, sit in consequuntur beatae earum.</p>
        </div>
        <div className="content">
          <h2>Content 3</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aspernatur, sit in consequuntur beatae earum.</p>
        </div>
      </div>


    </Container>
  )
}

export default Tabs

const Container = styled.div`
.container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  height: 300px;
  background: #f1f1f1;
  margin: 100px auto 0;
  word-break: break-all;
  border: 1px solid rgba(0, 0, 0, 0.274);
}

.bloc-tabs {
  display: flex;
}
.tabs {

  padding: 15px;
  text-align: center;
  width: 50%;
  background: rgba(128, 128, 128, 0.075);
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.274);
  box-sizing: content-box;
  position: relative;
  outline: none;
}
.tabs:not(:last-child){
  border-right: 1px solid rgba(0, 0, 0, 0.274);
}

.active-tabs  {
  background: white;
  border-bottom: 1px solid transparent;
}

.active-tabs::before {
  content: "";
  display: block;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 2px);
  height: 5px;
  background: rgb(88, 147, 241);
}



button {
  border: none;
  
}
.content-tabs {
  flex-grow : 1;
}
.content {
  background: white;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: none;
}
.content h2 {
  padding: 0px 0 5px 0px;
}
.content hr {
  width: 100px;
  height: 2px;
  background: #222;
  margin-bottom: 5px;
}
.content p {
  width: 100%;
  height: 100%;
}
.active-content {
  display: block;
}
`