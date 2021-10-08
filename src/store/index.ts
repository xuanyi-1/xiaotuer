import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { RootStateTypes, AllStateTypes } from '../store/interface'
import globalModule from './modules/global'
import userModule from './modules/user'
import createPersistedstate from 'vuex-persistedstate'

export const store = createStore<RootStateTypes>({
  state: {
    narBool: false,
    name: 'jiji'
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    globalModule,
    userModule
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['globalModule']
    })
  ]
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes> () {
  return baseUseStore<T>(key)
}
