<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Invoice#2023-000001</title>

<style type="text/css">
    * {
        font-family: Verdana, Arial, sans-serif;
    }
    table{
        font-size: x-small;
        border-collapse: collapse;
    }
    tfoot tr td{
        font-weight: bold;
        font-size: x-small;
    }
    .gray {
        background-color: lightgray
    }
    table th .border{
        border-left: 0.01em solid #ccc;
    border-right: 0;
    border-top: 0.01em solid #ccc;
    border-bottom: 0;
    border-collapse: collapse;
    }
</style>

</head>
<body style="padding: 10px">

    <table width="100%">
        <tr>
            <td valign="top"><img src="{{ public_path('/images/invoice_logo_alt.jpg')}}" alt="" width="200"/></td>
            <td align="left">
                <div style="padding-left: 280px">
                    <h3 style="font-size: 15px;">ALFA and Friends Sdn Bhd</h3 >
                    <span style="font-size: 14px; line-height: 1.5">
                        36, Jalan BP 7/8<br>
                        Bandar Bukit Puchong<br>
                        47100 Puchong, Selangor<br>
                        Malaysia<br>
                    </span>
                </div>
            </td>
        </tr>
    </table>
    <br/>
    <br/>
    <table width="100%">
        <tr>
            <td><strong style="font-size: 20px">INVOICE</td>
        </tr>
    </table>
    <br/>
    <br/>

    <table width="100%">
        <tr>
            <td align="left">
                <strong style="font-size: 15px">{{ $data['parent_full_name'] }}</strong><br/>
                <div style="max-width: 200px; font-size: 14px; margin-top: 10px; line-height: 1.5">{{ $data['parent_address'] }}</div><br/> 
                <div style="max-width: 200px; font-size: 14px; margin-top: 10px; font-weight: bold; text-decoration: underline;">Student: {{ $data['student_name'] }}</div><br/> 
            </td>
            <td align="left">
                <div style="font-size: 14px; padding-left: 270px">Invoice Number: {{ $data['invoice_number'] }}</div><br/> 
                <div style="font-size: 14px; padding-left: 270px">Invoice Date: {{ $data['date_issued'] }}</div><br/> 
                <div style="font-size: 14px; padding-left: 270px">Due Date: {{ $data['due_date'] }}</div><br/> 
            </td>
        </tr>
    </table>
    <br/>
    <table width="100%">
        <thead style="background-color: black; color: white;">
            <tr style="border: 1px solid black">
                <th style="padding-top:0.5rem; padding-bottom:0.5rem; font-size: 13px; padding-left:1rem; padding-right:1rem;" align="left">Item</th>
                <th style="padding-top:0.5rem; padding-bottom:0.5rem; font-size: 13px; padding-left:1rem; padding-right:1rem;" align="right">Discount</th>
                <th style="padding-top:0.5rem; padding-bottom:0.5rem; font-size: 13px; padding-left:1rem; padding-right:1rem;" align="right">Amount</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($data['invoice_items'] as $key=>$item)
            <tr style="border: 1px solid black">
                <td style="padding-top:0.5rem; padding-bottom:0.5rem; padding-left: 10px; padding-right: 10px; font-size: 13px; padding-left:1rem; padding-right:1rem;" align="left">
                    <div style="margin-bottom: 10px; font-weight: bold;">
                        {{ $item->programme_name }} (Level {{ $item->programme_level }})
                    </div>
                    @if($item->include_material_fee)
                    <div style="margin-bottom: 10px">
                        - Material Fee
                    </div>
                    @endif
                    <div>
                        - {{ $item->programme_type }}
                    </div>
                </td>
                <td style="padding-top:0.5rem; padding-bottom:0.5rem; padding-left: 10px; padding-right: 10px; font-size: 13px; padding-left:1rem; padding-right:1rem; vertical-align: bottom" align="right">
                    @if($item->include_material_fee)
                    <div style="margin-bottom: 10px">
                        {{ $item->material_fee_discount }}.00
                    </div>
                    @endif
                    <div>
                        {{ $item->programme_fee_discount }}.00
                    </div>
                </td>
                <td style="padding-top:0.5rem; padding-bottom:0.5rem; padding-left: 10px; padding-right: 10px; font-size: 13px; padding-left:1rem; padding-right:1rem; vertical-align: bottom" align="right">
                    @if($item->include_material_fee)
                    <div style="margin-bottom: 10px">
                        {{ $item->material_fee }}.00
                    </div>
                    @endif
                    <div>
                        {{ $item->programme_fee }}.00
                    </div>
                </td>
            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td align="right" style="border-top: 1px solid; border-bottom: 1px solid;">
                    <div style="padding-top: 5px; padding-bottom: 5px; font-size: 13px; padding-left:1rem; padding-right:1rem;">
                        Total
                    </div>
                </td>
                <td align="right" style="border-top: 1px solid; border-bottom: 1px solid;">
                    <div style="padding-top: 5px; padding-bottom: 5px; font-size: 13px; padding-left:1rem; padding-right:1rem;">
                        {{ $data['amount'] }}.00
                    </div>
                </td>
            </tr>
        </tfoot>
    </table>
    <div style="position: fixed; bottom: 0px; left: 0px; right: 0px; text-align: center; line-height: 35px;">
        <div style="border-top: 1px solid lightgray"></div>
            Thank You!
    </div>
</body>
</html>