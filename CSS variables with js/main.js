const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    //logging out the changing values in console
    // console.log(this.value);
    const suffix = this.dataset.sizing || ''
    // console.log(this.dataset);
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => { //iterating over each Node List.
    input.addEventListener('change', handleUpdate)//listening for change event
    input.addEventListener('mousemove', handleUpdate)//listening for mousemove event
})