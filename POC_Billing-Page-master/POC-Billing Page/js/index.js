$(document).ready(function () {
    $("#myTable td").click(function () {

        var column_num = parseInt($(this).index()) + 1;
        var row_num = parseInt($(this).parent().index()) + 1;

        $("#result").html("Row_num =" + row_num + "  ,  Rolumn_num =" + column_num);
    });
});

angular.module("app", []).controller("HelloWorldCtrl", function ($scope) {
    $scope.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].reverse();
    $scope.dates = [new Date("01/01/2019"), new Date("12/2/2019"), new Date("7/21/2019"), new Date("4/18/2019"), new Date("09/12/2019"), new Date("10/19/2019"), new Date("01/04/2019"), new Date("12/29/2019")];

    //  $scope.dates = [new Date("01/01/2019"), new Date("01/03/2019")];

    // $scope.dates=[];
    // for(var i=1;i<=30;i++){
    //     var d = new Date("01/"+i+"/2019");
    //     $scope.dates.push(d);
    // }



    $scope.dates.sort(function (a, b) {
        return a.getTime() - b.getTime();
    })
    $scope.curryear = "2019";
    $scope.processedDates = [];

    var dates = $scope.dates;
    // console.log(dates.length);

    for (var i = 0; i < dates.length; i++) {
        var temp = [], cnt = 0, groupingFactor = 3;
        temp.push(dates[i]);
        for (var j = i + 1; j < dates.length; j++) {
            // console.log(dates[i].toDateString().substring(4),dates[j].toDateString().substring(4));
            // console.log(Math.abs(dates[i].getTime() - dates[j].getTime()) / 86400000);
            if (Math.abs(dates[i].getTime() - dates[j].getTime()) / 86400000 <= groupingFactor - 1) {
                temp.push(dates[j]); cnt++;
            } else break;
        }
        i += cnt;
        $scope.processedDates.push(temp);
    }

    // console.log($scope.processedDates);

    $scope.getStyle = function (date) {
        // console.log(date);
        var diff = Math.abs(new Date("01/01/" + $scope.curryear).getTime() - date.getTime());
        var diffDay = diff / (86400000);
        if (diffDay == 364) diffDay = 365;
        if (diffDay == 1) diffDay = 0;
        diffDay = 365 - diffDay;
        // console.log(diffDay);
        var percent = (diffDay * 100) / 365;
        // console.log(percent);
        if (percent < 50)
            return {
                "top": percent + "%"
            }
        else return {
            "bottom": (100 - percent) + "%"
        }
    }
})