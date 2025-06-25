function pro(name)
{
    this.name = name
}


pro.prototype.getName = function () {
     return `Hello, ${this.name}`
}

let varpro = new pro('test')
let res = varpro.getName()
console.log('res', res)

// new feature introduced in javascript using class for prototype

class MyClass {
    constructor(name)
    {
       this.name = name
    }

    getName(){
        return `hello, ${this.name}`
    }
}

const intClass = new MyClass('testing');
let response = intClass.getName()
console.log('class response', response)