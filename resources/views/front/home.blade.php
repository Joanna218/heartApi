@extends('front.layouts.app')

@section('content')
<div id="wrapper">
  <div class="container">
    <form id="form" novalidate="">
      <div class="form-group row">
        <label for="heartID" class="col-1 col-form-label">匯嘉帳號</label>
        <div class="col-3">
          <input type="text" class="form-control" id="heartID" required>
          <div class="invalid-feedback">
            請輸入帳號
          </div>
        </div>


        <label class="offset-2 col-1 col-form-label">查詢開始時間</label>
        <div class='input-group date offset-1 col-4' id='startTime'>
          <input type='text' class="form-control" required/>
          <span class="input-group-addon">
          <span class="glyphicon glyphicon-calendar"></span>
          </span>
        </div>
      </div>

      <div class="form-group row">
        <label for="heartPwd" class="col-1 col-form-label">匯嘉密碼</label>
        <div class="col-3">
          <input type="password" class="form-control" id="heartPwd" required>
          <div class="invalid-feedback">
            請輸入密碼
          </div>
        </div>

        <label class="offset-2 col-1 col-form-label">查詢結束時間</label>
        <div class="col-4 offset-1" style="padding: 0;">
          <div class='input-group date' id='endTime'>
            <input type='text' class="form-control" required/>
            <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
            </span>
          </div>
          <small>備註：只供查詢6個月內紀錄，且結束時間不得早於開始時間</small>
        </div>
      </div>

      <div class="form-group row" style="display: inherit;">
        <button id="jackID" type="button" class="btn btn-info" style="margin-left: .75rem;">使用Jack的帳號</button>
        <button id="execute" type="button" class="btn btn-warning" style="margin-left: 50px">查詢</button>
      </div>
    </form>

    <table id="table" class="table table-striped table-bordered" style="width:100%">
    </table>
</div>

  <!-- Modal -->
  <div class="modal" id="modal" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <span class="sending">查詢中....請稍候...</span>
        <span class="sendFail">查詢失敗！請重新查詢</span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary modal-check" data-dismiss="modal">確定</button>
      </div>
    </div>
  </div>
</div>


@endsection

@section('scripts')
 <!-- boostrap table -->
 <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.css">
  <script src="https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>


<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js"></script> -->
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.5.2/css/buttons.bootstrap4.min.css">

<link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.bootstrap4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
<!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/js/bootstrap.min.js' integrity='sha512-XKa9Hemdy1Ui3KSGgJdgMyYlUg1gM+QhL6cnlyTe2qzMCYm4nAZ1PsVerQzTTXzonUR+dmswHqgJPuwCq1MaAg==' crossorigin='anonymous'></script> -->

<script>

