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
        'h1-2': "THE PIONEERCODER TEAM",
        'p': "We blend the engineering of Fullstack JavaScript with the passion of a creative designer's mind. Every stimulating challenge is an exciting opportunity for us. We invite you to review our resume for a more in-depth exploration.",
        'btn1': "Contact",
        'btn2': "Download resume"
    },{
        'h1-1': "NOUS SOMMES",
        'h1-2': "LE TEAM PIONEERCODER",
        'p': "Nous harmonisons l'ingénierie du Fullstack JavaScript avec la passion d'un esprit créatif de designer. Chaque défi stimulant est pour nous une opportunité enthousiasmante. Nous vous convions à consulter notre CV pour une exploration plus approfondie.",
        'btn1': "Contacter",
        'btn2': "Télecharger CV"
    }
]


const habilities = [
    {
        'h1-1': "Habilities",
        'h1-2': "Experience",
        'h1-3': "Creativity",
        'h1-4': "Innovative",
        'p1': "As a developer, our experience is characterized by our ability to solve complex problems effectively and creatively through our skills in programming and computer logic.",
        'p2': "We firmly believe that creativity is an essential asset in the field of development, because it allows us to push the limits, to bring innovation and to differentiate our achievements from others.",
        'p3': "We are passionate about innovation and we like to explore innovative ideas to solve problems and create applications that can have a positive impact in the real world.",
    },{
        'h1-1': "Habilités",
        'h1-2': "Expérience",
        'h1-3': "Creativiter",
        'h1-4': "Innovant",
        'p1': "En tant que développeur, notre expérience se caractérise par nos capacité à résoudre des problèmes complexes de manière efficace et créative grâce à nos compétences en programmation et en logique informatique.",
        'p2': "Nous croyons fermement que la créativité est un atout essentiel dans le domaine du développement, car elle permet de repousser les limites, d'apporter de l'innovation et de différencier nos réalisations des autres.",
        'p3':"Nous sommes passionné par l'innovation et nous aimons explorer des idées novatrices pour résoudre des problèmes et créer des applications qui peuvent avoir un impact positif dans le monde réel."
    }
]


const worksData = [
    {
        'w1': "An application respresenting a funkontany in Menabe. Developed by Pioneer.",
        'w2': "Visit",
        'w3': "A small application where children can have fun during these holidays. Developed by Pioneer.",
        'w4': "It is an application to manage the entry and exit transactions of treasury within a church. Developed by Pioneer.",
        'w5': "Integration of a web model from Behance. Developed by Pioneer.",
        'w6': "Works",
        'w7': "Creation of a web application promoting the communication between ENI students."
            },{
        'w1': "Une application respresentant un fonkontany à Menabe. Developper par Pioneer.",
        'w2': "Consulter",
        'w3': "Une petite application auquelle les enfants peuvent se divertir pendant les vacance. Developper par Pioneer.",
        'w4': "Il s'agit d'une application pour gérer les transactions d'entrée et de sortie de trésorerie au sein d'une église. Développé par Pioneer.",
        'w5': "Intégration d'une maquette web provenant de Behance. Developper par Pioneer.",
        'w6': "Travails",
        'w7' : "Création d'une application web favorisant la communication entre les étudiants de l'ENI."
    }
]


const footer = [
    {
        'f1': "Skills",
        'f2': "Send",
        'f3': "THANKS FOR ",
        'f4': "YOUR ",
        'f5': "VISIT ",
            },{
        'f1': "Competences",
        'f2': "Envoyer",
        'f3': "MERCI POUR ",
        'f4': "VOTRE ",
        'f5': "VISITE ",
    }
]



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


let hB1 = document.querySelector('.hB1')
let hB2 = document.querySelector('.hB2')
let hB3 = document.querySelector('.hB3')
let hB4 = document.querySelector('.hB4')
let hB5 = document.querySelector('.hB5')
let hB6 = document.querySelector('.hB6')
let hB7 = document.querySelector('.hB7')


let w1 = document.querySelector('.w1')
let w2 = document.querySelectorAll('.w2')
let w3 = document.querySelector('.w3')
let w4 = document.querySelector('.w4')
let w5 = document.querySelector('.w5')
let w6 = document.querySelector('.w6')
let w7 = document.querySelector('.w7')

let f1 = document.querySelector('.f1')
let f2 = document.querySelector('.f2')
let f3 = document.querySelectorAll('.f3')
let f4 = document.querySelectorAll('.f4')
let f5 = document.querySelectorAll('.f5')

const enMode = ()=>{
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

   hB1.innerHTML = habilities[0]['h1-1']
   hB2.innerHTML = habilities[0]['h1-2']
   hB3.innerHTML = habilities[0]['p1']
   hB4.innerHTML = habilities[0]['h1-3']
   hB5.innerHTML = habilities[0]['p2']
   hB6.innerHTML = habilities[0]['h1-4']
   hB7.innerHTML = habilities[0]['p3']

   w1.innerHTML = worksData[0]['w1']
   w2.forEach((w2)=>{
       w2.innerHTML = worksData[0]['w2']
   })
   w3.innerHTML = worksData[0]['w3']
   w4.innerHTML = worksData[0]['w4']
   w5.innerHTML = worksData[0]['w5']
   w6.innerHTML = worksData[0]['w6']
   w7.innerHTML = worksData[0]['w7']


   f1.innerHTML = footer[0]['f1']
   f2.innerHTML = footer[0]['f2']
   f3.forEach((f3)=>{
       f3.innerHTML = footer[0]['f3']
    })
    f4.forEach((f4)=>{
        f4.innerHTML = footer[0]['f4']
    })
    f5.forEach((f5)=>{
        f5.innerHTML = footer[0]['f5']
    })
   
}

const frMode = ()=>{
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

    hB1.innerHTML = habilities[1]['h1-1']
    hB2.innerHTML = habilities[1]['h1-2']
    hB3.innerHTML = habilities[1]['p1']
    hB4.innerHTML = habilities[1]['h1-3']
    hB5.innerHTML = habilities[1]['p2']
    hB6.innerHTML = habilities[1]['h1-4']
    hB7.innerHTML = habilities[1]['p3']

    w1.innerHTML = worksData[1]['w1']
    w2.forEach((w2)=>{
        w2.innerHTML = worksData[1]['w2']
    })
    w3.innerHTML = worksData[1]['w3']
    w4.innerHTML = worksData[1]['w4']
    w5.innerHTML = worksData[1]['w5']
    w6.innerHTML = worksData[1]['w6']
    w7.innerHTML = worksData[1]['w7']


    f1.innerHTML = footer[1]['f1']
    f2.innerHTML = footer[1]['f2']
    f3.forEach((f3)=>{
        f3.innerHTML = footer[1]['f3']
     })
     f4.forEach((f4)=>{
         f4.innerHTML = footer[1]['f4']
     })
     f5.forEach((f5)=>{
         f5.innerHTML = footer[1]['f5']
     })
}