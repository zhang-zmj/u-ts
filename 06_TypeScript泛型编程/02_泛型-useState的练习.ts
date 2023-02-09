// 元组： useState函数
function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState
  function setState(newState: Type) {
    state = newState
  }
  return [state, setState]
}

// 初始化
const [count, setCount] = useState(100)
console.log(count, setCount(10))

const [message, setMessage] = useState('Hello World')
console.log(message, setMessage('zhangmj'))

const [banner, setBanners] = useState<any>([10, 20, 30, 40])
console.log(banner, setBanners([]))

export {}
