var homeBtn = document.querySelector('#home')
var blogBtn = document.querySelector('#blog')
var helpBtn = document.querySelector('#help')
var codeBtn = document.querySelector('#code')
var aboutBtn = document.querySelector('#about')
var colorBox = document.querySelector('#colorBox')

var tabHome = document.querySelector('.home')
var tabBlog = document.querySelector('.blog')
var tabHelp = document.querySelector('.help')
var tabCode = document.querySelector('.code')
var tabAbout = document.querySelector('.about')

var homeContent = document.querySelector('#homeContent')
var blogContent = document.querySelector('#blogContent')
var helpContent = document.querySelector('#helpContent')
var codeContent = document.querySelector('#codeContent')
var aboutContent = document.querySelector('#aboutContent')


homeBtn.addEventListener('click', () => {
    colorBox.style.top = '8px'

    tabHome.style.color = 'white'
    tabBlog.style.color = 'black'
    tabHelp.style.color = 'black'
    tabCode.style.color = 'black'
    tabAbout.style.color = 'black'


    homeContent.style.display = 'block'
    blogContent.style.display = 'none'
    helpContent.style.display = 'none'
    codeContent.style.display = 'none'
    aboutContent.style.display = 'none'
    
});
blogBtn.addEventListener('click', () => {
    colorBox.style.top = '65px'
    tabHome.style.color = 'black'
    tabBlog.style.color = 'white'
    tabHelp.style.color = 'black'
    tabCode.style.color = 'black'
    tabAbout.style.color = 'black'

    homeContent.style.display = 'none'
    blogContent.style.display = 'block'
    helpContent.style.display = 'none'
    codeContent.style.display = 'none'
    aboutContent.style.display = 'none'
});
helpBtn.addEventListener('click', () => {
    colorBox.style.top = '125px'
    tabHome.style.color = 'black'
    tabBlog.style.color = 'black'
    tabHelp.style.color = 'white'
    tabCode.style.color = 'black'
    tabAbout.style.color = 'black'

    homeContent.style.display = 'none'
    blogContent.style.display = 'none'
    helpContent.style.display = 'block'
    codeContent.style.display = 'none'
    aboutContent.style.display = 'none'
});
codeBtn.addEventListener('click', () => {
    colorBox.style.top = '185px'
    tabHome.style.color = 'black'
    tabBlog.style.color = 'black'
    tabHelp.style.color = 'black'
    tabCode.style.color = 'white'
    tabAbout.style.color = 'black'

    homeContent.style.display = 'none'
    blogContent.style.display = 'none'
    helpContent.style.display = 'none'
    codeContent.style.display = 'block'
    aboutContent.style.display = 'none'
});
aboutBtn.addEventListener('click', () => {
    colorBox.style.top = '245px'
    tabHome.style.color = 'black'
    tabBlog.style.color = 'black'
    tabHelp.style.color = 'black'
    tabCode.style.color = 'black'
    tabAbout.style.color = 'white'

    homeContent.style.display = 'none'
    blogContent.style.display = 'none'
    helpContent.style.display = 'none'
    codeContent.style.display = 'none'
    aboutContent.style.display = 'block'
});