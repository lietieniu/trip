import { CHANGELANGUAGE, ADDLANGUAGE } from './constants'

interface change {
    type: typeof CHANGELANGUAGE,
    key: 'en' | 'zh'
}
interface add {
    type: typeof ADDLANGUAGE,
    key: { label: string, key: string }

}

//type连接两个类型接口(起别名)
export type languageActionTypes = change | add

export const changeLanguage = (key: 'en' | 'zh'): change => {
    return {
        type: CHANGELANGUAGE,
        key
    }
}
export const addLanguage = (key: { label: string, key: string }): add => {
    return {
        type: ADDLANGUAGE,
        key
    }
}