var idioma= {
    // "sProcessing":     "Procesando...",
    "sLengthMenu":     "顯示_MENU_ 筆數",
    "sZeroRecords":    "沒有資料",
    // "sEmptyTable":     "NingÃºn dato disponible en esta tabla",
    "sInfo":           "顯示 _START_ 到 _END_ 共有 _TOTAL_ 筆",
    "sInfoEmpty":      "顯示 0 到 0 筆 共有 0 筆",
    "sInfoFiltered":   "(總資料筆數為 _MAX_ 筆)",
    // "sInfoPostFix":    "",
    "sSearch":         "搜尋:",
    // "sUrl":            "",
    // "sInfoThousands":  ",",
    // "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst":    "第一頁",
        "sLast":     "最後一頁",
        "sNext":     "下一頁",
        "sPrevious": "上一頁"
    },
    // "oAria": {
    //     "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
    //     "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    // },
    "buttons": {
        "copyTitle": 'Informacion copiada',
        "copyKeys": 'Use your keyboard or menu to select the copy command',
        "copySuccess": {
            "_": '%d filas copiadas al portapapeles',
            "1": '1 fila copiada al portapapeles'
        },

        "pageLength": {
        "_": "顯示 %d 行",
        "-1": "全部資料"
        }
    }
};
  $(document).ready(function(){
    $('#table').DataTable( {
      columns: [
        { 'data': 'mat_status', title: '即時狀態' },
        { 'data': 'mat_time', title: '時間' },
        { 'data': 'mat_val_BR', title: '呼吸率' },
        { 'data': 'mat_val_HR', title: '心率' }
      ],
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "language": idioma,
      "lengthMenu": [[100,200, -1],[100,200,"全部"]],
      dom: 'Bfrt<"col-md-6 inline"i> <"col-md-6 inline"p>',
      buttons: {
            dom: {
              container:{
                tag:'div',
                className:'flexcontent'
              },
              buttonLiner: {
                tag: null
              }
            },
            buttons:
            [
              // {
              //     extend:    'pdfHtml5',
              //     text:      '<i class="fa fa-file-pdf-o"></i>PDF',
              //     title:'Titulo de tabla en pdf',
              //     titleAttr: 'PDF',
              //     className: 'btn btn-app export pdf',
              //     exportOptions: {
              //         columns: [ 0, 1,2,3]
              //     },
              //     customize:function(doc) {

              //         doc.styles.title = {
              //             color: '#4c8aa0',
              //             fontSize: '30',
              //             alignment: 'center'
              //         }
              //         doc.styles['td:nth-child(2)'] = {
              //             width: '100px',
              //             'max-width': '100px'
              //         },
              //         doc.styles.tableHeader = {
              //             fillColor:'#4c8aa0',
              //             color:'white',
              //             alignment:'center'
              //         },
              //         doc.content[1].margin = [ 100, 0, 100, 0 ]

              //     }
              // },
              {
                  extend:    'excelHtml5',
                  text:      '<i class="fa fa-file-excel-o"></i>Excel',
                  title:'心率呼吸率即時紀錄',
                  titleAttr: 'Excel',
                  className: 'btn btn-app export excel',
                  exportOptions: {
                      columns: [ 0, 1, 2,3 ]
                  },
              },
              {
                  extend:    'pageLength',
                  titleAttr: 'Registros a mostrar',
                  className: 'selectTable'
              }
            ]
          }
    });

    function showTable(data) {
      $('#table').DataTable().destroy();
      $('#table').DataTable( {
        data: data,
        columns: [
          { 'data': 'mat_status', title: '即時狀態' },
          { 'data': 'mat_time', title: '時間' },
          { 'data': 'mat_val_BR', title: '呼吸率' },
          { 'data': 'mat_val_HR', title: '心率' }
        ],
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "language": idioma,
        "lengthMenu": [[100,200, -1],[100,200,"全部"]],
        dom: 'Bfrt<"col-md-6 inline"i> <"col-md-6 inline"p>',
        buttons: {
              dom: {
                container:{
                  tag:'div',
                  className:'flexcontent'
                },
                buttonLiner: {
                  tag: null
                }
              },
              buttons:
              [
                // {
                //     extend:    'pdfHtml5',
                //     text:      '<i class="fa fa-file-pdf-o"></i>PDF',
                //     title:'Titulo de tabla en pdf',
                //     titleAttr: 'PDF',
                //     className: 'btn btn-app export pdf',
                //     exportOptions: {
                //         columns: [ 0, 1,2,3]
                //     },
                //     customize:function(doc) {

                //         doc.styles.title = {
                //             color: '#4c8aa0',
                //             fontSize: '30',
                //             alignment: 'center'
                //         }
                //         doc.styles['td:nth-child(2)'] = {
                //             width: '100px',
                //             'max-width': '100px'
                //         },
                //         doc.styles.tableHeader = {
                //             fillColor:'#4c8aa0',
                //             color:'white',
                //             alignment:'center'
                //         },
                //         doc.content[1].margin = [ 100, 0, 100, 0 ]

                //     }
                // },
                {
                    extend:    'excelHtml5',
                    text:      '<i class="fa fa-file-excel-o"></i>Excel',
                    title:'心率呼吸率即時紀錄',
                    titleAttr: 'Excel',
                    className: 'btn btn-app export excel',
                    exportOptions: {
                        columns: [ 0, 1, 2,3 ]
                    },
                },
                {
                    extend:    'pageLength',
                    titleAttr: 'Registros a mostrar',
                    className: 'selectTable'
                }
              ]
            }
      });
    }

    $('#startTime').datetimepicker({
      defaultDate:new Date(),
      format:"YYYY/MM/DD HH:mm:ss",
      locale:"zh-tw",
    }).on('dp.change', function(e) {
      $('#endTime').data("DateTimePicker").minDate(e.date);
    });


    $('#endTime').datetimepicker({
      defaultDate:new Date(),
      format:"YYYY/MM/DD HH:mm:ss",
      locale:"zh-tw"
    }).on('dp.change', function(e) {
      $('#startTime').data("DateTimePicker").maxDate(e.date);
    });

    $('#jackID').on('click', function() {
      $('#heartID').val('jacktest01');
      $('#heartPwd').val('egiga0001');
    });


    $('#execute').on('click', function(e) {
      e.preventDefault();
      var vForm = $('#form');
      if (vForm[0].checkValidity() === false) {
        e.stopPropagation();
        vForm.addClass('was-validated');
      } else {
        $('.sending').css('display','block');
        $('.sendFail').css('display','none');
        $('.modal-check ').css('display','none');
        $('.modal-footer').css('display','none');
        $('#modal').modal('show');
        var username="tendays_capi";
        var password="fjioa8";

        var settings = {
          "url": "http://149.129.82.29/HuijiaCare_CAPI/mat_status_record_download.php",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Basic " + btoa(username + ":" + password),
            "Content-Type": "application/json"
          },
          "data": JSON.stringify({
            "b_account": $('#heartID').val(),
            "b_password": $('#heartPwd').val(),
            "starttime": $('#startTime').data("date"),
            "endtime": $('#endTime').data("date")
            // "starttime": "2021/07/25 05:28:52",
            // "endtime": "2021/07/25 06:28:52"
          }),
        };
        var errMsgCode = ["0","1","2","3"];

        $.ajax(settings).done(function (res) {

          if (JSON.parse(res).userMessage != "-1") {
            // 表示伺服器驗證成功
            if (errMsgCode.indexOf(JSON.parse(res).userMessage) == "-1") {
              // 表示api成功
              showTable(JSON.parse(res).userMessage);
              $('#modal').modal('hide');
              // console.log(res);
            } else {
              $('.sending').css('display','none');
              $('.sendFail').css('display','block');
              $('.modal-check ').css('display','block');
              $('.modal-footer').css('display','block');
            }
          }else {
            $('.sending').css('display','none');
            $('.sendFail').css('display','block');
            $('.modal-check ').css('display','block');
            $('.modal-footer').css('display','block');
          }

        }).fail(function(err) {
          $('#modal').modal('hide');
          // console.log(err);
        });
      }

    });
});
</script>
@endsection
