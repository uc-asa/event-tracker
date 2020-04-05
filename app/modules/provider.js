import React, {useMemo, useReducer, useContext} from 'react';
import _ from 'lodash';

import { KEY, UTILS } from '@config';
import reducer, {initialState} from "./reducer";


// CONTEXT ===================================
const EventContext = React.createContext();

function EventProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState || {});
    const removeEvent = async (ev_id) => {
        if (ev_id) {
            const eventData = await UTILS.getData(KEY.events) || [];
            if (_.isArray(eventData) && state.currentUser) {
                for (let i in eventData) {
                if (eventData[i].user_name === state.currentUser) {
                    const id = eventData[i].ev_ids.indexOf(ev_id);
                    if (id > -1) {
                    eventData[i].ev_ids.splice(id, 1);
                    }
                    break;
                }
                }
                await UTILS.storeData(KEY.events, eventData);
                await getEvents();
            }
        }
    };
    const setEvent = async (ev_id) => {
        const prevData = await UTILS.getData(KEY.events) || [];
        if (_.isArray(prevData) && state.currentUser) {
            let isAvail = -1;
            for (let i in prevData) {
                if (prevData[i].user_name === state.currentUser) {
                isAvail = i; 
                break;
                }
            }
            if (isAvail > -1) { 
                const ev_ids = prevData[isAvail].ev_ids;
                if (ev_ids.indexOf(ev_id) < 0) {
                ev_ids.push(ev_id);
                }
                prevData[isAvail].ev_ids = ev_ids;
            } else {
                prevData.push({
                    user_name: state.currentUser,
                    ev_ids: [ev_id],
                })
            }
        }
        await UTILS.storeData(KEY.events, prevData);
        getEvents();
    };
    const getEvents = async () => {
        const eventData = await UTILS.getData(KEY.events) || [];
        if (_.isArray(eventData) && state.currentUser) {
            let isAvail = -1;
            for (let i in eventData) {
                if (eventData[i].user_name === state.currentUser) {
                    isAvail = i; 
                    break;
                }
            }
            const list = _.keyBy(state.list, 'ev_id');
            const ev = [];
            if (isAvail > -1 && eventData[isAvail].ev_ids) {
                for (let i in eventData[isAvail].ev_ids) {
                    ev.push(
                        list[eventData[isAvail].ev_ids[i]]
                    )
                }
            }
            dispatch({type: KEY.SET_DATA, ev});
        }
    };
    const setUser = async (name) => {
        const prevData = await UTILS.getData(KEY.user) || [];
        const user_name = _.lowerCase(name);
        state.currentUser = user_name;
        getEvents();
        if (Array.isArray(prevData)) {
            const isAvail = _.find(prevData, (o) => { return o.user_name === user_name });
            if (!isAvail) { 
                prevData.push({
                name,
                user_name,
                })
            }
        }
        await UTILS.storeData(KEY.user, prevData);
    };
    const getUser =  async () => {
        const userData = await UTILS.getData(KEY.user) || [];
        return userData;
    };
    const handleLogin = async (data) => {
        dispatch({type: KEY.SET_DATA, user:data.user});
    };

    const value = useMemo(() => {
        return {state, handleLogin, setEvent, setUser, removeEvent, getEvents, getUser};
    }, [state]);

    return (
        <EventContext.Provider value={value}>
            {props.children}
        </EventContext.Provider>
    );
}

const useEvent = () => useContext(EventContext);
export { EventContext, useEvent }
export default EventProvider;
