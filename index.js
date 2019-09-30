var data = []

data['picture'] = []
data['picture']['pixel'] = []
data['picture']['pixel']['name']
data['picture']['pixel']['timer'] = function () {
	for (var i = 0; i < data['picture']['size']['width']; i ++) {
		for (var j = 0; j < data['picture']['size']['height']; j ++) {
			if (!data['picture']['pixel'][i]) {
				data['picture']['pixel'][i] = []
			}
			if (!data['picture']['pixel'][i][j]) {
				data['picture']['pixel'][i][j] = []
			}
			data['picture']['pixel'][i][j] = 'empty'
		}
	}
}
data['picture']['size'] = []
data['picture']['size']['width']
data['picture']['size']['height']
data['picture']['size']['timer'] = function () {
	data['picture']['size']['width'] = document.body.clientWidth
	data['picture']['size']['height'] = document.body.clientHeight
}
data['picture']['paint'] = function (picture, x, y) {
	document.getElementById('canvas').getContext('2d').drawImage(picture, x, y)
}
data['picture']['update'] = []
data['picture']['update']['timer'] = function () {
	document.getElementById('canvas').fillStyle = "#E5CCCC"
	document.getElementById('canvas').getContext('2d').fillRect(0, 0, document.body.clientWidth, document.body.clientHeight)
	
	document.getElementById('canvas').width = document.body.clientWidth
	document.getElementById('canvas').height = document.body.clientHeight
}

data['mouse'] = []
data['mouse']['x']
data['mouse']['y']
data['mouse']['move'] = document.addEventListener('mousemove', function(event) {
	data['mouse']['x'] = event.x
	data['mouse']['y'] = event.y
})
data['mouse']['left'] = []
data['mouse']['left']['click'] = false
data['mouse']['left']['down'] = document.addEventListener('mousedown', function(event) {if (event.which == 1) {
	data['mouse']['left']['click'] = true
	//console.log(data['picture']['pixel'][data['mouse']['x']][data['mouse']['y']])
}})
data['mouse']['left']['up'] = document.addEventListener('mouseup', function(event) {if (event.which == 1) {
	data['mouse']['left']['click'] = false
}})
data['mouse']['left']['timer'] = function () {
	
}

data['map'] = []
data['map']['x'] = []
data['map']['y'] = []
data['map']['width'] = 198
data['map']['height'] = 57
data['map']['picture'] = []
data['map']['picture']['size'] = []
data['map']['picture']['size']['width'] = 200
data['map']['picture']['size']['height'] = 400
data['map']['picture']['load'] = []
data['map']['picture']['load']['timer'] = function () {
	if (!data['map']['picture'][0]) {
		for (var i = 0; i <= 2; i ++) {
			data['map']['picture'][i] = new Image()
			data['map']['picture'][i].src = 'picture/map/' + i + '.png'
		}
	}
}
data['map']['picture']['paint'] = []
data['map']['picture']['paint']['timer'] = function () {
	for (var i = -1; i <= 1; i ++) {
		for (var j = -1; j <= 1; j ++) {
			if (!data['map'][i]) {
				data['map'][i] = []
			}
			if (!data['map'][i][j]) {
				data['map'][i][j] = []
			}
			
			data['map'][i][j]['x'] = data['picture']['size']['width'] / 2 - data['map']['picture']['size']['width'] / 2 - data['map']['width'] / 2 * j + data['map']['width'] / 2 * i
			data['map'][i][j]['y'] = data['picture']['size']['height'] / 2 - data['map']['picture']['size']['height'] / 2 + data['map']['height'] * j + data['map']['height'] * i
			
			for (var m = data['map'][i][j]['x'] + data['map']['picture']['size']['width'] / 2 - 45; m < data['map'][i][j]['x'] + data['map']['picture']['size']['width'] / 2 + 45; m ++) {
				for (var n = data['map'][i][j]['y'] + data['map']['picture']['size']['height'] / 2 - 45; n < data['map'][i][j]['y'] + data['map']['picture']['size']['height'] / 2 + 45; n ++) {
					if (!data['picture']['pixel'][m]) {
						data['picture']['pixel'][m] = []
					}
					if (!data['picture']['pixel'][m][n]) {
						data['picture']['pixel'][m][n] = []
					}
					
					data['picture']['pixel'][m][n] = 'map_' + i + '_' + j
				}
			}
			
			data['map']['mouse']['over'](i, j)
			data['map']['mouse']['above'](i, j)
			data['map']['mouse']['click'](i, j)
		}
	}
}
data['map']['mouse']= []
data['map']['mouse']['over'] = function (i, j) {
	
	if (data['mouse']['x']) {
		if (data['mouse']['y']) {
			if (data['picture']['pixel'][data['mouse']['x']][data['mouse']['y']] != 'map_' + i + '_' + j) {
				data['picture']['paint'](data['map']['picture'][0], data['map'][i][j]['x'], data['map'][i][j]['y'])
			}
		}
	}
}
data['map']['mouse']['above'] = function (i, j) {
	if (data['mouse']['x']) {
		if (data['mouse']['y']) {
			if (data['picture']['pixel'][data['mouse']['x']][data['mouse']['y']] == 'map_' + i + '_' + j) {
				if (data['mouse']['left']['click'] == false) {
					data['picture']['paint'](data['map']['picture'][1], data['map'][i][j]['x'], data['map'][i][j]['y'])
				}
			}
		}
	}
}
data['map']['mouse']['click'] = function (i, j) {
	if (data['mouse']['x']) {
		if (data['mouse']['y']) {
			if (data['picture']['pixel'][data['mouse']['x']][data['mouse']['y']] == 'map_' + i + '_' + j) {
				if (data['mouse']['left']['click'] == true) {
					
					data['picture']['paint'](data['map']['picture'][2], data['map'][i][j]['x'], data['map'][i][j]['y'])
				}
			}
		}
	}
}

