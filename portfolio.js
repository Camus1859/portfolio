'use scrict'

const body = document.querySelector('body')
const projectsContainer = document.querySelector('.projects-container')
const bio = document.querySelector('.bio')
const bio2 = document.querySelector('.bio2')
const info = document.querySelectorAll('.info')
const body2 = document.querySelector('.body')
const html = document.querySelector('html')


const displayMenuItems=(e)=>{
  if(e.target.id === "projects"){
    displayProjects()
  }
  else if(e.target.id === "name"){
    displayPrimaryInfo()
  }
  else if(e.target.id === "about-me"){
    displayAboutMe()
  }
}


const displayProjects=()=>{
  info.forEach(item=>(!item.classList.contains('projects-container') ?  item.classList.add('hidden') 
  : item.classList.remove('hidden')))


} 

const displayPrimaryInfo=()=>{
  info.forEach(item=>(!item.classList.contains('bio') ? item.classList.add('hidden') 
  : item.classList.remove('hidden')))


}

const displayAboutMe=()=>{
  info.forEach(item=>(!item.classList.contains('bio2') ? item.classList.add('hidden')
  : item.classList.remove('hidden')))


}
  
body.addEventListener('click', displayMenuItems)
