import {Col, Row} from "antd";
import React from "react";
import MTGCardComponent from "./mtgCardComponent";


const RowComponent = ({cardList}) => {
    const numberOfColumns = [0, 1, 2, 3];
    return (<Row gutter={16} style={{
            padding: '2rem'
        }}>
            {numberOfColumns.map((columnNumber) => (
                <Col span={6} style={{textAlign: 'center'}}>
                    {cardList[columnNumber] ? (<MTGCardComponent
                            card={cardList[columnNumber]}
                            key={`cardId-${cardList[columnNumber]._id}`}/>)
                        : (<></>)}
                </Col>
            ))}

        </Row>
    )
}

export default RowComponent;