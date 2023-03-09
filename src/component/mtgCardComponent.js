import React from 'react';
import {Card} from 'antd';

const MTGCardComponent = ({card}) => {
    const {Meta} = Card;
    return (
        <Card
            style={{width: '75%',
                borderRadius: '2rem',
                padding: '3rem 3rem 0rem 3rem',
                marginLeft: '50%',
                transform: 'translate(-50%)',
                border: ' 2px solid black'}}
            cover={<img
                style={{width: '15rem',
                    marginLeft: '50%',
                    transform: 'translate(-50%)'}}
                alt={card._id}
                src={card.mtgCardPicturePath}
            />}>
            <Meta title={card.mtgCardName}/>
            <h1>{card.mtgCardPrice + " USD"}</h1>
        </Card>
    )
}

export default MTGCardComponent;