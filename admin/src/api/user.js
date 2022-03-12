import request from '@/utils/request'

export function getUsersList() {
  return request({
    url: '/users',
    method: 'get'
  })
}

export function createUser(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/users/' + data.id,
    method: 'put',
    data
  })
}

export function deleteUserById(id) {
  return request({
    url: '/users/' + id,
    method: 'delete'
  })
}
export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
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
