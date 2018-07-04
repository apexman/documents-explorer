// webix.protoUI({
//     name:"datatable_edit"
// }, webix.EditAbility, webix.ui.datatable);

let table1 =
    {
        view: "datatable",
        editable: true,
        editor: "text",
        editValue: "name",
        editaction: "click",
        columns: [
            {id: "id", header: "ID"},
            {id: "name", header: "Name"},
            {id: "email", header: "Email"}
        ],
        url: databaseUrl + "/user/allJSON"
    };