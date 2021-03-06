import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MaterialTable from "material-table";
import { tableIcons } from '../Components/Icons';

export default function Home() {
    
    const url = '/data.json';
    const [games, setGames] = useState({
        data: null,
        error: false,
    })

    useEffect(() => {
        setGames({
            data: null,
            error: false,
        })
        axios.get(url)
        
            .then(response => {
                setGames({
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setGames({
                    data: null,
                    error: true
            })
        })
    }, [url])
    let content = null;
    if(games.error){
         content = <p>There was an error</p>       
    }
    if (games.data) {
        content =
         <div>
            <MaterialTable
                icons={tableIcons}
                title="9ijakids Game List"
                columns={[
                {
                    title: 'S/N',
                    render: rowData => rowData.tableData.id + 1
                },
                {
                    title: 'Game Title',
                    field: 'GameTitle',
                    filtering: false,
                    searchable: false
                },
                {
                    title: 'Game Description',
                    field: 'GameDescription',
                    filtering: false
                    },
                {
                    title: 'Game Image',
                    field: 'GameImage',
                    render: rowData => <img src={rowData.GameImage} alt={rowData.GameTitle} style={{ width: 60, height: 70, borderRadius: '50%' }} />,
                    filtering: false
                },
                {
                    title: 'Topic',
                    field: 'Topic',
                    filtering: false
                },
                {
                    title: 'Group',
                    field: 'Group'
                },
                {
                    title: 'Level',
                    field: 'Level'
                },
                ]}
                data={games.data}
                options={{
                exportButton: true,
                pageSize: 10,
                filtering: true,
                }}
            />
         </div>
    
           console.log(games.data)
    }
    return (
        <div>
            <h1>9ijakids Game List</h1>
            {content}
        </div>
    )
}
