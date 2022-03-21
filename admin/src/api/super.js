import request from '@/utils/request'

export function getUsersList() {
  return request({
    url: '/super',
    method: 'get'
  })
}

export function createUser(data) {
  return request({
    url: '/super',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/super/' + data.id,
    method: 'put',
    data
  })
}

export function deleteUserById(id) {
  return request({
    url: '/super/' + id,
    method: 'delete'
  })
}
export function login(data) {
  return request({
    url: '/super/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/super/info/',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
