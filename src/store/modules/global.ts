import { Module } from 'vuex'

import { RootStateTypes, globalModuleTypes } from '../interface'

const globalModule: Module<globalModuleTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    count: 0,
    hoppy: 'test',
    navSwitch: false
  },
  mutations: {
    updateNavSwitch (state, newState: boolean): void {
      state.navSwitch = newState
    }
  },
  actions: {}
}

export default globalModule
