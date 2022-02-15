import Service from '@foodism/http';
import { Env } from 'utils';
class Http extends Service {
  constructor() {
    super();
    this.init();
  }
  init() {
    // 这里填写 API请求的baseURL

    const API = {
      localdev: '',
      // 根据你项目实际情况 改变
      development: '//m-test.foodism.cc/api/gateway/bearApi',
      production: '//m.foodism.cc/api/gateway/bearApi',
    };

    this.baseURL = API[Env || 0];
    super.setup();
  }
}

export default new Http();
