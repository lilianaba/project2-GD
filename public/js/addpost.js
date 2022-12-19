async function newFormHandler(event) {
    event.preventDefault();

    const barID = document.location.href.split('/')[5];
    const newPostTitle = document.getElementById("post_title").value;
    const newPostContent = document.getElementById("post_content").value;
    const newPostRating = document.querySelectorAll("input[name='rate']");

    console.log(barID);

    let selectedRate;

        for (const radioButton of newPostRating) {
        if (radioButton.checked) {
            selectedRate = radioButton.value;
            break;
        }
        }
        console.log(newPostTitle, newPostContent);

    if (newPostTitle && newPostContent && selectedRate) {

        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: newPostTitle,
                post_content: newPostContent,
                rating: selectedRate,
                bar_id: barID,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            console.log('Accepted review!');
            document.location.reload();
        } else {
            console.log(response.statusText);
        }
    } else {
        console.log('Input title, rating and content!');
    }
}

document.getElementById('new-post-form').addEventListener('submit', newFormHandler);
