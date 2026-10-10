import circle from './gola.js'
import box from './box.js'

function parent() {
    return React.createElement('div', { id: 'parent' }, [box() , gola()])
}

export default parent 