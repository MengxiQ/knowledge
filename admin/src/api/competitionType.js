import request from '@/utils/request'

export function getCompetitionTypeList() {
  return request({
    url: '/competition_type',
    method: 'get'
  })
}

export function createCompetitionType(data) {
  return request({
    url: '/competition_type',
    method: 'post',
    data
  })
}

export function updateCompetitionType(data) {
  return request({
    url: '/competition_type/' + data.id,
    method: 'put',
    data
  })
}

export function deleteCompetitionTypeById(id) {
  return request({
    url: '/competition_type/' + id,
    method: 'delete'
  })
}
