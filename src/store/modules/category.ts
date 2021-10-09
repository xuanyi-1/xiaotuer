import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
import { Module } from 'vuex'

import { RootStateTypes, categoryModleTypes } from '../interface'

const categoryModule: Module<categoryModleTypes, RootStateTypes> = {
  namespaced: true,
  state: () => {
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    // 修改用户信息
    setList(state, headCategory) {
      state.list = headCategory.result
    }
  },
  actions: {
    async getList({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      // 给每个分类加上控制二级分类显示隐藏的数据

      // 修改分类数据
      commit('setList', data)
    }
  }

}

export default categoryModule