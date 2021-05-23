import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
                <Nav>
                    <Logo />
                </Nav>
        )
    }
}

export default NavBar