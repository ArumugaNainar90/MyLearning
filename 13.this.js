// in arrow functionns in javascript do not have their own this binding


const person = {
    name: 'test',
    greek: function() {
         console.log('log', this.name)
    },
    arrowFunction : () => {
        console.log('arrowFunction', this.name)
    }
}

person.greek()
person.arrowFunction()