import { useState } from "react"

function Controls({ votes, members, controlOptions, setControlOptions }){
    const voteTypes = votes?.reduce((acc, elem) => acc.includes(elem.votable_type) ? acc : [...acc, elem.votable_type], [])
    const questionTypes = votes?.reduce((acc, elem) => acc.includes(elem.question) ? acc : [...acc, elem.question], [])
    const parties = members?.reduce((acc, elem) => acc.includes(elem.party) ? acc : [...acc, elem.party], [])
    const states = members?.reduce((acc, elem) => acc.includes(elem.state) ? acc : [...acc, elem.state], []).sort((a,b)=> a.localeCompare(b))
    
    
    function handleChange(e){
        setControlOptions({...controlOptions, [e.target.name]: e.target.value})
    }
    
    // const questions= votes && votes.length >0 ? votes?.map(vote=> vote.question) : []
    // const questions= votes && votes.length >0 ? 'ok' : 'null' 

    return(
        <>
            <select name='voteType' value={controlOptions.voteType} onChange={handleChange}>
                <option value=''>(Select)</option>
                {voteTypes.map(type => {
                    return <option value={type} key={type}>{type}</option>
                })}
            </select>

            <select name='questionType' value={controlOptions.questionType} onChange={handleChange}>
                <option value=''>(Select)</option>
                {questionTypes.map(type => {
                    return <option value={type} key={type}>{type}</option>
                })}
            </select>

            <select name='party' value={controlOptions.party} onChange={handleChange}>
                <option value=''>(Select)</option>
                {parties.map(type => {
                    return <option value={type} key={type}>{type}</option>
                })}
            </select>

            <select name='state' value={controlOptions.state} onChange={handleChange}>
                <option value=''>(Select)</option>
                {states.map(type => {
                    return <option value={type} key={type}>{type}</option>
                })}
            </select>

            <select name='alignment' value={controlOptions.alignment} onChange={handleChange}>
                <option value=''>(Select)</option>
                <option value='alignmentWithParty'>Party Alignment</option>
                <option value='nonAlignmentWithParty'>Party Non-alignment</option>
                <option value='alignmentWithChamber'>Chamber Alignment</option>
                <option value='nonAlignmentWithChamber'>Chamber Non-alignment</option>
            </select>

            <input name='searchMember' type='text' value={controlOptions.searchMember} onChange={handleChange}></input>
        </>
    )
}
export default Controls;