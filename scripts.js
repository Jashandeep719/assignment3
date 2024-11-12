function addReview() {
    const name = document.getElementById('review-name').value;
    const text = document.getElementById('review-text').value;
    const reviewsContainer = document.getElementById('reviews-container');

    if (name && text) {
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `<strong>${name}:</strong> ${text}`;
        reviewsContainer.appendChild(reviewItem);

        // Clear the input fields
        document.getElementById('review-name').value = '';
        document.getElementById('review-text').value = '';
    } else {
        alert('Please fill in both fields before submitting your review.');
    }
}
