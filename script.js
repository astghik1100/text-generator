function publish(){
    let text=document.querySelector('.text')
    console.log(text.value)
    let fontsize=document.querySelector('#fontsize')
    console.log(fontsize.value)
    let fontfamily=document.querySelector('#fontfamily')
    console.log(fontfamily.value)
    let color=document.querySelector('#color')
    console.log(color.value)
    let bg=document.querySelector('#bgcolor')
    console.log(bg.value)
    let field=document.querySelector('.field')

    field.innerHTML=text.value
    field.style.fontSize=fontsize.value+'px'
    field.style.fontFamily=fontfamily.value
    field.style.color=color.value
    field.style.backgroundColor=bg.value
}
