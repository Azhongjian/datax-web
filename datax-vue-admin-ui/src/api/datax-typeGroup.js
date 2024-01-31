import request from '@/utils/request'

// datax分组管理

export function list(params) {
  return request({
    url: '/api/dataxTypeGroup',
    method: 'get',
    params
  })
}

export function fetched(params) {
  return request({
    url: '/api/dataxTypeGroup/' + params,
    method: 'get'
  })
}

export function updated(data) {
  return request({
    url: '/api/dataxTypeGroup/',
    method: 'put',
    data
  })
}

export function created(data) {
  return request({
    url: '/api/dataxTypeGroup/',
    method: 'post',
    data
  })
}

export function deleted(data) {
  return request({
    url: '/api/dataxTypeGroup/',
    method: 'delete',
    params: data
  })
}

// 获取可选组名
export function getGroupOptions(params) {
  return request({
    url: '/api/dataxTypeGroup/getGroupOptions',
    method: 'get',
    params
  })
}

// 获取可选类型
export function getTypeOptions(params) {
  return request({
    url: '/api/dataxTypeGroup/getTypeOptions',
    method: 'get',
    params
  })
}
