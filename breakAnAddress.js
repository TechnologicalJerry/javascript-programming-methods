function break_address(url_add) {
    var data = url_add.split("://")
    var protocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");

    if (data[1]) {
        return [protocol, domain, data[1]]
    }

    return [protocol, domain]
}

var url_add = "https://www.linkedin.com/in/technojerry/"
console.log("Original address: " + url_add)
console.log(break_address(url_add))