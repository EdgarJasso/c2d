<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
 <center>
    <h2>
        Reset password
    </h2>
    <!-- Button to Open the Modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Change Password
    </button>
 </center>

  <!-- The Modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Enter new password</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <div id="form_password"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  
</div>

<script>
    $(document).ready(function () {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const hash = urlParams.get('hash');

        console.log(hash);
        if (hash == null) {
            console.log('esta vacio');
        } else {
            console.log('aqui se mostrara el modal');
            $("#form_password").append('<form id="form_reset_password"><div class="form-group"><center><input type="hidden" class="form-control" id="password_hash"><br><input id="newpassword" class="form-control" type="password" name="newpassword" placeholder="Password"><br><input id="newpasswordC" class="form-control" type="password" name="newpasswordC" placeholder="Confirm Password"><br><button id="btn_newpassword" type="button" class="btn btn-primary">Change Password</button><br><div id="error_log_password"></div></center></div></form>');
            $("#password_hash").val(hash);
        }

        $('#btn_newpassword').click(function (e) {
            var ApiUrl = 'https://web.chat2desk.com.mx';
            var HostUrl = 'https://chat2desk.mx';
            $.ajax({
                method: 'POST',
                url: ApiUrl + '/api/user/change_password',
                contentType: "application/json; charset=UTF-8",
                dataType: 'json',
                data: JSON.stringify({
                    password: $('#newpassword').val(),
                    password_confirmation: $('#newpasswordC').val(),
                    hash: $('#password_hash').val()
                }),
                success: function (response) {
                    if (response.status === 'success') {
                        location.href = ApiUrl + '?auth_key=' + response.auth_key
                    } else {
                        console.error('response', response);
                        var result = [];
                        for (var a in response.errors) {
                           result.push(response.errors[a][0]);
                        }
                        $("#error_log_password").addClass("alert alert-danger");
                        $('#error_log_password').show().html(result.join('<br/>'));
                    }
                }
            })

        });

    });
</script>


</body>
</html>
