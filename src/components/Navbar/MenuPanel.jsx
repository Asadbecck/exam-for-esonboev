import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkList } from "../../link/link"
export default function MenuPanel() {
  return (
    <>
      <Container>
        <Row>
          {LinkList.map((val) => {
            return (
              <>
                <Link to={val.to}>
                  {val.title}
                </Link>
              </>
            )
          })}





        </Row>
      </Container>

    </>
  )
}
