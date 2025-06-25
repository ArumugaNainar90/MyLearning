let testData = {
    value : 0,
    add(num) {
        this.value += num
        return this
    },
    getValue(){
        return this.value
    }
}

console.log(testData.add(5).getValue())