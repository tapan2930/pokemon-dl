
/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById( 'upload' );
var infoArea = document.getElementById( 'upload-label' );

input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}

const myForm = document.getElementById("myForm");
const inpImg  = document.getElementById("upload")


myForm.addEventListener("submit", e =>{
  e.preventDefault();
  document.getElementById("result").innerHTML = '<p style="margin: 0; color: white; visibility: hidden;" id="result"><img src="/static/resources/loading.svg" alt="" style="width: 35px;background: white; border-radius: 51%; "> Photo Uploaded...Processing...</p>'
  document.getElementById("result").style.visibility = "visible"
  const endpoint = "/upload";
  formData = new FormData();
  formData.append('user-img', inpImg.files[0]);

  fetch(endpoint, {
    method: "post",
    body: formData
  }).then(
    response => response.json()
  ).then(
      (data) => {
          document.getElementById("result").style.fontSize = "20px"
          document.getElementById("result").style.fontWeight = "Bold"
          document.getElementById("result").innerHTML = data["result"]
      }
  );
 
});

