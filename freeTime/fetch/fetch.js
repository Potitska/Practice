fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        const list = document.querySelector('.posts-list');
        json.forEach((item, index) => {
            //creating elements
            const post = document.createElement('li');
            const postIndex = document.createElement('span');
            const postTitle = document.createElement('h4');
            const postText = document.createElement('p');
            const postReadMoreLink = document.createElement('a');
            //adding classes- (it is necessary for css styles)
            post.classList.add('posts-list-item')
            postIndex.classList.add('post-index')
            postTitle.classList.add('post-title')
            postText.classList.add('post-text')
            postReadMoreLink.classList.add('post-link')
            //updating content
            postIndex.innerHTML = index + 1;
            postTitle.innerHTML = item.title;
            postText.innerHTML = item.body;
            postReadMoreLink.innerHTML = 'Read more'
            //inserting item into the list
            post.append(postIndex, postTitle, postText, postReadMoreLink) //there is an important order here
            list.appendChild(post) //appendChild - закидає тільки один елемент, а append кілька
        })
    })