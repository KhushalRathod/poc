var app = angular.module('app', []);

app.controller("HelloWorldCtrl", function ($scope) {
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
});

app.controller("account", function ($scope) {
    $scope.account = {
        "id": "1-AJJZE",
        "master_acc_id": "1-AJJZE",
        "master_acc_num": "850052431",
        "created": "2014-03-28 17:33:21",
        "created_by": "SADMIN",
        "updated": "2015-12-01 10:17:16",
        "updated_by": "SADMIN",
        "conflict_id": "0",
        "modification_num": 47,
        "account_nr": "850052431",
        "account_name": "Damme Ievis",
        "account_type": "Residential",
        "account_type_lic": "Residential",
        "account_sub_type": "Standard",
        "account_sub_type_lic": "Residential",
        "ssn_nr": "3807344ddfsdas",
        "account_class": "Customer",
        "account_class_lic": "Customer",
        "primary_contact_id": "1-AJJY6",
        "source": "Siebel",
        "brand": "",
        "secret_question": "",
        "secret_answer": "",
        "good_standing": "Y",
        "account_status_db": "Active",
        "account_status": "Active",
        "account_status_lic": "Active",
        "bankruptcy_date": "",
        "treatment_start_dt": "",
        "bad_debt": "N",
        "secret_cust_acc": "N",
        "insolvency_status": "",
        "insolvency_status_lic": "",
        "credit_class": "",
        "credit_scoring_date": "",
        "customer_since": "2014-03-28",
        "disable_legal_update": "N",
        "primary_postpaid_segment": "Develop",
        "group_id": "",
        "primary_contact_ssn": "3807344ddfsdas",
        "primary_contact_full_name": "Damme Ievis",
        "email_address": "111@domain.com",
        "secondary_email_address": "",
        "primary_phone_nr": "37126879281",
        "primary_contact_mobile_nr": "37121851160",
        "primary_contact_first_name": "Damme",
        "primary_contact_middle_name": "",
        "primary_contact_last_name": "Ievis",
        "primary_contact_salutation": "",
        "full_addr": "Brivibai, 13, a, LT-1234, Vilnius",
        "primary_street_address": "Brivibai",
        "primary_street_nr": "13",
        "primary_street_letter": "a",
        "primary_adress_zip_code": "LT-1234",
        "primary_address_city": "Vilnius",
        "primary_address_country_lic": "Lebanon",
        "primary_address_country": "Lebanon",
        "primary_apartment_nr": "",
        "attention_of": "",
        "care_of": "",
        "primary_address_id": "1-1XBDN",
        "primary_address_latitude": "",
        "primary_address_longitude": "",
        "primary_address_county": "Kanaada",
        "primary_address_parish": "test",
        "primary_address_village": "test",
        "agreement_nr": "",
        "agreement_type": "",
        "agreement_name": "",
        "account_loyalty": "",
        "account_credit_limit": "",
        "vat_number": "",
        "tax_class_lic": "",
        "tax_class": "",
        "is_pure_legacy": "N"
    };
});

