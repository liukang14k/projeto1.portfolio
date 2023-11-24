function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

 
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('imageModal');
    var openBtn = document.getElementById('openModalBtn');
    var closeBtn = document.getElementsByClassName('close')[0];
    var addCommentBtn = document.getElementById('addCommentBtn');
    var commentInput = document.getElementById('commentInput');
    var commentSection = document.getElementById('commentSection');

    openBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    addCommentBtn.addEventListener('click', function () {
        var commentText = commentInput.value;

        if (commentText.trim() !== '') {
            var commentElement = document.createElement('p');
            commentElement.textContent = commentText;
            commentSection.appendChild(commentElement);
            commentInput.value = ''; // Limpar o campo de entrada após adicionar o comentário
        }
    });
});
