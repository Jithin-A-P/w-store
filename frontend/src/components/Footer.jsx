import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`


export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                W-Store
            </Logo>
            <Desc>
                Wonderful store where all your fashin and lifestyle products are available at the best possible price and convinence.
            </Desc>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer