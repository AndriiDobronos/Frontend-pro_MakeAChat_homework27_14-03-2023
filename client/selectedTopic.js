function findParentLi(el,parents) {
    if(!el) {
        return null
    }
    if(parents.includes(el)) {
        return el
    }
    return findParentLi(el.parentNode, parents)
}

const currentTopicIndexKey = document.title + '-currentTopicIndex'
const allLis = [...document.querySelectorAll('body > ul > li')]
let currentLi = localStorage.getItem(currentTopicIndexKey)
if (currentLi){
    allLis[currentLi].className = 'active'
}

document.querySelector('ul').addEventListener('click', e => {
    const nextLi = findParentLi(e.target, allLis)
    if(!nextLi) {
        return
    }
    if(currentLi) {
        allLis[currentLi].className = ''
    }
    currentLi = String(allLis.indexOf(nextLi))
    localStorage.setItem(currentTopicIndexKey, currentLi)
    allLis[currentLi].className = 'active'
})
 const result = 'Done'
export {
    result
}