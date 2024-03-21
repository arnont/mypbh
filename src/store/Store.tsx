import { atom } from "recoil";

export const userInfo = atom({
    key: 'user',
    default: {
        userid: '',
        usernm: '-',
        off_id: '',
        off_nm: '',
        adm_lv:false,
    }
})