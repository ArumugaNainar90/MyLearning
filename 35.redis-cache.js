import {createClient} from 'redis'
const client = createClient({
  url : 'redis://localhost:6379'
})

await client.connect()
console.log('Connected to Redis!');

// SET and GET

// await client.set('id', 'val-123')
// const value = await client.get('id')
// console.log('value', value)

// DEL

// await client.del('id')
// const value = await client.get('id')
// console.log('value', value)

// SET with Expiry
//await client.set('id', 'val-123', {EX: 120})
// const value = await client.get('id')
// console.log('value', value)


// await client.set('id1', 'val-456')
// const exist = await client.exists('id1')
// console.log('exist', exist)
// await client.expire('id1', 60)
//const ttl = await client.ttl('id1')
//console.log('ttl', ttl)

//await client.hSet('val-obj', {id: 1, name: 'test'})


// it will retrieve all json object
// const val = await client.hGetAll('val-obj')
// console.log('val', val)
// console.log('val', val.id)
// console.log('val', val.name)

// it will get the particular field value
// const valuw = await client.hGet('val-obj', 'id')
// console.log('valuw', valuw)

// await client.expire('val-obj', 120)

// it will delete the particular field value
//await client.hDel('val-obj', 'name')


// if u want to store the value in array then stringify the object and store it
// await client.set('val-obj123', JSON.stringify([{id: 1, name: 'test'}, {id: 2, name: 'test1'}]))

// let res = await client.get('val-obj123')
// let result = JSON.parse(res)
// console.log('res', result[0])

// await client.set('val-arr', JSON.stringify([1,2,3]))
// let val = await client.get('val-arr')
// let res = JSON.parse(val)
// res.push(4)

// await client.set('val-arr',JSON.stringify(res))