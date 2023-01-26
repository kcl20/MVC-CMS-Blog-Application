const blog_url = window.location.href;
  let urlParts = blog_url.split('/');
  let blog_id = urlParts[urlParts.length - 1];

const newCommentHandler = async (event) => {
  event.preventDefault();
  const description = document.querySelector('#blog-comment').value.trim();

  // const blog_url = window.location.href;
  // let urlParts = blog_url.split('/');
  // let blog_id = urlParts[urlParts.length - 1];
  console.log("button pressed");
  // console.log("url" + blog_url);
  // console.log("url parts " + urlParts);
  console.log("blog id: " + blog_id);
  console.log("comment: " + description);

  if (blog_id && description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ blog_id, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // document.location.replace('/blog/${blog_id}');
        console.log("Added comment.");
      } else {
        alert('Failed to create comment');
      }
    }
}

const delButtonHandler = async (event) => {
  console.log("delete button pressed");
  const delete_comment_id = event.target.getAttribute('data-id');
  console.log("delete comment id: " + delete_comment_id);

  if (delete_comment_id) {
    

    const response = await fetch(`/api/comments/${delete_comment_id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(response);
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert('Failed to delete comment');
    }
  }
};


document
  .querySelector('.comment-list')
  .addEventListener('click', delButtonHandler);



document
.querySelector('.new-blog-comment')
.addEventListener('submit', newCommentHandler);

