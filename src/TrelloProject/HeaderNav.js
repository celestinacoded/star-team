import React from 'react'
import styled from 'styled-components'

const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo />
                <Navigation>
                    <Nav>Sign In</Nav>
                    <Button>Sign Up</Button>
                </Navigation>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const Button = styled.button``;


const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
color: black;
`;
const Wrapper = styled.div``;
const Logo = styled.img``;
const Navigation = styled.div``;
const Nav = styled.div``;
