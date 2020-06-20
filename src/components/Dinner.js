import React, {Fragment} from 'react'

const Dinner = ({dishName, sweetDish}) => {
    return (
        <Fragment>
            <h2 className = "dish">Today We are serving {dishName}</h2>
            <h2 className = "sweet">Today We are serving {sweetDish} </h2>
        </Fragment>
    )
}

export default Dinner
