/********* DATA *********/
const header = [
    {
        'about': "About",
        'hability': "Habilities",
        'works': "Works",
        'skills': "Skills",
        'contact': "Contact"
    },{
        'about': "A propos",
        'hability': "Habilités",
        'works': "Travails",
        'skills': "Competences",
        'contact': "Contact"
    }
]

const aboutUs = [
    {
        'h1-1': "WE ARE",
        'h1-2': "THE PIONEERCODER01 TEAM",
        'p': "We are in our 2d year in informatic of licence. Developer fulstack javascript. Coding is our pation, we like challenging. To know more about us, see our cv below.",
        'btn1': "Contact",
        'btn2': "Doxnload CV"
    },{
        'h1-1': "NOUS SOMMES",
        'h1-2': "LE TEAM PIONEERCODER01",
        'p': "2ém année de formation en licence. Des developpeurs fulstack Javascript. Nous sommes pationnés de jouer avec nos code, des challengers! Pour plus d'info, veillez visionner notre CV.",
        'btn1': "Contacter",
        'btn2': "Télecharger CV"
    }
]





/*********** APPARITION AU DEFILEMENt ***********/

const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const visible = function (entries){
    entries.forEach(function (entry) {
         if (entry.intersectionRatio > ratio){
            if(entry.target.classList.contains('topDef')){
              entry.target.classList.add('show-from-top')  
            }else if(entry.target.classList.contains('leftDef')){
              entry.target.classList.add('show-from-left')  
            }else if(entry.target.classList.contains('rightDef')){
              entry.target.classList.add('show-from-right')  
            
            }else if(entry.target.classList.contains('bottomDef')){
              entry.target.classList.add('show-from-bottom')  
            }
         }else{
            if(entry.target.classList.contains('topDef')){
              entry.target.classList.remove('show-from-top')  
            }else if(entry.target.classList.contains('leftDef')){
              entry.target.classList.remove('show-from-left')  
            }else if(entry.target.classList.contains('rightDef')){
              entry.target.classList.remove('show-from-right')  
            
            }else if(entry.target.classList.contains('bottomDef')){
              entry.target.classList.remove('show-from-bottom')  
            }
         }
        
    });
}

const observer = new IntersectionObserver(visible, options)
document.querySelectorAll('[class*="observe-"]').forEach(function (cach) {
    observer.observe(cach)
})





let section = [...document.querySelectorAll('.section')]
let links = [...document.querySelectorAll('.nav li a')]

window.onscroll=()=>{
  section.forEach(sec=>{
    let top = window.scrollY + (window.innerHeight/3);
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>=offset && top<offset+height){
      links.forEach(link=>{
        link.classList.remove('active');
        
        document.querySelector(`ul li a[href*=${id}]`).classList.add('active')
      })
    }
  })
  
  if(document.querySelector('.settings').classList.contains('active')){
    document.querySelector('.settings').classList.remove('active');
    document.querySelector('.main__contents').style.zIndex = "1";
  }
}

function cursorMove(){
    var cursor = document.getElementById('customCursor');
    document.addEventListener('mousemove', function (e) {
        var cursorWidth = cursor.offsetWidth;
        var x = e.clientX - cursorWidth / 2;
        var y = e.clientY - cursorWidth / 2;
        cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    });
    var links = document.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('mouseover', function () {
            cursor.classList.add('on-link');
        });
        link.addEventListener('mouseout', function () {
            cursor.classList.remove('on-link');
        })
    }
    var buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        btn.addEventListener('mouseover', function () {
            cursor.classList.add('on-link');
        });
        btn.addEventListener('mouseout', function () {
            cursor.classList.remove('on-link');
        })
    }

};

document.addEventListener('mousemove',parallax);
function parallax(e){
    this.querySelectorAll(".parlx").forEach(layer=>{
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerWidth - e.pageY*speed)/100
        
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/******** LOADER ********/

        window.addEventListener('load',()=>{
            const loader = document.querySelector(".svgdiv");
            const showP = document.querySelector('.hidenPioneer');

            setTimeout(() => {
                loader.classList.add('loader_hidden');
            }, 2000);

            setTimeout(() => {
                showP.classList.add('showP');
            }, 1000);
            setTimeout(() => {
                loader.classList.add('stopAnim')
            }, 500);
            
            
            loader.addEventListener('transitionend',()=>{
                    setTimeout(() => {
                        document.body.removeChild(loader);
                    }, 3000);
            })


        })

/**************** ******************/


    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:true,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1900:{
            items:3
        }
    }
})



// ** CURSOR ** //

 cursorMove()       

//  ** MENU ** //

const menuToogle = document.querySelectorAll('.toogle');
menuToogle.forEach(menuBtn=>menuBtn.addEventListener('click',()=>{
    menuToogle.forEach(mbtn=>{
        mbtn.classList.toggle('active')
    })
    document.querySelector('.navigationMobile').classList.toggle('active');
    
}))

const lis = document.querySelectorAll('.navigationMobile li');

lis.forEach(li=>li.addEventListener('click',()=>{
     menuToogle.forEach(mbtn=>{
        mbtn.classList.toggle('active')
    })
    document.querySelector('.navigationMobile').classList.toggle('active');
}))


/******* HANDLIN SETTINGS ************/

let btnSetting = document.querySelector('.toogleSettings svg')

btnSetting.addEventListener('click',()=>{
    document.querySelector('.settings').classList.toggle('active')
    if(getComputedStyle(document.querySelector('.main__contents'),null).zIndex==1){
        document.querySelector('.main__contents').style.zIndex = "-1";
    }else{
        document.querySelector('.main__contents').style.zIndex = "1";
    }
})


/********* THEME MODE **********/

let fr= document.querySelector('#fr')
let en= document.querySelector('#en')

/****** DOM ELEMENTS ******/
/**header */

let a1 = document.querySelector('#a-1')
let a2 = document.querySelector('#a-2')
let a3 = document.querySelector('#a-3')
let a4 = document.querySelector('#a-4')
let a5 = document.querySelector('#a-5')

let abt1 = document.querySelector('#abt-h1-1')
let abt2 = document.querySelector('#abt-h1-2')
let abt3 = document.querySelector('#abt-p')
let abt4 = document.querySelector('#abt-btn1')
let abt5 = document.querySelector('#abt-btn2')



en.addEventListener('click',()=>{
   a1.innerHTML = header[0]['about']
   a2.innerHTML = header[0]['hability']
   a3.innerHTML = header[0]['works']
   a4.innerHTML = header[0]['skills']
   a5.innerHTML = header[0]['contact']

   abt1.innerHTML = aboutUs[0]['h1-1']
   abt2.innerHTML = aboutUs[0]['h1-2']
   abt3.innerHTML = aboutUs[0]['p']
   abt4.innerHTML = aboutUs[0]['btn1']
   abt5.innerHTML = aboutUs[0]['btn2']

   changeTitle(0)
   
})

fr.addEventListener('click',()=>{
   a1.innerHTML = header[1]['about']
   a2.innerHTML = header[1]['hability']
   a3.innerHTML = header[1]['works']
   a4.innerHTML = header[1]['skills']
   a5.innerHTML = header[1]['contact']


   abt1.innerHTML = aboutUs[1]['h1-1']
   abt2.innerHTML = aboutUs[1]['h1-2']
   abt3.innerHTML = aboutUs[1]['p']
   abt4.innerHTML = aboutUs[1]['btn1']
   abt5.innerHTML = aboutUs[1]['btn2']

   changeTitle(1)
})

