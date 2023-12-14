document.addEventListener('DOMContentLoaded', function(){
    var attachmentUploads = document.querySelectorAll('.attachment-upload');
    var attachmentIcons = document.querySelectorAll('.attachment-icon');
    var modalBody = document.getElementById('attachmentModalBody');
    var attachmentList = document.getElementById('attachmentList');


    // 
    attachmentIcons.forEach(function(attachmentIcon,index){
        attachmentIcon.addEventListener('click', function (){
            if(attachmentUploads[index]){
                attachmentUploads[index].click();
            }
            
        })
    })

    attachmentUploads.forEach(function(attachmentUploads){
        attachmentUploads.addEventListener('change',function(event){
            var files= event.target.files;
            updateAttachmentList(files)
        })
    })

    function updateAttachmentList(files) {
        attachmentList.innerHTML = '';

        if (files.length === 0) {
            var li = document.createElement('li');
            li.textContent = 'No attachments';
            attachmentList.appendChild(li);
        } else {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var li = document.createElement('li');
                li.textContent = file.name + ' (' + getFileExtension(file.name) + ')';
                attachmentList.appendChild(li);
            }
        }
    }

    function getFileExtension(filename) {
        if (!filename || filename.indexOf('.') === -1) {
            return ''; // Handle cases with no extension or undefined filename
        }
        return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
    }
})
