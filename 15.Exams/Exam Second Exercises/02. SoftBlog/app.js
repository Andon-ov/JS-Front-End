function solve() {
   const creator = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const createBtn = document.querySelector('.create');

   const posts = document.querySelector('.site-content>main>section');
   const archive = document.querySelector('.archive-section>ol');

   createBtn.addEventListener('click', getInfo);

   function getInfo(event) {
      event.preventDefault();

      const element = createElement();
      posts.appendChild(element);

      const deleteBtn = element.querySelector('.delete');
      deleteBtn.addEventListener('click', onDelete);

      const info = {
         postTitle: title.value
      };
      const archiveBtn = element.querySelector('.archive');
      archiveBtn.addEventListener('click', onArchive);

      function onArchive() {
         const li = document.createElement('li');
         li.textContent = info.postTitle;
         archive.appendChild(li);
         element.remove();

         Array
            .from(archive.childNodes)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => archive.appendChild(e));

      }
      function onDelete() {
         element.remove();
      }

      creator.value = '';
      title.value = '';
      category.value = '';
      content.value = '';

   }

   function createElement() {

      const article = document.createElement('article');
      article.innerHTML = `
      <h1>${title.value}</h1>
      <p>Category:
      <strong>${category.value}</strong>
      </p>
      <p>Creator:
      <strong>${creator.value}</strong>
      </p>
      <p>${content.value}</p>
      <div class="buttons">
      <button class="btn delete">Delete</button>
      <button class="btn archive">Archive</button>
      </div>`;
      return article;

   }

}

