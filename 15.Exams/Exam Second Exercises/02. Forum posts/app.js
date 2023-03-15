window.addEventListener("load", solve);

function solve() {

    const title = document.getElementById('post-title')
    const category = document.getElementById('post-category')
    const content = document.getElementById('post-content')
    const publishBtn = document.getElementById('publish-btn')
    publishBtn.addEventListener("click", getInfo)


    const reviewList = document.getElementById('review-list')


    const publishedList = document.getElementById('published-list')
    document.getElementById('clear-btn').addEventListener("click", () => publishedList.innerHTML = '')

    function getInfo() {
        if (title.value === '' || category.value === '' || content.value === '') {
            return
        }
        const li = createElement()
        reviewList.appendChild(li)

        title.value = ''
        category.value = ''
        content.value = ''
    }

    function createElement() {
        const li = document.createElement('li')
        li.classList.add('rpost')

        const article = document.createElement('article')

        const posTitle = document.createElement('h4')
        posTitle.textContent = title.value

        const firstP = document.createElement('p')
        firstP.textContent = `Category: ${category.value}`

        const secondP = document.createElement('p')
        secondP.textContent = `Content: ${content.value}`

        const editBtn = document.createElement('button')
        editBtn.classList.add('action-btn', 'edit')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener("click", editPost)

        const approveBtn = document.createElement('button')
        approveBtn.classList.add('action-btn', 'approve')
        approveBtn.textContent = 'Approve'
        approveBtn.addEventListener("click", approvePost)

        article.appendChild(posTitle)
        article.appendChild(firstP)
        article.appendChild(secondP)

        li.appendChild(article)
        li.appendChild(editBtn)
        li.appendChild(approveBtn)

        return li
    }

    function editPost(event) {
        const [postTitle, postCategory, postContent] = event.target.parentElement.firstChild.childNodes
        title.value = postTitle.textContent
        category.value = postCategory.textContent.split(': ')[1]
        content.value = postContent.textContent.split(': ')[1]

        event.target.parentElement.remove()

    }

    function approvePost(event) {
        const li = event.target.parentElement
        li.lastChild.remove()
        li.lastChild.remove()
        publishedList.appendChild(li)

    }

}
