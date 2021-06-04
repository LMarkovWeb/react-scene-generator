import React from "react";


export const ACTION = {
    UPDATE_HEAD: 'UPDATE_HEAD',
    UPDATE_BODY: 'UPDATE_BODY',
    UPDATE_LEGS: 'UPDATE_HEAD',
    UPDATE_COLOR: 'UPDATE_COLOR'
}

export const INITIAL_STORE = {
    head: {
        title: '',
        preview: ''
    },
    body: {
        title: '',
        preview: ''
    },
    legs: {
        title: '',
        preview: ''
    },
    skinColor: ''
}

export const StoreContext = React.createContext(INITIAL_STORE);

export const {Provider, Consumer} = StoreContext
