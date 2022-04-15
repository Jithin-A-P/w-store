import { Facebook, Instagram, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocailContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`

const Center = styled.div`
    flex: 1;
    padding-top: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;    
`

const Right = styled.div`
    flex: 1;
    padding-top: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
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
            <SocailContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
            </SocailContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fasion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room/> 622 Dixie Path, South Tobinchester 98336</ContactItem>
            <ContactItem><Phone/> +91 1234 567 890</ContactItem>
            <ContactItem><MailOutline/> contact@wstore.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer