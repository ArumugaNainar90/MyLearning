// How to remove integer from string

function removeString(str)
{
   return str.replace(/\d/g, '')
}

console.log(removeString('Hello123'))