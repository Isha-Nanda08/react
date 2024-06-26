import styled from "styled-components";
import Navbar from "../components/navbar"
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive"

const Container=styled.div`
    
`

const Title=styled.h1`
    margin: 20px;
`
const Filter=styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})}
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
    /* margin: 20px; */
`
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}
`
const Select=styled.select`
    padding: 10px;
    margin: 20px;
    ${mobile({margin:"10px 0px"})}

`
const Option=styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
         <FilterContainer>
            <Filter><FilterText></FilterText>Filter Products:
            <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
                <Option>Pink</Option>
                <Option>Grey</Option>
                
            </Select>
            <Select>
                <Option disabled selected>Size</Option>
                <Option>XXL</Option>
                <Option>XL</Option>
                <Option>L</Option>
                <Option>M</Option>
                <Option>S</Option>
                <Option>XS</Option>
                <Option>FREE SIZE</Option>
                
                
            </Select>
            </Filter>
            <Filter>Sort Products:<FilterText>
            <Select>
                <Option  selected>Newest</Option>
                <Option>Price(asc)</Option>
                <Option>Price(Desc)</Option>
                
            </Select>
            
            </FilterText></Filter>
         </FilterContainer>
         <Products/>
         <Newsletter/>
         <Footer/>
    </Container>
  )
}

export default ProductList