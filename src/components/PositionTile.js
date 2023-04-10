function PositionTile({ position }){
    // console.log(position)

    const positionClass = position.vote_position.replaceAll(' ','')
    // console.log(positionClass)
    return(
        <div className={`positionTile Fill${positionClass}`}>
        </div>
    )
}

export default PositionTile