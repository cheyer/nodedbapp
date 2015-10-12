// DB URL hier einsetzten
var nano = require('nano')('http://localhost:5984/');

// bereits bestehende DB löschen
nano.db.destroy('personen', function() {
  // neue DB erstellen
  nano.db.create('personen', function() {
    // zu verwendende DB spezifizieren
    var personen = nano.use('personen');
    // füge Dokument ein
    personen.insert({ 
	
	"personlist": [
       {
           "vorname": "Chris",
           "nachname": "Heyer"
       },
       {
           "vorname": "Sabine",
           "nachname": "Simon"
       }
   ]
    	}, 'einzigartigeID', function(err, body, header) {
      if (err) {
        console.log('Error creating document - ', err.message);
        return;
      }
      console.log('all records inserted.')
      console.log(body);
    });
  });
});