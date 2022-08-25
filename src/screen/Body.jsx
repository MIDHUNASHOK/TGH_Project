import React, { useEffect } from "react"
import { Container, Row, Col, Dropdown, Button, Card } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { randomQuoyesApi, tagQuoyesApi } from "../actions/bookmarkActions"
const Body = () => {
  const dispatch = useDispatch()

  const getRandom = useSelector((state) => state.getRandom)
  const {  quote } = getRandom
  const getTag = useSelector((state) => state.getTag)
  const { tag } = getTag
  console.log("tag", tag)

  useEffect(() => {
    dispatch(randomQuoyesApi())
    dispatch(tagQuoyesApi())

  }, [dispatch])

  const clickhandler=()=>{
    window.location.reload()
  }

  return (
    <div>
      <Container>
        <Row
          style={{ textAlign: "center" }}
          className="d-flex justify-content-center mt-5"
        >
          <Col md={6}>
            <Card className="bg-danger rounded ">
              {quote ? <Card.Body>{quote.content}
              <p class="text-light bg-dark">-{quote.author}-</p></Card.Body> : "no data"}
            </Card>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {tag &&
                  tag.map((data, index) => (
                    <Dropdown.Item key={index}>{data.name}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button
              variant="success rounded-pill mt-5"
              onClick={clickhandler }
            >
              Next Quotes
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Body
