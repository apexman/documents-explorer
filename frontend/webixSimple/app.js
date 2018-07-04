require.config({
    // baseUrl: "js",
    paths: {
        webix: "libs/codebase/webix",
        dateFormat: "libs/dateFormat.min"
    },
    shim: {
        // non-AMD.
        "webix": {
            exports: "webix"
        },
        "dateFormat": {
            exports: "dateFormat"
        }
    }
});

require(
    [
        "webix",
        "dateFormat",
        "docEditor/documentLayout",
        "document/browseAll",
        "department/tree",
        "department/treetable"
    ],
    function (webix, dateFormat, docLayout, documents, depTree, depTreeTable) {
        webix.ready(function () {
            let documentEditor = docLayout.layout;

            webix.ui({
                cols: [
                    {
                        rows:
                            []
                    },
                    documentEditor
                ]
            });

            webix.ui({
                view: "window",
                id: "documentListWindow",
                height: 500,
                // autowidth: true,
                // width: 400,
                position: "center",
                move: true,
                // modal: true,
                head: {
                    view: "toolbar", cols: [
                        {view: "label", label: "Document list"},
                        {
                            view: "icon", icon: "times",
                            click: function () {
                                $$("documentListWindow").close();
                            }
                        }
                    ]
                },
                body: documents.grid
            }).show();
        });
    }
);