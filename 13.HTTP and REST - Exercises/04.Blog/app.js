function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener("click", getAllPosts)
    document.getElementById('btnViewPost').addEventListener("click", displayPost)


    async function displayPost() {
        const selectedId = document.getElementById('posts').value
        try {
            const [post, comments] = await Promise.all([
                getPostById(selectedId),
                getCommentByPostId(selectedId)
            ])


            document.getElementById('post-title').textContent = post.title
            document.getElementById('post-body').textContent = post.body

            const ul = document.getElementById('post-comments')
            ul.replaceChildren()
            comments.forEach(c => {
                const liElement = document.createElement('li')
                liElement.textContent = c.text
                ul.appendChild(liElement)
            })
        } catch (e) {
            console.log(e)
        }


    }

    async function getAllPosts() {
        const selectElement = document.getElementById('posts')
        selectElement.replaceChildren()

        try {
            const url = `http://localhost:3030/jsonstore/blog/posts`
            const res = await fetch(url)
            const data = await res.json()


            Object.values(data).forEach(p => {
                const optionElement = document.createElement('option')
                optionElement.textContent = p.title
                optionElement.value = p.id
                selectElement.appendChild(optionElement)
            })
        } catch (e) {
            console.log(e)

        }

    }

    async function getPostById(postId) {
        const url = `http://localhost:3030/jsonstore/blog/posts/` + postId
        const res = await fetch(url)
        return await res.json()
    }

    async function getCommentByPostId(postId) {
        const url = `http://localhost:3030/jsonstore/blog/comments`
        const res = await fetch(url)
        const data = await res.json()
        return Object.values(data).filter(c => c.postId === postId)
    }

}

attachEvents();

//TODO 50/100