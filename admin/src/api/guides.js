import request from '@/utils/request'

export function getGuidesList() {
  return request({
    url: '/guides',
    method: 'get'
  })
}

export function createGuides(data) {
  return request({
    url: '/guides',
    method: 'post',
    data
  })
}

export function updateGuides(data) {
  return request({
    url: '/guides/' + data.id,
    method: 'put',
    data
  })
}

export function deleteGuidesById(id) {
  return request({
    url: '/guides/' + id,
    method: 'delete'
  })
}
