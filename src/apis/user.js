import {requst} from '@/utils'

export function loginAPI(formData){
  return requst({
    url:'/authorizations',
    method:'post',
    data: formData
  })
}

export function profileAPI(){
  return requst({
    url:'/user/profile',
    method:'get'
  })
}