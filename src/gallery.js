var gallery = function() {
  var examples = {
    "featured-examples": [
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."}
    ],
    "getting-started": [
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."}
    ],
    "algorithmic-drawing": [
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."}
    ],
    "color": [
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."}
    ],
    "matrix": [
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."},
      {url:"edit.html#06/mix.frag", src: "images/preview.png", caption: "Caption, credit, etc."}
    ]
  }

  function createLi(d) {
    li = $("<li>");
    var container = $("<div>").attr("class", "imgcontainer")
    .append($("<img>").attr({"src": d.src, "alt": d.caption}))
    .append($("<div>").attr("class", "caption").text(d.caption));
    li.append(container);
    return li;
  }

  function createUl(list) {
    var ul = $("<ul>");
    $.each(list, function(n, d) {
      ul.append(createLi(d));
    })
    return ul;
  }

  return {
    createExampleList(id) {
      var div = $("#" + id + "-examples");
      if (examples[id].length < 4) {
        div.append(createUl(examples[id]));
      } else {
        var checkId = id + "-check";
        div.append(createUl(examples[id].slice(0,3)));

        var ul = createUl(examples[id].slice(3)).attr("class", "more-examples");
        var exContainer = $("<div>").attr("class", "extra-container").append(ul);
        div.append(exContainer);

        var toggle = $("<a>").attr("for", checkId).text("Show More");
        div.append($("<div>").attr("class", "toggle-container").append(toggle));

        var open = false;
        toggle.click(function() {
          open = !open;
          if (open) {
            console.log(ul.height());
              exContainer.animate({height: ul.height()}, 400, "swing", function() {
                ul.animate({opacity: 1}, 400, "swing")
              }
            );
            toggle.text("Show Less");
          } else {
            ul.animate({opacity: 0}, 400, "swing",
              function() {
                exContainer.animate({height: 0}, 400, "swing");
              }
            )
            toggle.text("Show More");
          }
        })

      }
    }
  }

}();
