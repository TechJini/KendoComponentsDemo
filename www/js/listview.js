function listViewPageInit(e) {
    var dataSource = new kendo.data.DataSource({
        data: [{
            name: "Pull To Refresh",
            id: "pullToRefreshView"
        }, {
            name: "Section Headers",
            id: "sectionHeadersView"
        }, {
            name: "Grouped TableView",
            id: "groupedTableView"
        }, {
            name: "Search Bar",
            id: "searchBarView"
        }
        // , {
        //     name: "Swipe To Delete",
        //     id: "swipeToDeleteView"
        // }
         ]
    });
    $("#listViewSample").kendoMobileListView({
        dataSource: dataSource,
        template: $("#listTemplate").text()
    });
}

function pullToRefreshListViewInit(e) {
    var pullToRefreshDataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "http://demos.telerik.com/kendo-ui/service/Products",
                dataType: "jsonp"
            }
        },
        schema: {
            total: function(response) {
                return 10; // total is returned in the "total" field of the response
            }
        },
        serverPaging: true,
        page: 2,
        pageSize: 10
    });

    $("#pullToRefreshListViewSample").kendoMobileListView({
        dataSource: pullToRefreshDataSource,
        template: $("#pullToRefreshListTemplate").text(),
        pullToRefresh: true,
        appendOnRefresh: true
    });

}

var groupedData = [{
    name: "Chirashi sushi",
    description: "Organic greens topped with market fresh sashimi, wasabi soy vinaigrette.",
    letter: "C"
}, {
    name: "Miso soup",
    description: "Boiled soy beans with salt.",
    letter: "M"
}, {
    name: "Shake",
    description: "A nice seaweed salad.",
    letter: "S"
}, {
    name: "Shiromi",
    description: "A nice seaweed salad.",
    letter: "S"
}, {
    name: "Hosomaki Mix",
    description: "Tuna pieces.",
    letter: "H"
}, {
    name: "Seattle rolls",
    description: "Tuna pieces.",
    letter: "S"
}, {
    name: "Spicy Tuna rolls",
    description: "Tuna pieces.",
    letter: "S"
}, {
    name: "Ebi rolls",
    description: "Tuna pieces.",
    letter: "E"
}, {
    name: "Chicken Teriyaki",
    description: "Tuna roll with wasabi.",
    letter: "C"
}, {
    name: "Salmon Teriyaki",
    description: "Tuna roll with wasabi.",
    letter: "S"
}, {
    name: "Gohan",
    description: "Tuna roll with wasabi.",
    letter: "G"
}, {
    name: "Tori Katsu",
    description: "Tuna roll with wasabi.",
    letter: "T"
}, {
    name: "Yaki Udon",
    description: "Tuna roll with wasabi.",
    letter: "Y"
}, {
    name: "Sashimi Salad",
    description: "Organic greens topped with market fresh sashimi, wasabi soy vinaigrette.",
    letter: "S"
}, {
    name: "Seaweed Salad",
    description: "A nice seaweed salad.",
    letter: "S"
}, {
    name: "Edamame",
    description: "Boiled soy beans with salt.",
    letter: "E"
}, {
    name: "Maguro",
    description: "Tuna pieces.",
    letter: "M"
}, {
    name: "Tekka Maki",
    description: "Tuna roll with wasabi.",
    letter: "T"
}, {
    name: "California Rolls",
    description: "Crab sticks, avocado and cucumber.",
    letter: "C"
}];

function sectionHeadersViewInit(e) {

    $("#sectionHeadersViewSample").kendoMobileListView({
        dataSource: kendo.data.DataSource.create({
            data: groupedData,
            group: "letter"
        }),
        template: $("#sectionHeaderslistTemplate").html(),
        headerTemplate: "${value}",
        fixedHeaders: true
    });
}

function groupedTableViewInit(e) {
    $("#groupedTableViewSample").kendoMobileListView({
        dataSource: kendo.data.DataSource.create({
            data: groupedData,
            group: "letter"
        }),
        template: $("#groupedTableViewTemplate").html(),
        headerTemplate: "${value}",
        fixedHeaders: true,
        style: 'inset'
    });
}

function searchBarViewInit(e) {
    var searchBarDataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "http://demos.telerik.com/kendo-ui/service/Products",
                dataType: "jsonp"
            }
        },
        pageSize: 50
    });

    $("#searchBarViewSample").kendoMobileListView({
        dataSource: searchBarDataSource,
        template: $("#searchBarTemplate").text(),
        filterable: {
            placeholder: "Type to search...",
            field: "ProductName",
            operator: "startswith"
        }
    });
}

function swipeToDeleteViewInit(e) {
    // // body...

}