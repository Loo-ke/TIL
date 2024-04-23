function hash(){
  const table = []
  function set(value = -1){
    table[value] = value
  }
  function get(value = -1){
    return table[value]
  }
  function getTable(){
    return table
  }
  return {
    set,get,getTable
  }
}

const func = hash()

func.set('test')
console.log(func.getTable())