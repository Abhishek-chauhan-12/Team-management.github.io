const initalState = {
    team: []
}

export default function reducers(state =initalState, action) {

    switch (action.type) {

        case "CREATE_TEAM": {
            let tempTeam = state.team
            tempTeam.push({
                teamName: action.payload.teamName,
                teamMembers: action.payload.teamMembers,
            })
            return {
                team:tempTeam
            }
        }
        default: return state
    }
}