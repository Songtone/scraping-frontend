import React, {useEffect, useState} from "react";
import {Space, Layout, Button} from 'antd';
import {Content, Header} from "antd/es/layout/layout";
import RowComponent from "./component/rowComponent";
import { fetchMtgCards, saveMtgCard } from "./api/mtg";
import Search from "antd/es/input/Search";

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [mtgCardList, setMtgCardList] = useState([]);

    useEffect(() => {
        checkCardList();
    }, []);

    function createGridList(list) {
        let grouping = [];
        let subGroup = [];
        list.map((test, index) => {
            if (index % 4 === 0) {
                if (subGroup.length > 0) {
                    grouping.push(subGroup);
                }
                subGroup = [];
                subGroup.push(test);
                if (index === list.length - 1) {
                    grouping.push(subGroup);
                }
            } else if (index % 4 !== 0) {
                subGroup.push(test);
                if (index === list.length - 1) {
                    grouping.push(subGroup);
                }
            } else {
                console.log('nothing')
            }
        })
        return grouping;
    }

    const onSearch = (value) => {
        saveMtgCard(value).then(() => {
            checkCardList();
            setInputValue('');
        }).catch((err) => {
            console.log(err.message);
        })
    };

    const checkCardList = () =>{
        fetchMtgCards().then(res => {
            setMtgCardList(createGridList(res));
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div className="App" style={{padding: '1rem 5rem', backgroundColor: '#d0d0e1'}}>
            <Space direction="vertical" style={{width: '100%'}} size={[0, 30]}>
                <Layout style={{backgroundColor: '#d0d0e1'}}>
                    <Header style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <h1>Magic The Gathering Wish List</h1>
                        <Search
                            style={{
                                width: '50%',
                                marginLeft: '50%',
                                transform: 'translate(-50%)'
                            }}
                            placeholder="Input link of card"
                            onSearch={onSearch}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            enterButton/>
                    </Header>
                    <Content style={{marginTop: '2rem'}}>
                        <Button onClick={checkCardList}>Refresh Card List</Button>

                        {mtgCardList.map((cardRows) => (
                            <RowComponent
                                cardList={cardRows}/>
                        ))}
                    </Content>
                </Layout>
            </Space>
        </div>
    );
}

export default App;
