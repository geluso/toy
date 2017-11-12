import './style/main.sass'
import ReactDom from 'react-dom'
import App from './component/app'

const container = document.createElement('div')
document.body.appendChild(container)
ReactDom.render(<App />, container)


import * as cpu from './lib/cpu.js'
import * as util from './lib/util.js'
import * as clock from './lib/clock.js'
import * as memory from './lib/memory.js'
import * as assembler from './lib/assembler.js'

window.cpu = cpu
window.util = util
window.clock = clock
window.memory = memory
window.assembler = assembler 
