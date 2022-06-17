document.addEventListener("DOMContentLoaded", function() {
  const clientImages = document.querySelectorAll("[data-feedback-client]");
  if( !clientImages.length ) return;

  function hideAllFeedbacks() {
    Array.from(document.querySelectorAll('[data-feedback-text]')).forEach(function(el) {
      el.classList.remove('active');
    })
  }

  Array.from(clientImages).forEach(function(client) {
    client.addEventListener('click', function() {
      hideAllFeedbacks();
      document.querySelector('[data-feedback-text="' + client.dataset.feedbackClient + '"]').classList.add('active');
    })
  })
});