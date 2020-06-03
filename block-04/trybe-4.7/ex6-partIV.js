var personName = "";

    function complainMessage() {
      alert("I told you not to do that " + personName);
    }
    document.getElementById('dont-button').addEventListener('click', complainMessage);

    function typeAndScream() {
      document.getElementById("audio").play();
      personName = document.getElementById("name").value;
    }
    document.getElementById('name').addEventListener('keyup', typeAndScream);

    function goDark() {
      var body = document.getElementsByTagName("body")[0];
      if (body.className == "") {
        body.className = "dark";
      }
      else {
        body.className = "";
      }
    }
    document.getElementById('mood').addEventListener('click', goDark);

    function finishTheStory() {
      document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
    }
    document.getElementById('story-button').addEventListener('click', finishTheStory);