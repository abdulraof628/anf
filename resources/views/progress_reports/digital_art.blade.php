<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Progress Report</title>

<style type="text/css">
    * {
        font-family: Verdana, Arial, sans-serif;
    }
    .page-break {
        page-break-after: always;
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
<body>

    <table width="100%">
        <tr>
            <td><img src="{{ public_path('/images/progress_report/digital_art.png') }}" style="width: 100%; height: 200px"/></td>
        </tr>
    </table>
    <table width="100%" style="padding-top: 20px; padding-bottom: 20px">
        <tr>
            <td style="text-align: center;"><strong style="font-size: 20px">Monthly Progress Report</strong></td>
        </tr>
    </table>
    <div style="padding-top: 10px; padding-bottom: 10px; padding-left: 35px; padding-right: 35px; border: 2px solid">
        <table width="100%">
            <tr>
                <td style="font-size: 13px; padding: 10px">Student's Name: </td>
                <td style="font-size: 13px; padding: 10px">{{ $data['student_data']->student_name }}</td>
            </tr>
            <tr>
                <td style="font-size: 13px; border-top: 1px solid gray; border-bottom: 1px solid gray; padding: 10px">Date Joined: </td>
                <td style="font-size: 13px; border-top: 1px solid gray; border-bottom: 1px solid gray; padding: 10px">{{ $data['student_data']->date_joined }}</td>
            </tr>
            <tr>
                <td style="font-size: 13px; padding: 10px">Class Type / level: </td>
                <td style="font-size: 13px; padding: 10px">{{ $data['student_data']->programme_name }} / Level {{ $data['student_data']->programme_level }}</td>
            </tr>
        </table>
    </div>
    <div class="page-break"></div>
    <table width="100%" style="margin-top: 10px;">
        <thead>
            <tr>
                <th width="15%" style="border: 2px solid; padding: 10px; font-size: 12px">Date</th>
                <th width="50%" style="border: 2px solid; padding: 10px; font-size: 12px">Theme / Lesson / Activity / Outcome</th>
                <th width="35%" style="border: 2px solid; padding: 10px; font-size: 12px">Assessments through Observations</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data['report_data'] as $key => $report)
                <tr>
                    <td style="text-align: center; border: 2px solid; padding: 10px">
                        <div>
                            {{ $report->date }}
                        </div>
                        <div>
                            {{ $report->attendance_status_name }}
                        </div>
                    </td>
                    <td style="border: 2px solid; padding: 10px">
                        @php
                            $report_item = json_decode($report->report_data, true);
                        @endphp
                        @if(count($report_item) > 0)
                            @foreach($report_item as $key => $item)
                            <div style="padding-bottom: 20px">
                                <div style="padding-bottom: 5px"><strong><b>{{ $item['theme_name'] }}</b></strong></div>
                                <div style="padding-bottom: 5px"><b style="text-decoration: underline;">{{ $item['lesson_name'] }} : {{ $item['activity_name'] }}</b></div>
                                <div style="padding-bottom: 5px"><i>{{ $item['outcome_name'] }}</i></div>
                                <div>
                                    @foreach($item['objectives'] as $key => $objective)
                                        @if($objective['achieved'])
                                        <div style="display: inline-block; vertical-align: middle; line-height: 20px; ">
                                            {{ $objective['name'] }}
                                        </div>
                                        @endif
                                    @endforeach
                                </div>
                            </div>
                            @endforeach
                        @endif
                    </td>
                    <td valign="top" style="text-align: justify; border: 2px solid; padding: 10px">
                        <div>
                            {{ $report->comments }}
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>