const http = require('http')
const fs = require('fs')
const path = require('path')

http
	.createServer((request, response) => {
		let filePath

		if (request.url === '/') {
			filePath = 'pages/index.html'
		} else if (request.url === '/styles/style.css') {
			filePath = 'styles/style.css'
		} else if (request.url === '/scripts/script.js') {
			// Исправлено scrypts → scripts
			filePath = 'scripts/script.js'
		} else {
			filePath = 'pages/404.html'
		} if (request.url === '/styles/404.css') {
			filePath = 'styles/404.css'
		} else if (request.url === '/img/cat-404.png') {
			filePath = 'img/cat-404.png'
		}

		const ext = path.extname(filePath)
		let contentType = 'text/html'
        if (ext === '.png') contentType = 'image/png'
		if (ext === '.css') contentType = 'text/css'
		if (ext === '.js') contentType = 'text/javascript'

		fs.readFile(filePath, (err, content) => {
			if (err) {
				if (err.code === 'ENOENT') {
					// Если файл не найден, читаем 404.html
					fs.readFile('pages/404.html', (err, content) => {
						response.writeHead(404, { 'Content-Type': 'text/html' })
						response.end(content, 'utf-8')
					})
				} else {
					response.writeHead(500)
					response.end('Server Error: ' + err.code)
				}
			} else {
				response.writeHead(200, { 'Content-Type': contentType })
				response.end(content, 'utf-8')
			}
		})
	})
	.listen(3000, '127.0.0.1', () => {
		console.log('Server running at http://127.0.0.1:3000/')
	})
