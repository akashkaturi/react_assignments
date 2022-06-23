import React from 'react'
import { td } from './data'
import Table2 from './table'
import Button from '@mui/material/Button';
import { useState } from 'react'
const Assignment3 = (props) => {
    const [data, setData] = useState(td)
    const sortByName = () => {
        const sorted = [...data].sort((a, b) => {

            return a["name"].toLowerCase() > b["name"].toLowerCase() ? 1 : -1;
        });
        setData(sorted);
    }
    const sortByAge = () => {
        const sorted = [...data].sort((a, b) => {

            return a["age"] < b["age"] ? 1 : -1;
        });
        setData(sorted);
    }
    return (
        <div>
           <h1>
            Assignment 3
           </h1>
           <div className='list'>
                <Button className="btn-full" onClick={sortByName} variant="contained">Sort by Name</Button>
                <Button className="btn-full" onClick={sortByAge} variant="contained">Sort by Age</Button>
           </div>
            <Table2 data={data} />
        </div>

    )
}

export default Assignment3