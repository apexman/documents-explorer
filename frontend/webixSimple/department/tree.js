define(
    ["webix"],
    function (webix) {

    function getTreeGrid() {
        webix.protoUI({
            name: "edittree"
        }, webix.EditAbility, webix.ui.tree);

        let toolbar = {
            cols: [
                {view: "text", id: "updateForm", value: "new value"},
                {
                    view: "button", value: "update selected", click: function () {
                        console.log("button clicked");
                        webix.ajax().post("http://localhost:8088/department/add", {parentId: null, name: "asdf", description: "asdf"});
                    }
                }
            ]
        };

        // //custom json format
        let departmentJson = webix.DataDriver.departmentJson = webix.copy(webix.DataDriver.json);
        departmentJson.child = "employees";

        let tree = {
            id: "departmentTree",
            view: "edittree",
            // height: 200,
            // view: "tree",
            editable: true,
            editor: "text",
            editValue: "name",
            datatype: "departmentJson",
            url: databaseUrl + "/department/all",
            drag: true,
            template: function (obj, common) {
                return common.icon(obj, common) + common.folder(obj, common) + "<span>" + obj.name + "</span>"
            },
            ready: function () {
                this.openAll();
            },
            on: {
                "onItemClick": function (id, event, node) {
                    console.log("onItemClick");
                    let treeElement = this.getItem(id);
                    console.log(treeElement);
                    $$("updateForm").setValue(treeElement.name);
                    console.log($$("updateForm"));
                }
            }
        };

        return {
            rows: [
                tree,
                toolbar
            ]
        };
    }

    return {
        grid: getTreeGrid()
    }
});