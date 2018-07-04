define(["webix", "dateFormat"],
    function (webix, dateFormat) {

        function listGrid() {
            let documentList =
                {
                    view: "datatable",
                    url: databaseUrl + "/document/all",
                    autowidth:true,
                    select:"row",
                    type:{height:"auto"},
                    columns:[
                        { id:"id",    header:"ID", width:50, hidden: true, sort: "string"},
                        { id:"name",   header:"Name",    width:200, sort: "string"},
                        { id:"created",    header:"Created at", adjust: true, format:formatDate, sort: "date"},
                        { id:"docType",   header:"Document type", width:100, sort: "string"}
                    ],
                    on:{
                        onItemDblClick: function (rowClicked) {
                            console.log(rowClicked);
                        },
                        onAfterLoad:function(){
                            this.sort("name", "asc");
                            this.markSorting("name", "asc");
                        }
                    },
                };

            function formatDate(date) {
                return DateFormat.format.date(date, "dd-MM-yyyy")
            }

            return documentList;
        }

        return {
            grid: listGrid()
        }
    });