data['button'] = []
data['button']['home'] = []
data['button']['home']['x']
data['button']['home']['y']
data['button']['home']['width'] = 100
data['button']['home']['height'] = 100
data['button']['home']['picture'] = []
data['button']['home']['picture']['load'] = []
data['button']['home']['picture']['load']['timer']  = function () {
	if (!data['button']['home']['picture'][0]) {
		for (var i = 0; i <= 1; i ++) {
			data['button']['home']['picture'][i] = new Image()
			data['button']['home']['picture'][i].src = 'picture/button/home/' + i + '.png'
		}
	}
}
data['button']['home']['picture']['paint'] = []
data['button']['home']['picture']['paint']['timer']  = function () {
	data['button']['home']['x'] = 0
	data['button']['home']['y'] = 0
	
	for (var i = data['button']['home']['x']; i < data['button']['home']['width']; i ++) {
		for (var j = data['button']['home']['y']; j < data['button']['home']['height']; j ++) {
			if (!data['picture']['pixel'][i]) {
				data['picture']['pixel'][i] = []
			}
			if (!data['picture']['pixel'][i][j]) {
				data['picture']['pixel'][i][j] = []
			}
			data['picture']['pixel'][i][j] = 'button_home'
		}
	}
	data['button']['home']['mouse']['over']()
	data['button']['home']['mouse']['above']()
	data['button']['home']['mouse']['click']()
}
data['button']['home']['mouse'] = []
data['button']['home']['mouse']['over'] = function () {
	if (data['mouse']['x']) {
		if (data['mouse']['y']) {
			if (data['picture']['pixel'][data['mouse']['x']][data['mouse']['y']] != 'button_home') {
				data['picture']['paint'](data['button']['home']['picture'][0], 0, 0)
			}
		}
	}
}
data['button']['home']['mouse']['above'] = function () {
	if (data['mouse']['x']) {
		if (data['mouse']['y']) {
			if (data['picture']['pixel'][data['mouse']['x']][data['mouse']['y']] == 'button_home') {
				if (data['mouse']['left']['click'] == false) {
					data['picture']['paint'](data['button']['home']['picture'][1], 0, 0)
				}
			}
		}
	}
}
data['button']['home']['mouse']['click'] = function () {
	if (data['mouse']['x']) {
		if (data['mouse']['y']) {
			if (data['picture']['pixel'][data['mouse']['x']][data['mouse']['y']] == 'button_home') {
				if (data['mouse']['left']['click'] == true) {
					data['picture']['paint'](data['button']['home']['picture'][0], 0, 0)
				}
			}
		}
	}
}

data['player'] = []
data['player']['x'] = 0
data['player']['y'] = 0

data['timer'] = setInterval(function () {
	data['picture']['size']['timer']()
	data['picture']['update']['timer']()
	data['picture']['pixel']['timer']()
	
	data['mouse']['left']['timer']()
	
	data['map']['picture']['load']['timer']()
	data['map']['picture']['paint']['timer']()
	
	data['button']['home']['picture']['load']['timer']()
	data['button']['home']['picture']['paint']['timer']()
}, 40)