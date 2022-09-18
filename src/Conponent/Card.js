
import { Checkbox, Paper, Switch } from '@material-ui/core'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'

const Cards = (props) => {
 
    const createTeam = (member) => {
        let checkMember = props.team.find((cur) => cur.id == member.id)
        if (checkMember == undefined) {
            props.setTeam((pre)=>[...pre,member])
        }else{
            props.setTeam(props.team.filter((cur)=>cur.id!=member.id))
        }
    }
    return (
        <Paper style={{ width: '300px', border: "1px solid black", height: '300px', marginTop: "10px",display:"flex",justifyContent:"space-between",alignContent:"center" }} >
            
            <div style={{}}>
                <h6> #{props.id}</h6>
                <h5>Fist-Name-<span style={{}}>{props.first}</span></h5>
                <h5>Last Name -<span style={{}}>{props.last}</span></h5>
                <h5>Gender-<span style={{}}>{props.gender}</span></h5>
                     <h5>Domain-<span style={{}}>{props.domain}</span>
                </h5>
                <h5 >Email-Id-<span style={{ fontSize: "10px" }}>{props.email}</span></h5>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <Checkbox disabled={!props.available} onClick={() => createTeam(props)} />
            <img src={props.imgs} alt="loarding-img"  style={{width:"100px"}}/>
            </div>
        </Paper>
    )
}
export default Cards