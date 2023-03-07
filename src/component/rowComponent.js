import {Col, Row} from "antd";
import React from "react";
import MTGCardComponent from "./mtgCardComponent";



const RowComponent = ({ firstCard, secondCard, thirdCard }) => {

    return(<Row gutter={16} style={{
        padding: '2rem'
    }}>
            <Col span={8} style={{textAlign: 'center'}}>
                <MTGCardComponent
                    mtgCardName={firstCard.mtgCardName}
                    mtgCardPrice={firstCard.mtgCardPrice}
                    mtgCardPicturePath={firstCard?.mtgCardPicturePath}/>
            </Col>
            <Col span={8} style={{textAlign: 'center'}}>
                <MTGCardComponent
                    mtgCardName={secondCard.mtgCardName}
                    mtgCardPrice={secondCard.mtgCardPrice}
                    mtgCardPicturePath={secondCard?.mtgCardPicturePath}/>

            </Col>
            <Col span={8} style={{textAlign: 'center'}}>
                <MTGCardComponent
                    mtgCardName={thirdCard.mtgCardName}
                    mtgCardPrice={thirdCard.mtgCardPrice}
                    mtgCardPicturePath={thirdCard?.mtgCardPicturePath}/>
            </Col>
        </Row>
    )
}

export default RowComponent;