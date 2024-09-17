import { Container } from "@mui/material"
const Layout = (props) => {
    return (
      <Container className="w-5/6 mx-auto px-8 pt-10 ">
          {props.children} 
      </Container>
    )
  }
  
export default Layout
  