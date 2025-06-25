function greeting(value, value1)
{
   console.log(`val - ${value}, name - ${this.name}, value1 - ${value1} `)
}

const option = {name : 'trst'}

greeting.call(option, 'HI')
greeting.apply(option, ['HI','how r u'])

let fn = greeting.bind(option, 'HI', 'how r u')
fn();