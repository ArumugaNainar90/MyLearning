let globallet = "globallet"
function outer()
{
    let outerlet = "outerlet"

    function inner(){
                 let innerlet = "innerlet"
                 console.log('globallet', globallet)
                 console.log('outerlet', outerlet)
                 console.log('innerlet', innerlet)
    }

    inner()
}

outer()