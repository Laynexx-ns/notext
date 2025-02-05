import {defineStore} from "pinia";

export const useUserIdStore = defineStore('counter', () => {
    const userId = ref(0)
    function setUserId(userId) {
        this.userId = userId
    }

    return { userId, setUserId }
})