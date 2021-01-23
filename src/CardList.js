import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {

        const cardComponent = robots.map((singleRobot, i) => {
            return<Card 
            key={i}
            id={singleRobot.id} 
            name={singleRobot.name} 
            job={singleRobot.job}
            username={singleRobot.username}/>
    
        })

    return(
     <div>
         {cardComponent}
     </div>

    )
}

export default CardList