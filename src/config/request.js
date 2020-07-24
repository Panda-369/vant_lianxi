import axios from 'axios'
import qs from 'qs'
axios.interceptors.request.use(config=>{
    return config
})
//返回拦截
axios.interceptors.response.use(response=>{
    return response
})

/**
 * 图片请求
 */
export const getColumnGoodsPageList = (param) => {
    return axios({
      method: 'post',
      url: 'https://alpha-mall.fpwan.com/home/getColumnGoodsPageList',
      data:qs.stringify(param)
    });
  }
  export const getNearStoreList = (param) => {
    return axios({
      method: 'post',
      url: 'https://alpha-waimai.fpwan.com/Mall/getClassifyGoodsList',
      data:qs.stringify(param)
    });
  }