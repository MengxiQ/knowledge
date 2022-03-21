import request from '@/utils/request'

export function getContentsByPageName(PageName) {
  return request({
    url: '/contents/' + PageName,
    method: 'get'
  })
}

export function updateContents(data) {
  return request({
    url: '/contents/' + data.id,
    method: 'put',
    data
  })
}
export function createContents(data) {
  return request({
    url: '/contents',
    method: 'post',
    data
  })
}
