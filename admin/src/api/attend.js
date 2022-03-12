import request from '@/utils/request'

export function getAttendList() {
  return request({
    url: '/attend',
    method: 'get'
  })
}

export function createAttend(data) {
  return request({
    url: '/attend',
    method: 'post',
    data
  })
}

export function updateAttend(data) {
  return request({
    url: '/attend/' + data.id,
    method: 'put',
    data
  })
}

export function deleteAttendById(id) {
  return request({
    url: '/attend/' + id,
    method: 'delete'
  })
}
