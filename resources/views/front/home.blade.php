@extends('front.layouts.app')

@section('content')
<div id="wrapper">
  <div class="container">
    <form>
      <div class="form-group row">
        <label for="heartID" class="col-1 col-form-label">匯嘉帳號</label>
        <div class="col-3">
          <input type="text" class="form-control" id="heartID">
        </div>


        <label class="col-1 col-form-label">查詢開始時間</label>
        <div class='input-group date col-4' id='startTime'>
          <input type='text' class="form-control" />
          <span class="input-group-addon">
          <span class="glyphicon glyphicon-calendar"></span>
          </span>
        </div>


        <button type="button" class="btn btn-warning offset-1 col-1">下載檔案</button>
      </div>

      <div class="form-group row">
        <label for="heartPwd" class="col-1 col-form-label">匯嘉密碼</label>
        <div class="col-3">
          <input type="password" class="form-control" id="heartPwd">
        </div>

        <label class="col-1 col-form-label">查詢結束時間</label>
        <div class="col-4" style="padding: 0;">
          <div class='input-group date' id='endTime'>
            <input type='text' class="form-control" />
            <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
            </span>
          </div>
          <small>備註：只供查詢6個月內紀錄，且結束時間不得早於開始時間</small>
        </div>
        <button id="execute" type="button" class="btn btn-warning offset-1 col-1" style="height: 35px;">執行</button>
      </div>

      <div class="form-group row">
        <button id="jackID" type="button" class="btn btn-warning" style="margin-left: .75rem;">使用Jack的帳號</button>
      </div>
    </form>
  </div>
</div>


@endsection

@section('scripts')
<script type="text/javascript">
  $(document).ready(function(){

    $('#startTime').datetimepicker({
      defaultDate:new Date(),
      format:"YYYY/MM/DD hh:mm:ss",
      locale:"zh-tw"
      // disabledDates: [
      //     moment("12/25/2013"),
      //     new Date(2013, 11 - 1, 21),
      //     "11/22/2013 00:53"
      // ]
    }).on('dp.change', function(e) {
      $('#endTime').data("DateTimePicker").minDate(e.date);
    });


    $('#endTime').datetimepicker({
      defaultDate:new Date(),
      format:"YYYY/MM/DD hh:mm:ss",
      locale:"zh-tw"
    }).on('dp.change', function(e) {
      $('#startTime').data("DateTimePicker").maxDate(e.date);
    });

    $('#jackID').on('click', function() {
      $('#heartID').val('jacktest01');
      $('#heartPwd').val('egiga0001');
    });


    $('#execute').on('click', function() {
      var username="tendays_capi";
      var password="fjioa8";
      var b_account="jacktest01";
      var b_password="egiga0001";

      var settings = {
        "url": "http://149.129.82.29/HuijiaCare_CAPI/mat_status_record_download.php",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": "Basic " + btoa(username + ":" + password),
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "b_account": b_account,
          "b_password": b_password,
          "starttime": "2021-07-25 05:00:00",
          "endtime": "2021-07-25 06:00:00"
        }),
      };

      $.ajax(settings).done(function (res) {
        console.log(res);
      }).fail(function(err) {
        console.log(err);
      });
    });
});
</script>
@endsection
