var menu = []

$.getJSON("./assets/menu.json", (json) => {
    menu = json
    createMenu()
})


$('.toggler').click(function() {
    const list = $(this).next();
    list.slideToggle();
});

$(window).scroll(function(){
    if($(this).scrollTop() > 700){
        $('nav').fadeIn()
    } else {
        $('nav').fadeOut()
    }
})

$('#starter').click(function(){
    $(".menu-section").get(0).scrollIntoView({behavior: 'smooth'}); 
})

function createListElement(arr){
    liString = ''
    const lis = arr.map(el => {
        str = createMenuItem(el.title, el.desc, el.price)
        liString += str
    })
    // console.log('All LIs: ', liString)
    return `<ul class="list">${liString}</ul>`
}

function createMenu(){
    // CATEGORY
    const starters = menu.filter(el => el.category === 'starters')
    console.log('All Starters: ', starters)
    startersString = createListElement(starters)
    // console.log('Whole List elem: ', startersString)
    let goal = $("h6:contains('Starters')")
    // console.log('This is it: ', goal)
    goal[0].insertAdjacentHTML('afterend', startersString)
    
    // CATEGORY
    const salads = menu.filter(el => el.category === 'salads')
    // console.log('All Salads: ', salads)
    saladsString = createListElement(salads)
    // console.log('Whole List elem: ', saladsString)
    goal = $("h6:contains('Salads')")
    // console.log('This is it: ', goal)
    goal[0].insertAdjacentHTML('afterend', saladsString)

    // CATEGORY
    const seafood = menu.filter(el => el.category === 'Sea Food')
    seafoodString = createListElement(seafood)
    goal = $("h6:contains('Sea Food')")
    goal[0].insertAdjacentHTML('afterend', seafoodString)
    
    // CATEGORY
    const traditional = menu.filter(el => el.category === 'traditional')
    traditionalString = createListElement(traditional)
    goal = $("h6:contains('Traditional Greek Food')")
    goal[0].insertAdjacentHTML('afterend', traditionalString)
    
    // CATEGORY
    const burger = menu.filter(el => el.category === 'burger')
    burgerString = createListElement(burger)
    goal = $("h6:contains('Burger & Sandwiches')")
    goal[0].insertAdjacentHTML('afterend', burgerString)
    
    // CATEGORY
    const pasta = menu.filter(el => el.category === 'Pasta & Risotto')
    pastaString = createListElement(pasta)
    goal = $("h6:contains('Pasta & Risotto')")
    goal[0].insertAdjacentHTML('afterend', pastaString)
    
    // CATEGORY
    const children = menu.filter(el => el.category === 'children')
    childrenString = createListElement(children)
    goal = $("h6:contains('Children')")
    goal[0].insertAdjacentHTML('afterend', childrenString)
    
    // CATEGORY
    const vegan = menu.filter(el => el.category === 'vegan')
    veganString = createListElement(vegan)
    goal = $("h6:contains('Vegan Choices')")
    goal[0].insertAdjacentHTML('afterend', veganString)

    // CATEGORY
    // const drinks = menu.filter(el => el.category === 'drinks')
    // drinksString = createListElement(drinks)
    // goal = $("h6:contains('Drinks')")
    // goal[0].insertAdjacentHTML('afterend', drinksString)
    
    $('.list').hide();
}

const createMenuItem = function(title, desc, price){
    return `<li class="item"><h3>${title} <span style="float: right">${price}</span></h3><p>${desc}</p></li>`
}