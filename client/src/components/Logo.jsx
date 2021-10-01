import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <img src={logo} alt="" width="50" height="50" />
                <label>cda_</label>
            </Wrapper>
        )
    }
}

export default Logo