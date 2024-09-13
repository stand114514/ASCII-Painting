import { ref  } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo>({
      id: 0,
      name: 'Stand',
      avatar: "src/assets/img/16140627516034a49f2b9310.34802472.jpeg",
      // email: string,
      // password: string,
      work_num: 6,
      like_num: 123,
      favorite_num: 0,
      history_num: 88
  })
  return { userInfo }
})
