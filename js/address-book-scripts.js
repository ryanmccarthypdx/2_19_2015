var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state + "  " + this.ZIP;
  }
};
var Contact = {
  moniker: function() {
    return this.firstName + " " + this.lastName;
  }
};


var capitalize = function(inputWord) {
  var letters = inputWord.split("");
  var firstLetter = letters.shift();
  var cappedLetter = firstLetter.toUpperCase();
  letters.unshift(cappedLetter);
  var outputWord = letters.join("");
  return outputWord;
};

$(document).ready(function() {
  var allContacts = [];
  $("#add-address").click(function() {
    $("#new-addresses").append(
       '<div class="new-address">' +
       '<div class="form-group">' +
         '<label for="new-street">Street</label>' +
         '<input type="text" class="form-control new-street">' +
       '</div>' +
       '<div class="form-group">' +
         '<label for="new-city">City</label>' +
         '<input type="text" class="form-control new-city">' +
       '</div>' +
       '<div class="form-group">' +
         '<label for="new-state">State</label>' +
         '<input type="text" class="form-control new-state">' +
       '</div>' +
       '<div class="form-group">' +
         '<label for="new-ZIP">ZIP</label>' +
         '<input type="text" class="form-control new-ZIP" id="new-ZIP">' +
       '</div>' +
     '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = capitalize($("input#new-first-name").val());
    var inputtedLastName = capitalize($("input#new-last-name").val());

    var newContact = Object.create(Contact);
    newContact.firstName = capitalize($("input#new-first-name").val());
    newContact.lastName = capitalize($("input#new-last-name").val());
    newContact.addresses = [];
    allContacts.push(newContact);

    $(".new-address").each(function() {
      var newAddress = Object.create(Address);
      newAddress.street = $(this).find("input.new-street").val();
      newAddress.city = $(this).find("input.new-city").val();
      newAddress.state = $(this).find("input.new-state").val();
      newAddress.ZIP = $(this).find("input.new-ZIP").val();
      newContact.addresses.push(newAddress);
      $(this).find("input.new-street").val("");
      $(this).find("input.new-city").val("");
      $(this).find("input.new-state").val("");
      $(this).find("input.new-ZIP").val("");
    });

    $("ul#contacts").empty();

    allContacts.sort(function(a, b) {
      if (a.lastName > b.lastName) {
        return 1;
      } else if (a.lastName < b.lastName) {
        return -1;
      } else if (a.firstName > b.firstName) {
        return 1;
      } else {
        return 0;
      }
    });

    allContacts.forEach(function(contact) {
      $("ul#contacts").append("<li><span class='contact'>" + contact.moniker() + "</span></li>");
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(contact.moniker());
        $(".name").text(contact.moniker());
        $("ul#addresses").text("");
        contact.addresses.forEach(function(address){
          $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");


    // allContacts.forEach(function(contact) {
    //   $("ul#contacts").append("<li><span class='contact'>" + contact.firstName + " " + contact.lastName + "</span></li>");
    //   $(".contact").last().click(function() {
    //     $("#show-contact").show();
    //     $("#show-contact h2").text(contact.firstName + " " + contact.lastName);
    //     $(".name").text(contact.firstName + " " + contact.lastName);
    //     $(".address").text(contact.address);
    //   });
    // });



  });
});
