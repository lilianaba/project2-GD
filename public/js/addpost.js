async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post_title').value;
    const post_content = document.querySelector('#post_content').value;
    const rating = document.querySelector('name="rate"').value;
// need to add in the rating logic --- 


    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content,
            rating,
        }),

    });

    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
