import axios from 'axios'
import qs from 'qs'

class Ajax {
	constructor () {
		this.ajax = axios.create({
			withCredentials: false,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		})
		this.filter()
	}
	
	get (url, params = {}) {
		return this.ajax.get(url, { params })
	}
	
	post (url, params = {}) {
		return this.ajax.post(url, qs.stringify(params))
	}
	
	filter () {
		this.handleResponse()
	}
	
	handleResponse () {
		this.ajax.interceptors.response.use((response) => {
			if (response.status !== 200 || !response.data) {
				window.toast.show('接口请求异常')
				return Promise.reject(response)
			}
			return response.data
		}, (error) => {
			window.toast.show('网络异常')
			return Promise.reject(error)
		})
	}
}

export default new Ajax