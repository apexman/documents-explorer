define(["webix"],
    function (webix) {

    function treeTableGrid() {

        webix.protoUI({
            name: "edittreetable"
        }, webix.EditAbility, webix.ui.treetable);


        let treetable =
            {
                // view: "edittreetable",
                view: "treetable",
                editable: true,
                editor: "text",
                // editValue: "name",
                editaction: "custom",
                datatype: "departmentJson",
                url: databaseUrl + "/department/all",
                drag: true,
                columns: [
                    {id: "id", header: "ID", width: 50},
                    {
                        id: "name", header: "Film title", width: 250,
                        template: "{common.treetable()} #name#"
                    },
                    {id: "email", header: "Mode", width: 200}
                ],
                template: function (obj, common) {
                    return common.icon(obj, common) + common.folder(obj, common) + "<span>" + obj.name + "</span>"
                },
                ready: function () {
                    this.openAll();
                },
                on: {
                    "onItemClick": function (id) {
                        console.log("onItemClick treetable");
                        this.editRow(id);
                    }
                }
            };

        return treetable;
    }

    return {
        grid: treeTableGrid()
    }
});
