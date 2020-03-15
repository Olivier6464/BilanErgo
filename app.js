function getSelectionsListe(id) {
	var liste = document.getElementById(id);
	options = liste.getElementsByTagName("option");
	var lsSelections = "";
	for (var i = 0; i < liste.options.length; i++) {
		if (liste.options[i].selected) {
			lsSelections += liste.options[i].value + ", ";
		}
	}
	return lsSelections;
}

window.onload = function () {
	$(".element-a-cacher").each(function () {
		$(this).hide();
	});
};

function affichage() {
	var bil = "";
	var esp = " ";
	var rtl = "\n";
	var fois = "*";
	var moins = "-";
	var plus = "+";
	var egal = "=";
	var mobilisation = "A la mobilisation: ";
	var repos = "Au repos:";
	var lpldoul = mobilisation.length;

	//bil += spacer.box("Bilan Kinésithérapique",fois);

	bil += rtl + spacer.box(" Cotation de la Douleur EVS", egal);
	bil += rtl + "Échelle de 0 à 4.";
	bil +=
		rtl +
		" 0 = pas de douleur, 1 = faible, 2 = moyenne, 3 = forte, 4 = très forte." +
		rtl;
	bil +=
		rtl +
		repos +
		spacer.line(lpldoul - repos.length + 3, ".") +
		" " +
		document.getElementById("douleurRepos").value +
		"/4";
	bil +=
		rtl +
		mobilisation +
		" " +
		document.getElementById("douleurMob").value +
		"/4";
	bil +=
		rtl +
		"Type: " +
		getSelectionsListe("typeDouleur") +
		document.getElementById("typeRepos").value;
	bil +=
		rtl +
		"Localisation: " +
		document.getElementById("localisation").value;
	bil += rtl + spacer.box("SITUATION", egal);
	bil += rtl + document.getElementById("situation").value;
	bil += rtl + spacer.box("Aides à domicile", egal);
	bil += rtl + document.getElementById("aidesAdom").value;
	bil += rtl + spacer.box("Accès extérieur logement", egal);
	bil += rtl + document.getElementById("accesExtLogement").value;
	bil += rtl + spacer.box("Accès intérieur logement", egal);
	bil += rtl + document.getElementById("accesIntlogement").value;
	bil += rtl + spacer.box("Déambulation intérieur", egal);
	bil += rtl + document.getElementById("deambulationInt").value;
	bil +=
		rtl +
		spacer.box("Déambulation extérieur avant l'hospitalisation", egal);
	bil += rtl + document.getElementById("deambulationExt").value;
	bil += rtl + spacer.box("CHAMBRE", egal);
	bil += rtl + document.getElementById("chambre").value;
	bil += rtl + spacer.box("HABILLAGE", egal);
	bil += rtl + document.getElementById("habillage").value;
	bil += rtl + spacer.box("SALLE DE BAINS", egal);
	bil += rtl + document.getElementById("salleDeBain").value;
	bil += rtl + spacer.box("TOILETTE", egal);
	bil += rtl + document.getElementById("toilette").value;
	bil += rtl + spacer.box("WC", egal);
	bil += rtl + document.getElementById("wc").value;
	bil += rtl + spacer.box("REPAS", egal);
	bil += rtl + document.getElementById("repas").value;
	bil += rtl + spacer.box("MENAGE", egal);
	bil += rtl + document.getElementById("menage").value;
	bil += rtl + spacer.box("ENTRETIEN DU LINGE", egal);
	bil += rtl + document.getElementById("entretienDuLinge").value;
	bil += rtl + spacer.box("COURSES", egal);
	bil += rtl + document.getElementById("courses").value;
	bil += rtl + spacer.box("CONDUITE AUTOMOBILE", egal);
	bil += rtl + document.getElementById("conduiteAuto").value;
	bil += rtl + spacer.box("ACTIVITES SIGNIFIANTES", egal);
	bil += rtl + document.getElementById("activites").value;

	$(".element-a-cacher").each(function () {
		$(this).show();
	});
	var toCopy = document.getElementById("to-copy");
	toCopy.value = "";
	toCopy.value += "" + bil;
	toCopy.select();
	document.execCommand("copy");
	return false;
}
    </script >
	<script>
		var spacer = {
			blank: function() {
          return "";
        },

        newline: function() {
          return "\n";
        },

        line: function(length, character) {
			s = "";
          for (var i = 0; i < length; {
			s += character;
          }
          return s;
        },

        wrap: function(text, length, character) {
          var padLength = (length - text.length) / 2 - 1;
          var wrapText = character + spacer.line(padLength, " ") + text;
          wrapText += spacer.line(padLength, " ");
          return wrapText;
        },

        box: function(text, character) {
          var boxText = spacer.newline();
          length = text.length + 38;
          if (character === "=") length = 25;
          if (character === "*") length = 40;

          boxText += spacer.line(length, character) + spacer.newline();
          //boxText += character + spacer.newline();
          boxText += spacer.wrap(text, length, character) + spacer.newline();
          //boxText += character + spacer.newline();
          boxText += spacer.line(length, character) + spacer.newline();
          return boxText;
        }
      };

      function replaceSelection(idfield, idoption) {
			let d = document.getElementById(idoption);
        var elem = document.getElementById(idfield);
        d.addEventListener("keyup", e => {
			e.preventDefault;
          // e.stopPropagation

          if (e.code === "Space" || e.code === "Enter") {
            var word = d.options[d.selectedIndex].value;
            document.getElementById(idoption).size = 1;
            word = word.replace(/\s\s+/g, " ");
            let from = elem.selectionStart,
              to = elem.selectionEnd;
            elem.value =
              elem.value.slice(0, from) + word + elem.value.slice(to);
            elem.selectionStart = from + word.length;
            elem.selectionEnd = from + word.length;
            document.getElementById(idoption).selectedIndex = 0;
            elem.focus();
          }
        });

        d.addEventListener("click", e => {
			e.preventDefault;
          var word = d.options[d.selectedIndex].value;
          document.getElementById(idoption).size = 1;
          word = word.replace(/\s\s+/g, " ");
          let from = elem.selectionStart,
            to = elem.selectionEnd;
          elem.value = elem.value.slice(0, from) + word + elem.value.slice(to);
          elem.selectionStart = from + word.length;
          elem.selectionEnd = from + word.length;
          document.getElementById(idoption).selectedIndex = 0;
          elem.focus();
        });
      }

      function frenchdate(strDate) {
        var ch = strDate
          .split("-")
          .reverse()
          .join("/");
        return ch;
      }

      const efface = document.getElementById("reinitialise");
      efface.addEventListener("click", e => location.reload(true));

      function ouvreListe(obj) {
			obj.size = 5;
      }

      function fermeListe(obj) {
			obj.size = 1;
      }

      var chtext = document.querySelectorAll("textarea");
      var tab = Array.from(chtext);
      tab.forEach(elem =>
        elem.addEventListener(
          "focus",
          event => {
			event.target.style.backgroundColor = "#EEEEEE";
            event.target.style.borderColor = "green";
          },
          true
        )
      );

      tab.forEach(elem =>
        elem.addEventListener(
          "blur",
          event => {
			event.target.style.backgroundColor = "";
            event.target.style.borderColor = "#dbe4bc";
          },
          true
        )
      );

      // select on focus on deroule
      var chselect = document.querySelectorAll("select");
      var seltab = Array.from(chselect);
      seltab.forEach(elem =>
        elem.addEventListener("focus", function(event) {
			event.target.size = 10;
        })
      );

      seltab.forEach(elem =>
        elem.addEventListener("blur", function(event) {
			event.target.size = 1;
        })
      );

  function heure() {
  var h = new Date();

  document.getElementById("temps").innerHTML =
    (h.getHours() < 10 ? "0" + h.getHours() : h.getHours()) +
    ":" +
    (h.getMinutes() < 10 ? "0" + h.getMinutes() : h.getMinutes()) +
    ":" +
    (h.getSeconds() < 10 ? "0" + h.getSeconds() : h.getSeconds());
  setTimeout("heure()", 1000);
}

heure();
     