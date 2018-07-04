define(
    [
        "webix",
        "dateFormat",
        "view/mainMenu",
        "docEditor/documentLayout",
    ],
    function (webix, dateFormat, mainMenu) {
        function prepareInterface() {
            mainMenu.show();
        }

        // function browseDocumentsList() {
        //     webix.ui({
        //         view: "window",
        //         id: "documentListWindow",
        //         height: 500,
        //         position: "center",
        //         move: true,
        //         // modal: true,
        //         head: {
        //             view: "toolbar", cols: [
        //                 {view: "label", label: "Document list"},
        //                 {
        //                     view: "icon", icon: "times",
        //                     click: function () {
        //                         $$("documentListWindow").close();
        //                     }
        //                 }
        //             ]
        //         },
        //         body: documents.grid
        //     }).show();
        // }

        return {
            show: function () {
                prepareInterface();
            }
        }
    }
);