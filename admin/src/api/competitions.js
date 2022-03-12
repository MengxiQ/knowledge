import request from '@/utils/request'

export function getCompetitionsList() {
  return request({
    url: '/competitions',
    method: 'get'
  })
}

export function createCompetitions(data) {
  return request({
    url: '/competitions',
    method: 'post',
    data
  })
}

export function updateCompetitions(data) {
  return request({
    url: '/competitions/' + data.id,
    method: 'put',
    data
  })
}

export function deleteCompetitionsById(id) {
  return request({
    url: '/competitions/' + id,
    method: 'delete'
  })
}
