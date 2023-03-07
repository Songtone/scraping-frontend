import React, {useEffect, useState} from "react";
import {Space, Layout} from 'antd';
import {Content, Header} from "antd/es/layout/layout";
import RowComponent from "./component/rowComponent";
import {fetchMtgCardData, fetchMtgCards, saveMtgCard} from "./api/mtg";
import Search from "antd/es/input/Search";

const App = () => {
    const testing = [1, 2, 3, 4, 5];
    const [mtgCardManaCrypt, setMtgCardManaCrypt] = useState([]);
    const [mtgCardKoth, setMtgCardKoth] = useState([]);
    const [mtgCardSolRing, setMtgCardSolRing] = useState([]);
    const [mtgCardVeneratedRotpriest, setMtgCardVeneratedRotpriest] = useState([]);
    const [mtgCardVolcanicIsland, setMtgCardVolcanicIsland] = useState([]);
    const [mtgCardCityscapeLeveler, setMtgCardCityscapeLeveler] = useState([]);

    useEffect(() => {
        fetchMtgCardData('mana-crypt').then(res => {
            setMtgCardManaCrypt(res);
        }).catch((err) => {
            console.log(err.message);
        })
        fetchMtgCardData('koth-fire-of-resistance').then(res => {
            setMtgCardKoth(res);
        }).catch((err) => {
            console.log(err.message);
        })
        fetchMtgCardData('sol-ring').then(res => {
            setMtgCardSolRing(res);
        }).catch((err) => {
            console.log(err.message);
        })
        fetchMtgCardData('venerated-rotpriest').then(res => {
            setMtgCardVeneratedRotpriest(res);
        }).catch((err) => {
            console.log(err.message);
        })
        fetchMtgCardData('volcanic-island').then(res => {
            setMtgCardVolcanicIsland(res);
        }).catch((err) => {
            console.log(err.message);
        })
        fetchMtgCardData('cityscape-leveler').then(res => {
            setMtgCardCityscapeLeveler(res);
        }).catch((err) => {
            console.log(err.message);
        })
        fetchMtgCards().then(res => {
            console.log('DB cards')
            console.log(res);
        }).catch((err) => {
            console.log(err.message);
        })
        console.log('000');
        saveMtgCard('https://www.mtggoldfish.com/price/Alliances/Force+of+Will#paper').then(() => {
            createGridList(testing)
        }).catch((err) => {
            console.log(err.message);
        })
        createGridList(testing)
    }, []);

    function createGridList(list) {
        let grouping = [];
        let subGroup = [];
        list.map((test, index) => {
            if (index % 3 === 0) {
                if (subGroup.length > 0) {
                    grouping.push(subGroup);
                }
                subGroup = [];
                subGroup.push(test);
            } else if (index % 3 !== 0) {
                subGroup.push(test);
                if (index === list.length - 1) {
                    grouping.push(subGroup);
                }
            } else {
                console.log('nothing')
            }
        })
    }

    const onSearch = (value) => {
        console.log(value)
    };

    return (
        <div className="App" style={{padding: '1rem 5rem', backgroundColor: '#d0d0e1'}}>
            <Space direction="vertical" style={{width: '100%'}} size={[0, 30]}>
                <Layout style={{backgroundColor: '#d0d0e1'}}>
                    <Header style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <h1>Sebastien's Magic The Gathering Wish List</h1>
                    </Header>
                    <Content style={{marginTop: '2rem'}}>
                        <Search style={{ width: '35%', marginLeft: '50%',
                            transform: 'translate(-50%)'}} placeholder="Input link of card" onSearch={onSearch} enterButton />
                        <RowComponent
                            firstCard={mtgCardManaCrypt}
                            secondCard={mtgCardKoth}
                            thirdCard={mtgCardSolRing}/>
                        <RowComponent
                            firstCard={mtgCardVeneratedRotpriest}
                            secondCard={mtgCardVolcanicIsland}
                            thirdCard={mtgCardCityscapeLeveler}/>
                    </Content>
                </Layout>
            </Space>
        </div>
    );
}

export default App;
