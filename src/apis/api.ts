import axios from 'axios';
axios.defaults.baseURL = 'https://apic.netstart.cn/music';

class Api {
  constructor() {

  }
  //获取歌手
  getSinger(params: { type: string | number, area: string | number, limit?: string | number }): Promise<any> {
    return axios({
      method: 'get',
      url: '/artist/list',
      params: {
        type: params.type,
        area: params.area,
        limit: params.limit
      }
    })
  }
  //获取歌手详情
  getSingerDetails(params: { id: string | number }): Promise<any> {
    return axios({
      method: 'get',
      url: '/artists',
      params: {
        id: params.id
      }
    })
  }
  //获取专辑详情 https://apic.netstart.cn/music/artist/album?id=3684&limit=30
  getAlbumDetails(params: { id: string | number, limit?: string | number }): Promise<any> {
    return axios({
      method: 'get',
      url: '/artist/album',
      params: {
        id: params.id,
        limit: params.limit
      }
    })
  }
  //获取MV详情
  getMVDeatils(params:{id:string|number,limit?: string | number }):Promise<any>{
    return axios({
      method: 'get',
      url:'/artist/mv',
      params:{
        id:params.id,
        limit:params.limit
      }

    })
  }
  //获取歌手经历信息
  getAlbumExperience(params: { id: string | number}): Promise<any> {
    return axios({
      method: 'get',
      url: '/artist/desc',
      params: {
        id: params.id,
      }
    })
  }

}

export const api = new Api()