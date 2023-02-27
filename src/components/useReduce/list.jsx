import React from "react"
import { NameList } from "../../../src/Card/card"
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap"

export default function list() {
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
          {
            NameList.map(val => {
              return (
                <Col xs={3} className="mt-5">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img style={{width:"287px", height:"250px"}} variant="top" src={val.img} />
                    <Card.Body>
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Text>
                        {val.info}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{val.price}</ListGroup.Item>
                      <ListGroup.Item>{val.proccessor}</ListGroup.Item>
                      <ListGroup.Item>Best item for this price</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}