app.controller("assets", function ($scope) {
    $scope.assets = [
        {
            "id": "1-2ULHKG",
            "created": "2014-10-06 16:59:31",
            "created_date": "2014-10-06",
            "created_by": "SADMIN",
            "updated": "2014-11-05 13:50:25",
            "updated_by": "TEST_ROLE_2",
            "conflict_id": "0",
            "modification_num": 2,
            "integration_id": "1-2ULTII",
            "owner_account_id": "1-AJJZE",
            "status_lic": "Active",
            "status": "Active",
            "planned_disconnect": "",
            "reactivation_date": "",
            "actual_disconnect_date": "",
            "billing_account_id": "1-2TIZIT",
            "brand": "Tele2",
            "pending_order_id": "1-349NNH",
            "pending_order": "true",
            "follow_on_action": "",
            "follow_on_date": "",
            "alias": "",
            "password": "",
            "wcs_admin_flag": "N",
            "barring_status": "",
            "barring_status_lic": "",
            "binding_start": "",
            "binding_end": "",
            "binding_until_dt": "",
            "billing_account_name": "Damme Ievis",
            "billing_account_type": "Residential",
            "billing_account_source": "Singl.eView",
            "billing_account_number": "850143285",
            "billing_legacy_account": "",
            "product_name": "Mobile broad band services",
            "product_type_lic": "MBB",
            "enable_gui_modification": "Y",
            "enable_gui_deactivation": "Y",
            "enable_gui_suspension": "Y",
            "role_based_ordering": "N",
            "price_type": "Recurring",
            "primary_attribute_name": "Postpaid TN",
            "root_pav": "37099816234",
            "primary_attribute_value": "37099816234",
            "regret_end_date": "2014-10-06 16:57:24",
            "status_area": "",
            "activation_date": "",
            "subcomponents": [
                {
                    "id": "1-2ULHKN",
                    "product_sales_category_lic": "Price Plan",
                    "version_date": "2014-10-06 00:00:00",
                    "ba_id": "1-2TIZIT",
                    "status_lic": "Active",
                    "product_name": "Mobile Internet 9 (2,60658 Eur)",
                    "product_type_lic": "Price Plan",
                    "primary_attribute_value": "",
                    "activation_date": "2014-10-06"
                }
            ]
        },
        {
            "id": "1-2W6R8Q",
            "created": "2014-10-20 13:54:06",
            "created_date": "2014-10-20",
            "created_by": "SADMIN",
            "updated": "2014-10-20 13:54:07",
            "updated_by": "SADMIN",
            "conflict_id": "0",
            "modification_num": 1,
            "integration_id": "1-2W6SRH",
            "owner_account_id": "1-AJJZE",
            "status_lic": "Active",
            "status": "Active",
            "planned_disconnect": "",
            "reactivation_date": "",
            "actual_disconnect_date": "",
            "billing_account_id": "1-2TIZIT",
            "brand": "Tele2",
            "pending_order_id": "",
            "pending_order": "false",
            "follow_on_action": "",
            "follow_on_date": "",
            "alias": "",
            "password": "",
            "wcs_admin_flag": "N",
            "barring_status": "",
            "barring_status_lic": "",
            "binding_start": "",
            "binding_end": "",
            "binding_until_dt": "",
            "billing_account_name": "Damme Ievis",
            "billing_account_type": "Residential",
            "billing_account_source": "Singl.eView",
            "billing_account_number": "850143285",
            "billing_legacy_account": "",
            "product_name": "Mobile broad band services",
            "product_type_lic": "MBB",
            "enable_gui_modification": "Y",
            "enable_gui_deactivation": "Y",
            "enable_gui_suspension": "Y",
            "role_based_ordering": "N",
            "price_type": "Recurring",
            "primary_attribute_name": "Postpaid TN",
            "root_pav": "37098234097",
            "primary_attribute_value": "37098234097",
            "regret_end_date": "2014-10-20 13:41:07",
            "status_area": "",
            "activation_date": "2014-10-20",
            "subcomponents": [
                {
                    "id": "1-2W6RA7",
                    "product_sales_category_lic": "Price Plan",
                    "version_date": "2014-10-20 00:00:00",
                    "ba_id": "1-2TIZIT",
                    "status_lic": "Active",
                    "product_name": "Laisvas internetas XL (45 LT) (13,0329 Eur)",
                    "product_type_lic": "Price Plan",
                    "primary_attribute_value": "",
                    "activation_date": "2014-10-20"
                },
                {
                    "id": "1-2W6R8U",
                    "product_sales_category_lic": "SIM Card",
                    "version_date": "2014-10-20 00:00:00",
                    "ba_id": "1-2TIZIT",
                    "status_lic": "Active",
                    "product_name": "SIM card",
                    "product_type_lic": "SIM Card",
                    "primary_attribute_value": "76895463465345646566",
                    "activation_date": "2014-10-20"
                }
            ]
        },
        {
            "id": "1-2W6P0N",
            "created": "2014-10-20 13:54:06",
            "created_date": "2014-10-20",
            "created_by": "SADMIN",
            "updated": "2014-10-20 13:54:06",
            "updated_by": "SADMIN",
            "conflict_id": "0",
            "modification_num": 1,
            "integration_id": "1-2W6NMM",
            "owner_account_id": "1-AJJZE",
            "status_lic": "Active",
            "status": "Active",
            "planned_disconnect": "",
            "reactivation_date": "",
            "actual_disconnect_date": "",
            "billing_account_id": "1-2TIZIT",
            "brand": "Tele2",
            "pending_order_id": "",
            "pending_order": "false",
            "follow_on_action": "",
            "follow_on_date": "",
            "alias": "",
            "password": "",
            "wcs_admin_flag": "N",
            "barring_status": "",
            "barring_status_lic": "",
            "binding_start": "",
            "binding_end": "",
            "binding_until_dt": "",
            "billing_account_name": "Damme Ievis",
            "billing_account_type": "Residential",
            "billing_account_source": "Singl.eView",
            "billing_account_number": "850143285",
            "billing_legacy_account": "",
            "product_name": "Mobile broad band services",
            "product_type_lic": "MBB",
            "enable_gui_modification": "Y",
            "enable_gui_deactivation": "Y",
            "enable_gui_suspension": "Y",
            "role_based_ordering": "N",
            "price_type": "Recurring",
            "primary_attribute_name": "Postpaid TN",
            "root_pav": "37034187645",
            "primary_attribute_value": "37034187645",
            "regret_end_date": "2014-10-20 13:41:07",
            "status_area": "",
            "activation_date": "2014-10-20",
            "subcomponents": [
                {
                    "id": "1-2W6P0R",
                    "product_sales_category_lic": "SIM Card",
                    "version_date": "2014-10-20 00:00:00",
                    "ba_id": "1-2TIZIT",
                    "status_lic": "Active",
                    "product_name": "SIM card",
                    "product_type_lic": "SIM Card",
                    "primary_attribute_value": "78965460786756634633",
                    "activation_date": "2014-10-20"
                },
                {
                    "id": "1-2W6P10",
                    "product_sales_category_lic": "Price Plan",
                    "version_date": "2014-10-20 00:00:00",
                    "ba_id": "1-2TIZIT",
                    "status_lic": "Active",
                    "product_name": "Mobile Internet S (2,60658 Eur)",
                    "product_type_lic": "Price Plan",
                    "primary_attribute_value": "",
                    "activation_date": "2014-10-20"
                }
            ]
        },
        {
            "id": "1-2W6PQ1",
            "created": "2014-10-20 13:54:06",
            "created_date": "2014-10-20",
            "created_by": "SADMIN",
            "updated": "2014-10-20 13:54:06",
            "updated_by": "SADMIN",
            "conflict_id": "0",
            "modification_num": 1,
            "integration_id": "1-2W6S52",
            "owner_account_id": "1-AJJZE",
            "status_lic": "Active",
            "status": "Active",
            "planned_disconnect": "",
            "reactivation_date": "",
            "actual_disconnect_date": "",
            "billing_account_id": "1-2TIZIT",
            "brand": "Tele2",
            "pending_order_id": "",
            "pending_order": "false",
            "follow_on_action": "",
            "follow_on_date": "",
            "alias": "",
            "password": "",
            "wcs_admin_flag": "N",
            "barring_status": "",
            "barring_status_lic": "",
            "binding_start": "",
            "binding_end": "",
            "binding_until_dt": "",
            "billing_account_name": "Damme Ievis",
            "billing_account_type": "Residential",
            "billing_account_source": "Singl.eView",
            "billing_account_number": "850143285",
            "billing_legacy_account": "",
            "product_name": "Mobile broad band services",
            "product_type_lic": "MBB",
            "enable_gui_modification": "Y",
            "enable_gui_deactivation": "Y",
            "enable_gui_suspension": "Y",
            "role_based_ordering": "N",
            "price_type": "Recurring",
            "primary_attribute_name": "Postpaid TN",
            "root_pav": "37098237654",
            "primary_attribute_value": "37098237654",
            "regret_end_date": "2014-10-20 13:41:07",
            "status_area": "",
            "activation_date": "2014-10-20",
            "subcomponents": [
                {
                    "id": "1-2W6PQ5",
                    "product_sales_category_lic": "SIM Card",
                    "version_date": "2014-10-20 00:00:00",
                    "ba_id": "1-2TIZIT",
                    "status_lic": "Active",
                    "product_name": "SIM card",
                    "product_type_lic": "SIM Card",
                    "primary_attribute_value": "86568778976546543434",
                    "activation_date": "2014-10-20"
                },
                {
                    "id": "1-2W6PQE",
                    "product_sales_category_lic": "Price Plan",
                    "version_date": "2014-10-20 00:00:00",
                    "ba_id": "1-2TIZIT",
                    "status_lic": "Active",
                    "product_name": "Mobile Internet S (2,60658 Eur)",
                    "product_type_lic": "Price Plan",
                    "primary_attribute_value": "",
                    "activation_date": "2014-10-20"
                }
            ]
        }
    ]
});
