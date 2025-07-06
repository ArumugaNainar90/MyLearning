const inputtxt = document.getElementById('inputBox');
const defaultName = document.getElementById('default')
const debounceName = document.getElementById('debounce')
const throttle = document.getElementById('throttle')


const updateDebounce = debounce((text) => {
 debounceName.textContent = text
}, 1000)


function debounce(fn, limit) {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(...args)
        }, limit)
    }
}


inputtxt.addEventListener("input", e => {
    defaultName.textContent = e.target.value
    updateDebounce(e.target.value)
})