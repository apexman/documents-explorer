define(
    [
        "webix",
        "document/browseDocuments"
    ],
    function (webix, documentList) {
        webix.ui({
            view: "window",
            id: "mainMenu",
            position: "center",
            heigth: 400,
            width: 400,
            head: false,
            body: {
                rows:[
                    {
                        cols:[
                            {
                                view: "button",
                                id: "createDocument",
                                value: "Create document",
                                type: "form",
                                inputWidth: 150,
                            },
                            {
                                view: "button",
                                id: "browseToEdit",
                                value: "Edit document",
                                type: "form",
                                inputWidth: 150,
                                click: function () {
                                    documentList.show();
                                }
                            }
                        ]
                    },
                    {
                        cols:[
                            {
                                view: "button",
                                id: "browseView",
                                value: "View document",
                                type: "form",
                                inputWidth: 150,
                                click: function () {
                                    documentList.show();
                                }
                            },
                            {
                                view: "button",
                                id: "more",
                                value: "MOOAAARR",
                                type: "form",
                                inputWidth: 150
                            }
                        ]
                    }
                ]
            }
        });

        return{
            show: function () {
                $$("mainMenu").show();
            }
        }
    }
);