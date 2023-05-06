import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    text-align: center;
    box-shadow: 5px 5px 5px;
    z-index: 2;
`

function Announcements() {
  return (
    <Container>
        Super Deeeaaal 50% off buy NOW!!!!!
    </Container>
  )
}

export default Announcements
