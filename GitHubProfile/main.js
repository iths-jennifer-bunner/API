document.getElementById('button').addEventListener('click', () => {    
    let input = document.getElementById('input').value    
    fetch('https://api.github.com/users/'+input)
    .then(response => response.json())
    .then(users => {
        let data = users
        const img = document.createElement('img')
        img.src = data.avatar_url
        const name = document.createElement('h2')
        name.textContent = data.name
        const link = data.blog
        const website = document.createElement('a')
        website.setAttribute('href', link)
        website.innerHTML = link

        const infoElemnt = document.getElementById('info')
        infoElemnt.innerHTML = ''
        infoElemnt.appendChild(img)
        infoElemnt.appendChild(name)
        infoElemnt.appendChild(website)    
        })
    .catch(err => {
        console.error(err.message)
    }) 
})


