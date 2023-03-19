let url = new URL(location.href);
let id_user = url.searchParams.get('id')

let main = document.getElementById('main')
let newBlock = document.createElement('div')

newBlock.className = 'newBlock'

fetch(`https://jsonplaceholder.typicode.com/users/${id_user}`)
    .then(response => response.json())
    .then(json => {
        function itin_obj (object, block){
            let infoPost = document.createElement('div')
            infoPost.classList.add('info_post')

            for (const key in object) {
                paramUser = document.createElement('div')
                if (typeof object[key] !== 'object'){
                    paramUser.innerText = (`${key}${':'} ${object[key]}`)
                    infoPost.appendChild(paramUser)
                }else if (typeof object[key] === 'object'){
                    itin_obj(object[key], infoPost)
                }
            }
            block.appendChild(infoPost)
        }
        itin_obj(json, newBlock)


        const btnPosts = document.createElement('button');
        btnPosts.className = 'btnPosts'
        btnPosts.innerText = 'Posts'
        newBlock.appendChild(btnPosts)
        main.appendChild(newBlock)

        fetch(`https://jsonplaceholder.typicode.com/users/${id_user}/posts`)
            .then(response => response.json())
            .then(posts => {
                console.log(posts);
                for (const post of posts) {

                }
            })
    });
