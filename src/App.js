import React, {useEffect, useState} from "react";
import {Space, Layout, Button, Spin} from 'antd';
import {Content, Header} from "antd/es/layout/layout";
import RowComponent from "./component/rowComponent";
import {deleteMtgCard, fetchMtgCards, saveMtgCard} from "./api/mtg";
import Search from "antd/es/input/Search";

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [mtgCardList, setMtgCardList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        saveMtgCard(value).then(() => {
            checkCardList();
            setInputValue('');
            setIsLoading(false);
        }).catch((err) => {
            console.log(err.message);
            setIsLoading(false);
        })
    };

    const checkCardList = () => {
        setIsLoading(true);
        fetchMtgCards().then(res => {
            setMtgCardList(createGridList(res));
            setIsLoading(false);
        }).catch((err) => {
            console.log(err.message);
            setIsLoading(false);
        })
    }

    const onDelete = (value) => {
        setIsLoading(true);
        deleteMtgCard(value).then(() => {
            checkCardList();
            setIsLoading(false);
        }).catch((err) => {
            console.log(err.message);
            setIsLoading(false);
        })
    };

    return (
        <div className="App" style={{padding: '1rem 5rem', backgroundColor: '#d0d0e1'}}>
            <Space direction="vertical" style={{width: '100%'}} size={[0, 30]}>
                <Layout style={{backgroundColor: '#d0d0e1'}}>
                    <Header style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <h1>Magic The Gathering Wish List</h1>
                    </Header>
                    <Content style={{borderColor: 'black'}}>
                        <Button style={{marginTop: '1%', marginLeft: '50%',
                            transform: 'translate(-50%)',}} onClick={checkCardList}>Refresh Card List</Button>
                        <Search
                            style={{
                                width: '50%',
                                marginLeft: '50%',
                                transform: 'translate(-50%)',
                                marginTop: '1%'
                            }}
                            placeholder="Input link of card"
                            onSearch={onSearch}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            enterButton/>
                        {isLoading ? (<Spin tip="Loading" size="large" style={{marginLeft: '50%',
                            transform: 'translate(-50%)',
                            marginTop: '1%'}} />) :
                            ( <>{mtgCardList.map((cardRows) => (
                            <RowComponent
                                key={cardRows[0]._id}
                                cardList={cardRows}
                                onDelete={onDelete}
                            />
                        ))} </>)}
                    </Content>
                </Layout>
            </Space>
        </div>
    );
}

export default App;
