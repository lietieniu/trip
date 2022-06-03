import { CHANGELANGUAGE, ADDLANGUAGE } from './constants';
import {languageActionTypes} from './languageAction'

import i18n from 'i18next';


export interface languageState {
    //1.默认语言
    language: 'en' | 'zh',
    //2.语言列表
    languageList: { label: string, key: string }[]
}
const defaultState: languageState = {
    language: 'zh',
    languageList: [
        { label: '中文', key: 'zh' },
        { label: 'English', key: 'en' }
    ]
}

export const Language = (state = defaultState, action:any) => {
    switch (action.type) {
        case CHANGELANGUAGE:
            // 切换语言
            i18n.changeLanguage(action.key)
            return {
                ...state,
                language: action.key //重新给language赋值
            }
        case ADDLANGUAGE:
            return {
                ...state,
                languageList: [
                    ...state.languageList,action.key
                ]
            }
        default:
            return state;
    }
}