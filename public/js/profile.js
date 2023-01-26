const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};


// const newCommentHandler = async (event) => {
// event.preventDefault();
// const comment = document.querySelector('#blog-comment').value.trim();
// if (event.target.hasAttribute('data-id')) {
//   const blog_id = event.target.getAttribute('data-id');
//   if (id && comment) {
//     const response = await fetch(`/api/blogs`, {
//       method: 'POST',
//       body: JSON.stringify({ blog_id, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/blog/${id}');
//     } else {
//       alert('Failed to create comment');
//     }
//   }
// };
// }


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

  // document
  // .querySelector('.new-blog-comment')
  // .addEventListener('submit', newCommentHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
