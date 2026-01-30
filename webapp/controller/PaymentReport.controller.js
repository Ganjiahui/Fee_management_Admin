sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (Controller, Filter, FilterOperator, JSONModel, MessageBox) {
    "use strict";

    return Controller.extend("feemanagmentadmin.controller.PaymentReport", {
        onInit: function () {
            const oData = {
                students: [
                    {
                        matrixNo: "AI210009",
                        studentName: "ABDUL BINTI KARIM",
                        icNumber: "950517732893",
                        hostel: "KOLEJ TUN HUSSEIN ONN",
                        totalFees: "777.00",
                        outstanding: "0.00",
                        status: "PAID"
                    },
                    {
                        matrixNo: "AI210065",
                        studentName: "HAKIMI BINTI RAHMAN",
                        icNumber: "950315803556",
                        hostel: "KOLEJ TUN HUSSEIN ONN",
                        totalFees: "777.00",
                        outstanding: "777.00",
                        status: "UNPAID"
                    },
                    {
                        matrixNo: "AI210083",
                        studentName: "AISYAH BINTI AZIZ",
                        icNumber: "981209560389",
                        hostel: "KOLEJ TUN AMINAH",
                        totalFees: "777.00",
                        outstanding: "777.00",
                        status: "UNPAID"
                    },
                    {
                        matrixNo: "AI210090",
                        studentName: "NADIA BIN KARIM",
                        icNumber: "950506648678",
                        hostel: "KOLEJ TEMENGGUNG IBRAHIM",
                        totalFees: "777.00",
                        outstanding: "777.00",
                        status: "UNPAID"
                    },
                    {
                        matrixNo: "AI210001",
                        studentName: "AINA BINTI TAIB",
                        icNumber: "991020387304",
                        hostel: "KOLEJ TUN HUSSEIN ONN",
                        totalFees: "777.00",
                        outstanding: "0.00",
                        status: "PAID"
                    },
                    {
                        matrixNo: "AI210019",
                        studentName: "AZRI BINTI TAIB",
                        icNumber: "950701847259",
                        hostel: "KOLEJ TUN HUSSEIN ONN",
                        totalFees: "777.00",
                        outstanding: "0.00",
                        status: "PAID"
                    },
                    {
                        matrixNo: "AI210054",
                        studentName: "MUHAMMAD BIN YUSOF",
                        icNumber: "990619791546",
                        hostel: "KOLEJ TUN FATIMAH",
                        totalFees: "777.00",
                        outstanding: "0.00",
                        status: "PAID"
                    },
                    {
                        matrixNo: "AI210037",
                        studentName: "AMIRA BINTI ZAINAL",
                        icNumber: "971103676993",
                        hostel: "KOLEJ TEMENGGUNG IBRAHIM",
                        totalFees: "777.00",
                        outstanding: "0.00",
                        status: "PAID"
                    },
                    {
                        matrixNo: "AI210011",
                        studentName: "NURHALIZAH BINTI ALI",
                        icNumber: "990813371412",
                        hostel: "KOLEJ TUN FATIMAH",
                        totalFees: "777.00",
                        outstanding: "0.00",
                        status: "PAID"
                    },
                    {
                        matrixNo: "AI210062",
                        studentName: "ARIFF BIN KARIM",
                        icNumber: "970206649982",
                        hostel: "KOLEJ TUN HUSSEIN ONN",
                        totalFees: "777.00",
                        outstanding: "777.00",
                        status: "UNPAID"
                    },
                    {
                        matrixNo: "AI210061",
                        studentName: "MOHAMAD BINTI HAMID",
                        icNumber: "991201655450",
                        hostel: "KOLEJ TUN HUSSEIN ONN",
                        totalFees: "777.00",
                        outstanding: "777.00",
                        status: "UNPAID"
                    },
                    {
                        matrixNo: "AI210064",
                        studentName: "SHAFIQ BIN ISMAIL",
                        icNumber: "951019123538",
                        hostel: "KOLEJ TEMENGGUNG IBRAHIM",
                        totalFees: "777.00",
                        outstanding: "777.00",
                        status: "UNPAID"
                    },
                    {
                        matrixNo: "AI210068",
                        studentName: "AFIQ BIN AHMAD",
                        icNumber: "970414519452",
                        hostel: "KOLEJ TUN DR ISMAIL",
                        totalFees: "777.00",
                        outstanding: "777.00",
                        status: "UNPAID"
                    },
                    {
                        matrixNo: "AI210071",
                        studentName: "AZRI BINTI ABDULLAH",
                        icNumber: "990318888125",
                        hostel: "KOLEJ TEMENGGUNG IBRAHIM",
                        totalFees: "777.00",
                        outstanding: "777.00",
                        status: "UNPAID"
                    }
                ]
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onNavBack: function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");
        },

        onFilterChange: function (oEvent) {
            const sKey = oEvent.getParameter("item").getKey();
            const oTable = this.byId("paymentTable");
            const oBinding = oTable.getBinding("items");
            
            let aFilters = [];
            
            if (sKey === "paid") {
                aFilters.push(new Filter("status", FilterOperator.EQ, "PAID"));
            } else if (sKey === "unpaid") {
                aFilters.push(new Filter("status", FilterOperator.EQ, "UNPAID"));
            }
            
            oBinding.filter(aFilters);
        },

        onSendReminder: function () {
            MessageBox.success("Reminder has been sent", {
                title: "Send Successfully",
                actions: [MessageBox.Action.OK],
                emphasizedAction: MessageBox.Action.OK
            });
        }
    });
});
