sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("feemanagmentadmin.controller.View1", {
        onInit() {
            // Create mock data for the dashboard
            const oData = {
                recentApplications: [
                    {
                        name: "AFNAN FIRDAUS BIN HASSAN",
                        status: "Pending",
                        statusState: "Warning",
                        details: "APP-2025-001 - 08/01/2025 (Sun) - Applied on 2025-01-05"
                    },
                    {
                        name: "SITI AISYAH BINTI RAHMAN",
                        status: "Approved",
                        statusState: "Success",
                        details: "APP-2025-002 - 09/01/2025 (Mon) - Applied on 2025-01-06"
                    },
                    {
                        name: "MUHAMMAD HAZIQ BIN ISMAIL",
                        status: "Pending",
                        statusState: "Warning",
                        details: "APP-2025-003 - 10/01/2025 (Tue) - Applied on 2025-01-07"
                    },
                    {
                        name: "NURUL ALESSA BINTI ABDULLAH",
                        status: "Rejected",
                        statusState: "Error",
                        details: "APP-2025-004 - 11/01/2025 (Wed) - Applied on 2025-01-08"
                    }
                ],
                maintenanceRequests: [
                    {
                        title: "Air conditioner not working",
                        location: "Block A - 101-1017 (KLG-2025-0001)",
                        reportedBy: "Reported by HUSNA HABA",
                        priority: "High",
                        priorityState: "Error",
                        icon: "sap-icon://alert",
                        iconColor: "#E74C3C"
                    },
                    {
                        title: "Water leakage in bathroom",
                        location: "Block B - 101-4021 (KLG-2025-0002)",
                        reportedBy: "Reported by SITI AISYAH ZEIN",
                        priority: "Urgent",
                        priorityState: "Error",
                        icon: "sap-icon://alert",
                        iconColor: "#E74C3C"
                    },
                    {
                        title: "Broken window",
                        location: "Block C - 105-3032 (KLG-2025-0003)",
                        reportedBy: "Reported by AHMAD SAUFI",
                        priority: "Medium",
                        priorityState: "Warning",
                        icon: "sap-icon://warning",
                        iconColor: "#F39C12"
                    },
                    {
                        title: "Light bulb replacement",
                        location: "Block B - 101-1183 (KLG-2025-0004)",
                        reportedBy: "Reported by NURLIA AQILA",
                        priority: "Edge",
                        priorityState: "Information",
                        icon: "sap-icon://hint",
                        iconColor: "#3498DB"
                    }
                ],
                roomAllocations: [
                    {
                        block: "Block A (KTD)",
                        occupied: 98,
                        capacity: 100,
                        available: 2,
                        percentage: 98
                    },
                    {
                        block: "Block C (KTF)",
                        occupied: 84,
                        capacity: 100,
                        available: 16,
                        percentage: 84
                    },
                    {
                        block: "Block D (KTP)",
                        occupied: 91,
                        capacity: 100,
                        available: 9,
                        percentage: 91
                    }
                ],
                checkActivities: [
                    {
                        studentName: "AFNAN FIRDAUS BIN HASSAN",
                        room: "Block A - 101-C-08 (B.I)",
                        date: "28 Jan - 01:23:09",
                        status: "Check-In",
                        statusState: "Success",
                        icon: "sap-icon://customer",
                        iconColor: "#27AE60"
                    },
                    {
                        studentName: "SITI NURHANA QAIRA BINTI AHMAD",
                        room: "Block B - 101 / Jul 31",
                        date: "27 Jan - 14:35:21",
                        status: "Check-Out",
                        statusState: "Warning",
                        icon: "sap-icon://log",
                        iconColor: "#E67E22"
                    },
                    {
                        studentName: "MUHAMMAD AFIQ BIN RAHMAN",
                        room: "Block C - 205 / Jun 15",
                        date: "28 Jan - 09:12:45",
                        status: "Check-In",
                        statusState: "Success",
                        icon: "sap-icon://customer",
                        iconColor: "#27AE60"
                    },
                    {
                        studentName: "NURUL AINA FIQRY ISRAR",
                        room: "Block A - 303 / Jul 20",
                        date: "27 Jan - 16:48:33",
                        status: "Check-In",
                        statusState: "Success",
                        icon: "sap-icon://customer",
                        iconColor: "#27AE60"
                    }
                ],
                recentPayments: [
                    {
                        studentName: "AFIFAH FIRDAUS BIN HASSAN",
                        paymentType: "Completed payment - RM 777.00",
                        timeAgo: "2 hours ago",
                        status: "SUCCESS",
                        statusState: "Success"
                    },
                    {
                        studentName: "SITI NURHANA QAIRA BINTI AHMAD",
                        paymentType: "Partial payment - RM 777.10",
                        timeAgo: "3 hours ago",
                        status: "PENDING",
                        statusState: "Warning"
                    },
                    {
                        studentName: "MUHAMMAD AFIQ BIN RAHMAN",
                        paymentType: "Completed payment - RM 890.00",
                        timeAgo: "1 day ago",
                        status: "SUCCESS",
                        statusState: "Success"
                    },
                    {
                        studentName: "NURUL AINA FIQRY ISRAR",
                        paymentType: "Pending Note - RM 777.00",
                        timeAgo: "1 day ago",
                        status: "HIGH",
                        statusState: "Error"
                    }
                ]
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onViewPayments: function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RoutePaymentReport");
        }
    });
});