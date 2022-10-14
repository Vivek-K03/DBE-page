const albums = [
    {
        "name": "Lap 5",
        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/20/5f/cb/205fcb95-ad24-488e-074c-78562d8575f9/22UMGIM66767.rgb.jpg/1200x1200bf-60.jpg"
    },
    {
        "name": "Home Alone 2",
        "image": "https://i.scdn.co/image/ab67616d0000b273881de5c93d75eee36d9cee69"
    },
    {
        "name": "The Blueprint",
        "image": "https://cdn.shopify.com/s/files/1/0130/8714/6043/products/D-BlockEurope-TheBlueprint-UsVs.Them.jpg?v=1601623791"
    },
    {
        "name": "Street Trauma",
        "image": "https://images.genius.com/a14181cc23b61591f151bf63c0076481.1000x1000x1.png"
    },
    {
        "name": "PTSD",
        "image": "https://m.media-amazon.com/images/I/91esjBsX6CL._AC_SL1500_.jpg"
    },
    {
        "name": "Home Alone",
        "image": "https://images.genius.com/813c5a5e23f18a08fbbdf6e2606bd604.1000x1000x1.jpg"
    },
    {
        "name": "Any minute now",
        "image": "https://i.scdn.co/image/ab67616d0000b273ef8a42a1172ec6f0b2bcd993"
    },
    {
        "name": "Coming Soon",
        "image": 'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000'
    },
    {
        "name": "Coming Soon",
        "image": 'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000'
    },
    {
        "name": "Coming Soon",
        "image": 'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000'

    }
    
]

const main = document.querySelector('main')

function createAlbum({name, image}){
    const card = document.createElement('div')
    card.classList.add('card')

    const albumName = document.createElement ('h2')
    albumName.classList.add('card-title')
    const img = document.createElement('img')

    albumName.append(name)
    img.src = image
    img.classList.add('pictures')

    const sortingButton = document.createElement('button')
    if (name === "Coming Soon") {
        sortingButton.classList.add('coming-soon')
    }
    sortingButton.append('Select')

    

    card.append(albumName, img, sortingButton)
    const mainCard = document.querySelector('#cardGrabber')
    mainCard.append(card)


}

albums.forEach(album => createAlbum(album))
document.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const card = e.target.closest('.card')

    }
})