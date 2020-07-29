import React, { Component } from 'react'
import Head from 'next/head'

import { connect } from 'react-redux'

class IndexPage extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  render() {
    if (!this.state.isLoaded) {
      console.log('Load Data')
      this.props.loadData()
      this.setState({
        ...this.state,
        isLoaded: true
      })
    }

    const data = this.props.pokemons ? this.props.pokemons : []
    console.log('data', data, data.length)
    return data.length && (
      <>
        <h1>Hello World</h1>
      </>
    )
  }
}

export default IndexPage