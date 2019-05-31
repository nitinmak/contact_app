document.addEventListener("deviceready", function () {
    function onSuccess(contacts) {
alert(contacts)
        $("#contacts-list").empty();

        if (contacts.length == 0) {
            $("#contacts-list").append("<li>No results</li>").listview("refresh");
        } else {
            for (var i = 0; i < contacts.length; i++) {
                $("#contacts-list").append("<li>" + contacts[i].displayName + "</li>").listview("refresh");
            }
        }

        $.mobile.loading("hide");
    };

    function onError(contactError) {
        // alert(contactError);
        $.mobile.loading("hide");
        alert(contactError);
    };

    function searchForContact() {
        $.mobile.loading("show");

        var options = new ContactFindOptions();
        // alert(options);
        options.filter = $("#searchTerm").val();
        options.multiple = true;
        //options.desiredFields = [navigator.contacts.fieldType.id];
        options.hasPhoneNumber = true;
        var fields = ["displayName", "name",];
        alert(navigator.contacts.find);
        navigator.contacts.find(fields, onSuccess, onError, options);
    }

    $(document).on("change", "#searchTerm", searchForContact);

    $(document).on("click", "#searchButton", searchForContact);

}, false);
