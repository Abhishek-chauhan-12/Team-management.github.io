import React, { useEffect, useState } from "react";
import Cards from "./Card";
import Apidata from "../componentData/Apidata"
import { Grid, Typography, Button, Select, MenuItem, Checkbox, } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { create_team } from '../store/action'
import { Link } from 'react-router-dom'
const CommenCards = () => {
    const [page, setPage] = useState(0)
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [rowperPage, setRowPerPage] = useState(20)
    const [team, setTeam] = useState([])
    const [allUsers, setAllUsers] = useState(Apidata)
    const [searchValue, setSearchValue] = useState('')

    const nextPage = () => {
        setPage(prePage => prePage + 1)

    }
    const preViousPage = () => {
        setPage(prePage => prePage - 1)
    }

    const searchFilterButton = (e) => {
        if (searchValue.length > 0) {
            let filterValue = Apidata.filter((user) => user.first_name.toLowerCase().includes(searchValue.toLowerCase()) || user.domain.toLowerCase().includes(searchValue.toLowerCase()))
            setAllUsers(filterValue)
        } else {
            setAllUsers(Apidata)
        }
    }
    const filterpress = (value) => {

        let filterValue = Apidata.filter((user) => (user.domain == value || user.gender == value || user.available == value))
        setAllUsers(filterValue)

    }

    const inputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const createTeam = () => {
        if (team.length) {
            let teamName = window.prompt()
            if (teamName != null) {
                dispatch(create_team({
                    teamName: teamName,
                    teamMembers: team
                }))
                console.log("team create successfully")
            } else {
                window.alert('Team not create')
            }
        } else {
            window.alert('please select at least one member')
        }
    }


    return (
        <>
            <div style={{width:"100%",backgroundColor:"rgb(105,108,205)",height:"18vh" ,display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <div style={{fontSize:"20px"}}>
            <input onChange={(e) => inputChange(e)} style={{height:"30px"}} />
            <Button style={{background:"rgb(91,181,240)"}} onClick={searchFilterButton}>Search</Button>
            </div>    
           
                <Button style={{background:"rgb(91,181,240)"}} onClick={() => createTeam()}>Create Team </Button>
                <Link style={{background:"rgb(91,181,240)",fontSize:"15px",listStyle:"none",textDecoration:"none",height:"30px",width:"150px",borderRadius:"10px",paddingTop:"10px"}} to='/teams'> Teams Details</Link>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '18%' ,backgroundColor:"rgb(55,51,156)",marginRight:"10px",color:"white"}}>
                    <Typography variant="h4">Gender</Typography>
                    <ul style={{ listStyle: 'none', textAlign: 'start' }}>
                        {['Male', 'Female', 'Bigender'].map((gen) => {
                            return (
                                <li style={{ cursor: 'pointer', marginTop: 10 }} onClick={() => filterpress(gen)}>{gen}</li>
                            )
                        })}
                    </ul>
                    <Typography variant="h4">Domain</Typography>
                    <ul style={{ listStyle: 'none', textAlign: 'start' }}>
                        {['Finance', 'IT', 'Management', 'Sales', 'UI Designing', 'Business Development'].map((gen) => {
                            return (
                                <li style={{ cursor: 'pointer', marginTop: 10 }} onClick={() => filterpress(gen)}>{gen}</li>
                            )
                        })}
                    </ul>
                    <Typography variant="h4">Available</Typography>
                    <div style={{display:'flex',marginLeft:40}}> 
                        <p>Available</p>
                        <Checkbox onChange={(e) => filterpress(e.target.checked)} />
                    </div>

                </div>
                <Grid container spacing={1} style={{ width: "80%" }} >
                    {
                        allUsers && allUsers.slice(page * rowperPage, page * rowperPage + rowperPage).map((cur) => {
                            return (
                                <Grid item lg={3} md={4} sm={4}>
                                    <Cards team={team} setTeam={setTeam} id={cur.id} first={cur.first_name} last={cur.last_name} imgs={cur.avatar} gender={cur.gender} email={cur.email} domain={cur.domain} available={cur.available} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>

            <div style={{ position: 'absloute', bottom: 0, margin: "20px" }}>
                <Button variant="contained" style={{ marginRight: "20px" }} onClick={() => preViousPage()} >Previous</Button>
                <Button variant="contained" disabled={allUsers.length <= page * rowperPage + rowperPage ? true : false} onClick={() => nextPage()}>next</Button>
            </div>
        </>


    )
}
export default CommenCards