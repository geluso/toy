import './_machiene.sass'

import Chat from '../chat'
import Pins from '../pins'
import Clock from '../clock'
import Memory from '../memory'
import Registers from '../registers'


class Machiene extends React.Component {
  shouldComponentUpdate(){ return false }
  render() {
    return (
      <div className='machiene'>
        <Clock />
        <Chat />
        <Pins />
        <Registers />
        <Memory />
      </div>
    )
  }
}

export default Machiene
