import styled from 'styled-components'
import { categories } from '../data'
import CatergoryItem from './CatergoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
`

const Categories = () => {
  return (
    <Container>
        {
            categories.map(item=>(
                <CatergoryItem item={item}/>
            ))
        }
    </Container>
  )
}

export default Categories