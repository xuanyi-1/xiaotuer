import { Module } from 'vuex'

import { RootStateTypes, userModleTypes } from '../interface'

const userModule: Module<userModleTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    profile: {
      token: ''
    }
  },
  mutations: {
    // 修改用户信息
    setUser (state, newState: object): void {
      state.profile = newState
    }
  },
  actions: {}
}

export default userModule
