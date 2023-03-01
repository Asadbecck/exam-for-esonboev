import { List } from "@mui/material";
import Moli from "../components/UsesTate/useState";
// import Text from "../components/text/text"
export const LinkList = [
    {
       title:"Inbox",
       to:"/create",
       element:<Moli/>,
       id:1 
    },
    {
        title:"Table",
        to:"/card",
        element: <Moli/>,
        id:2
    },
    {
        title:"Hello",
        to:"/hello",
        element:<List/>,
        id:3
    }
]