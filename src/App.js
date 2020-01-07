import React, {useState, useEffect} from 'react';
import ModalContainer from './components/modal/modalcontainer';
import ModalSub from './components/modal/modalsub';
import AmaContainer from './components/amacontainer/amacontainer';
import Calendar from './components/calendar/calendar';
import ListChoice from './components/listchoice/listchoice';
import SpecToggleContainer from './components/spectoggle/spectogglecontainer';
import TeamToggleContainer from './components/teamtoggle/teamtogglecontainer';
import SquareWall from './components/squarewall/squarewall';
import {data} from './info.js';
import {eventData} from './info.js';
import resetIcon from './icons/reset.svg';
import './App.css';
import moment from 'moment';

const App = () => {
    
    const [items, setItems] = useState(data);
    const [events, setEvents] = useState(eventData);
    const [modals, setModal] = useState([]);
    const [activeModal, setActiveModal] = useState([]);
    const [activeCategory, setActiveCategory] = useState([]);
    const [activeTeam, setActiveTeam] = useState([]);
    const [toggleFlip, activateToggleFlip] = useState(1);
    const [toggleText, setToggleText] = useState('Filter by Team')
    const [randColor, setColor] = useState('#ef5777');
    const [idleTimer, setIdleTimer] = useState(1);

    const count = () => {
        setIdleTimer((idleTimer) => idleTimer < 60 ? idleTimer + 1 : 0);
    }

    const resetTimer = () => {
        setIdleTimer(1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            count();
        }, 1000);
        return () => clearInterval(interval);
    }, [idleTimer]);

    useEffect(() => {
        if (idleTimer === 0) {
            let activespectoggle = document.getElementsByClassName('spectoggle');
            let activeteamtoggle = document.getElementsByClassName('teamtoggle');
            setEvents(eventData);
            setModal([]);
            setActiveModal([]);
            setColor("#" + Math.random().toString(16).slice(2, 8));
            for (var i = 0; i < activespectoggle.length; ++i) {
                if (items === data && toggleFlip === 1) {
                    activespectoggle[0].click();
                }
                if (activespectoggle[i].id === 'spectoggle-selected') {
                    if (i === activespectoggle.length - 1) {
                        activateToggleFlip(2);
                        setToggleText('Filter by Skills');
                        setItems(data);
                        setActiveTeam([]);
                        setActiveCategory([]);
                    } else {
                        activateToggleFlip(1);
                        setToggleText('Filter by Teams');
                        activespectoggle[i + 1].click();
                    } break;
                }
            }
            for (var j = 0; j < activeteamtoggle.length; ++j) {
                if (items === data && toggleFlip === 2) {
                    activeteamtoggle[0].click();
                }
                if (activeteamtoggle[j].id === 'teamtoggle-selected') {
                    if (j === activeteamtoggle.length - 1) {
                        activateToggleFlip(1);
                        setToggleText('Filter by Teams');
                        setItems(data);
                        setActiveTeam([]);
                        setActiveCategory([]);
                    } else {
                        activateToggleFlip(2);
                        setToggleText('Filter by Skills');
                        activeteamtoggle[j + 1].click();
                    } break;
                }
            }
        }
    }, [idleTimer]);

    const resetData = () => {
        
        // let payload = {
        //     method: 'GET',
        //     headers: { "Accept": "application/json; odata=nometadata" },
        //     credentials: 'same-origin'
        // }

        // let url = 'x'

        // fetch(url, payload)
        //     .then((response) => {
        //         response.json()
        //         .then((res) => {
        //             setData(res.value);
        //             setItems(res.value);
        //     });
        // });

        // fetch(url, payload)
        //     .then((response) => {
        //         response.json()
        //         .then((res) => {
        //         setEventData(res.value);
        //         setEvents(res.value);
        //     });
        // });

        console.log('This is a demo.');

    }

    events.sort((a, b) => moment(a.DateAndTime) - moment(b.DateAndTime));
    
    const changeCategory = (item) => {
        setItems(
            [...data.filter(items => {
                return items.category === item;
            })]
        );
        setActiveCategory(item);
        setActiveTeam([]);
    }

    const changeTeam = (item) => {
        setItems(
            [...data.filter(items => {
                return items.team === item;
            })]
        );
        setActiveTeam(item);
        setActiveCategory([]);
    }

    const resetItems = () => {
        setItems(data);
        setActiveCategory([]);
        setActiveTeam([]);
    }

    const flipSwitch = () => {
        if (toggleFlip === 1) {
            activateToggleFlip(2);
            setToggleText('Filter by Skills');
        } else if (toggleFlip === 2) {
            activateToggleFlip(1);
            setToggleText('Filter by Teams');
        };
    }

    const modalAppear = (Id) => {
        setModal(
            [...data.filter(modal => {
                return modal.Id === Id
            })]
        );
        setActiveModal(Id);
        setEvents([]);
    }

    const clearModal = () => {
        setModal([]);
        setActiveModal([]);
        setEvents(eventData);
    }

    return(
        <div className = 'container' onClick={resetTimer}>
            <div className = 'header'>
                <div className='demoalert'><span>DEMO: Press F11 to view in Fullscreen</span></div>
                <div className = 'modalwrap'>
                    <ModalContainer modals={modals}/>
                    <ModalSub modals={modals}/>
                </div>
                <AmaContainer modals={modals} activeModal={activeModal} randColor={randColor}/>
                <Calendar events={events} activeModal={activeModal}/>
                <SquareWall randColor={randColor} activeModal={activeModal}/>
                <div className = "wallsubtitle" id = {activeModal >= 1 ? 'wallsubtitle-hidden' : 'wallsubtitle'}>Mentor Wall</div>
                <div className="wallcover" id = {activeModal >= 1 ? 'wallcover-hidden' : 'wallcover'}><span>Tap a portrait below and meet our teams</span></div>
                <div className = 'resetbutton' onClick = {resetData}>
                    <img src = {resetIcon} alt = ''/>
                </div>
                
            </div>
            <div className = 'sidebar'>
                <div className = 'togglewrap'>
                    <div className = 'resetbtn' 
                    id = {items === data ? 'resetbtn-selected' : 'resetbtn' }
                    onClick = {resetItems}>View All</div>
                    <div className = {toggleFlip === 1 ? 'toggleflipfront' : 'toggleflipback'}>
                        <SpecToggleContainer data={data} activeCategory={activeCategory} changeCategory={changeCategory}/>
                    </div>
                    <div className = {toggleFlip === 2 ? 'toggleflipfront' : 'toggleflipback'}>
                        <TeamToggleContainer data={data} activeTeam={activeTeam} changeTeam={changeTeam} resetItems={resetItems}/>
                    </div>
                    <div id = 'flipswitch' onClick = {flipSwitch}>
                        {toggleText}
                    </div>
                </div>
            </div>
            <div className = 'footer'>
                <div className = 'cardwrap' id = 'cardwrap'>
                    <ListChoice items={items} activeModal={activeModal} modalAppear={modalAppear} randColor={randColor} clearModal={clearModal}/>
                </div>
            </div>
        </div>
    );
}

export default App;