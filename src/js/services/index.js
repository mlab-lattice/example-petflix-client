import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

const Api = {
  fetchVideos: () => {
    return axios({
      method: 'get',
      url: `api/videos`
    })
  }
}

export default Api
