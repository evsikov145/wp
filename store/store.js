import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {reducer} from "../reducers/reducer";

let store

export const initialState = {
    about: {
        title: 'Познакомимся?',
        secondTitle: 'Привет!',
        thirdTitle: 'Моя специализация',
        desc: "Меня зовут Лена Рубцова. Более 5 лет я увлекаюсь фотографией.\n" +
            "И уже давно увлечение переросло в профессию и смысл жизни. Я поняла, что мечтаю быть профессиональным свадебным фотографом, поэтому начала развиваться именно в этом направлении.",
        items: [
            {id:1, title: 'Свадебная съёмка', img1: '/static/images/svg/wedding-1.svg', img2: '/static/images/svg/wedding-2.svg'},
            {id:2, title: 'Love Story', img1: '/static/images/svg/story-1.svg', img2: '/static/images/svg/story-2.svg'},
            {id:3, title: 'Портретная съёмка', img1: '/static/images/svg/portrait-1.svg', img2: '/static/images/svg/portrait-2.svg'},
        ],
        btnText: 'Обсудим Вашу фотосессию?',
        pic: '/static/images/about/about-bg.jpg'
    },
    contacts: {
        title: 'Контакты',
        secondTitle: 'Запишись на фотосессию прямо сейчас!',
        name: 'Елена Рубцова',
        profession: 'Фотограф',
        address: 'Тула, Узловая, Новомосковск',
        phone: '+ 7 (999) 999 99 99 ',
        email: 'rubsova@gmail.com'
    }
}

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}

