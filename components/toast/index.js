import './index.less'

class Toast {
	toastList = []
	
	show (options) {
		if (!this.node) {
			this.node = document.createElement('div')
			this.node.className = 'capricorn-component-toast'
			document.body.appendChild(this.node)
		}
		if (typeof options === 'string') {
			options = Object.assign({}, {
				message: options
			})
		}
		this.toastList.push(options)
		if (this.timer) {
			return
		}
		this._item()
	}
	
	clear () {
		this.toastList = []
		this.node.innerText = ''
		this.node.classList.add('hide')
	}
	
	_item () {
		if (this.toastList.length === 0) {
			return
		}
		this.node.classList.remove('hide')
		const { message, duration = 2000 } = this.toastList[0]
		this.node.innerText = message
		clearTimeout(this.timer)
		this.timer = setTimeout(() => {
			this.node.innerText = ''
			this.toastList.shift()
			if (this.toastList.length === 0) {
				this.node.classList.add('hide')
				this.timer = null
			} else {
				this._item()
			}
		}, duration)
	}
}

export default new Toast
