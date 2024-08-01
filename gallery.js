const mainImages = document.querySelectorAll('.main-img img')
const thumbNails = document.querySelectorAll('.thumb-list div')
const lightboxMainImages = document.querySelectorAll('.lightbox .main-img img')
const lightboxThumbs = document.querySelectorAll('.lightbox .thumb-list div')
const lightbox = document.querySelector('.lightbox')
const iconClose = document.querySelector('.icon-close')
const iconPrev = document.querySelector('.icon-prev')
const iconNext= document.querySelector('.icon-next')

let currentIndex = 0;


const changeImage = (index, mainImages, thumbNails) => {
    mainImages.forEach((img) => {
        img.classList.remove('active')
    })

    thumbNails.forEach((thumb) => {
      thumb.classList.remove('active')
    })

    mainImages[index].classList.add('active')
    thumbNails[index].classList.add('active')

    currentIndex = index
}


thumbNails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      changeImage(index, mainImages, thumbNails)
    })
})

lightboxThumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    changeImage(index, lightboxMainImages, lightboxThumbs)
  })
})

mainImages.forEach((img, index) => {
    img.addEventListener('click', () =>{
      lightbox.classList.add('active')
      changeImage(index, lightboxMainImages, lightboxThumbs)
    })
})

iconPrev.addEventListener('click', () => {
  if (currentIndex <= 0 ){
    changeImage(mainImages.length - 1, lightboxMainImages, lightboxThumbs)
  } else {
    changeImage(currentIndex - 1, lightboxMainImages, lightboxThumbs)
  }
})

iconNext.addEventListener('click', () => {
  if (currentIndex >= mainImages.length - 1 ){
    changeImage(0, lightboxMainImages, lightboxThumbs)
  } else {
    changeImage(currentIndex + 1, lightboxMainImages, lightboxThumbs)
  }
})


iconClose.addEventListener('click', () =>{
  lightbox.classList.remove('active')
})
