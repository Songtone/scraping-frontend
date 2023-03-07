import React from 'react';
import {Card} from 'antd';

const MTGCardComponent = ({mtgCardName, mtgCardPrice, mtgCardPicturePath}) => {
    const {Meta} = Card;
    return (
        <Card
            style={{width: '50%',
                borderRadius: '2rem',
                padding: '3rem 3rem 0rem 3rem',
                marginLeft: '50%',
                transform: 'translate(-50%)',
                border: ' 2px solid black'}}
            cover={<img
                style={{width: '15rem',
                    marginLeft: '50%',
                    transform: 'translate(-50%)'}}
                src={mtgCardPicturePath}
            />}>
            <Meta title={mtgCardName}/>
            <h1>{mtgCardPrice + " USD"}</h1>
        </Card>
    )
}

export default MTGCardComponent;