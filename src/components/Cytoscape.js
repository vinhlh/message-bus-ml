import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cytoscape from 'cytoscape'
import dagre from 'cytoscape-dagre'

import { parse } from '../parser'

cytoscape.use(dagre)

const configs = {
  elements: [],
  style: [
    {
      selector: 'node',
      style: {
        'border-width': 2,
        'border-color': '#0faffd',
        'background-color': '#fff',
        label: 'data(id)',
        shape: 'round-rectangle',
        'text-valign': 'center',
        'text-halign': 'center',
        'text-opacity': 1,
        opacity: 1,
        'text-outline-color': 'white',
        'text-outline-opacity': 1,
        'text-outline-width': 0.75,
        width: 'label',
        padding: 15,
      },
    },
    {
      selector: 'node[class="queue"]',
      style: {
        'border-color': '#15d568',
      },
    },

    {
      selector: 'edge',
      style: {
        width: 2,
        'line-color': '#848484',
        'target-arrow-color': '#848484',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
      },
    },

    {
      selector: ':parent',
      css: {
        padding: 20,
        'border-width': 2,
        'border-color': '#0faffd',
        label: 'data(id)',
        shape: 'round-rectangle',
        'text-valign': 'top',
        'text-halign': 'center',
      },
    },

    {
      selector: 'node[class="sns"]',
      css: {
        'border-color': '#0faffd',
        'background-color': '#d1f1fe',
      },
    },
    {
      selector: 'node[class="ses"]',
      css: {
        'border-color': '#15d568',
        'background-color': '#c1f3d7',
      },
    },
  ]
}

const layoutConfigs = {
  name: 'dagre',
  fit: true,
  rankDir: 'LR',
  padding: 20,
}

const Container = styled.div`
  flex: 3;
`

class Cytoscape extends Component {
  cy = null

  componentDidMount() {
    configs.container = this.ref
    this.cy = cytoscape(configs)

    this.mapPropsToNewValues(this.props)

  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps) {
    this.mapPropsToNewValues(nextProps)
  }

  mapPropsToNewValues(props) {
    this.cy.json({ elements: parse(props.input) })
    this.cy.makeLayout(layoutConfigs).run()
  }

  componentWillUnmount() {
    this.cy.destroy()
  }

  getCy() {
    return this.cy
  }

  render() {
    return <Container ref={(ref) => (this.ref = ref)} />
  }
}

Cytoscape.propTypes = {
  input: PropTypes.string,
}

export default Cytoscape
