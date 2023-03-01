import React from 'react'
import { Button } from 'react-bootstrap'
// import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkList } from "../../link/link"
export default function MenuPanel() {
  return (
    <>

      {LinkList.map((val) => {
        return (
          <>
            <ol style={{
              textDecoration: "none",
            marginBottom:"-4px",
            marginLeft:"-40px",
          }}>
              <Link style={{
              padding: "10px 30px",
                textDecoration: "none",
                backgroundColor: "black",
                color: "white", 
                textAlign: "center",
                display: "inline-block",
                borderRadius: "7px"
              }} to={val.to}>
                <Button style={{}} to={val.to} variant="">{val.title}</Button>
              </Link>
            </ol>
          </>
        )
      })}





    </>
  )
}
