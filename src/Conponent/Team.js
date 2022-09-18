import { Typography,Paper,Grid,} from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Team() {
    const data = useSelector((store) => store)
    console.log("data",data)

    if(data.team.length==0){
        return (
            <Grid>
            <Typography>No Team Found</Typography>
        <Link style={{fontSize:"15px",listStyle:"none",textDecoration:"none",height:"30px",width:"200px",borderRadius:"10px",paddingTop:"10px",marginTop:"30px"}} to='/'> Go to back</Link>

            </Grid>
        )
    }
    return (
        <div >
        <Link style={{fontSize:"15px",listStyle:"none",textDecoration:"none",height:"30px",width:"200px",borderRadius:"10px",paddingTop:"10px",marginTop:"30px"}} to='/'> Go to back</Link>

                {
                    data.team && data.team.map((user) => {
                        return (
                            <>
                                <Typography variant='h3'>{user.teamName}</Typography>
                                <Grid container style={{width:"80%" ,margin:"auto"}} >

                                {
                                    user.teamMembers.map((cur) => {
                                        return (
                                            <Grid iteam lg={3} md={4} sm={6} xm={12}>
                                            <Paper style={{ width: '300px', border: "1px solid black", height: '300px', marginTop: "10px", display: "flex", justifyContent: "space-between", alignContent: "center" }} >

                                                <div style={{}}>
                                                    <h6> #{cur.id}</h6>
                                                    <h5>Fist-Name-<span >{cur.first}</span></h5>
                                                    <h5>Last Name -<span >{cur.last}</span></h5>
                                                    <h5>Gender-<span >{cur.gender}</span></h5>
                                                    <h5>Domain-<span >{cur.domain}</span>
                                                    </h5>
                                                    <h5 >Email-Id-<span style={{ fontSize: "10px" }}>{cur.email}</span></h5>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                    <img src={cur.imgs} alt="loarding-img" style={{ width: "100px" }} />
                                                </div>
                                            </Paper>
                                            </Grid>

                                        )
                                    })
                                    
                                }
                                </Grid>

                            </>

                        )
                    })
                }
                
                </div>

    )
}

export default Team