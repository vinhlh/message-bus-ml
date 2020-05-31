import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Cytoscape from './components/Cytoscape'
import InputBox from './components/InputBox'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`

const exampleInput = `
billing-engine > order-placed
order-tracking-service > order-placed, order-updates
customer-worker > customer-registered
`

function App() {
  const [input, setInput] = useState(exampleInput)

  return (
    <>
      <GlobalStyle />
      <Container>
        <InputBox value={input} onChange={setInput} />
        <Cytoscape input={input} />
      </Container>
    </>
  )
}

export default App
