import request from '@/utils/request'

enum API { headerAll = '/home/category/head' }

export function findAllCategory () {
  return request({
    method: 'get',
    url: API.headerAll
  })
}
