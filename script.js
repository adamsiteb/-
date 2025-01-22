document.getElementById('upload-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('image-upload');
    var outputSection = document.getElementById('output-section');
    var oldImage = document.getElementById('old-image');
    var newImage = document.getElementById('new-image');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            oldImage.src = e.target.result;
            oldImage.style.display = 'inline';
            outputSection.style.display = 'block';
        }
        
        reader.readAsDataURL(fileInput.files[0]);
    }
});
