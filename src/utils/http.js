import axios from 'axios'

axios.interceptors.response.use(res => {
	if (!res.status || res.status !== 200) {
		return;
	}
	return res;
})

export default axios;
