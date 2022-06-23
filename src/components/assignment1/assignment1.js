import Display from "./display"
import Button from '@mui/material/Button';
import { useState } from "react"
const Assignment1 = () => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])
    const onClick = () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
        setShow(!show)
    }
    return (
        <div>
          <div style={{marginBottom:10}}>
                <h1>Assignment 1(Display API Data)</h1>
                <Button className="btn-full" onClick={onClick} variant="contained">{!show ? "Show Data" : "Hide Data"}</Button>
          </div>
            {show ? <Display data={data} /> : null}
        </div>
    )
}
export default Assignment1;