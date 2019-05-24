const menu = [
    {
        category: 'starters',
        title: 'Dolmativa',
        desc: 'stuffed wine leaves with rice and tomato'
    },
    {
        category: 'starters',
        title: 'Dolmativa',
        desc: 'stuffed wine leaves with rice and tomato'
    },
    {
        category: 'starters',
        title: 'Dolmativa',
        desc: 'stuffed wine leaves with rice and tomato'
    }
]

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

function createListElement(arr){
    liString = ''
    const lis = arr.map(el => {
        str = createMenuItem(el.title, el.desc)
        liString += str
    })
    console.log('All LIs: ', liString)
    return `<ul class="list">${liString}</ul>`
}

function createMenu(){
    const starters = menu.filter(el => el.category === 'starters')
    console.log('All Starters: ', starters)
    startersString = createListElement(starters)
    console.log('Whole List elem: ', startersString)
    const goal = $("h6:contains('Starters')")
    console.log('This is it: ', goal)
    goal[0].insertAdjacentHTML('afterend', startersString)
    $('.list').hide();
}

const createMenuItem = function(title, desc){
    return `<li class="item"><h3>${title}</h3><p>${desc}</p></li>`
}

createMenu()