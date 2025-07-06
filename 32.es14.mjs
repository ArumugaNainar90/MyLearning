const originalNumbers = [1,2,3,4,5]

const sort = originalNumbers.toSorted()
const reverse = originalNumbers.toReversed()
const splice = originalNumbers.toSpliced()
const rep = originalNumbers.copyWithin(2, 8);


class Person  {
    name = 'name'

    #age = 30

}

const per = new Person()
console.log('name', per.name)
//console.log('age', per.#name)

function pro(){
    return new Promise((resolve, reject) => {
        resolve('success')
    })
}

await pro()