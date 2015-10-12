// DB URL hier einsetzten
var nano = require('nano')('https://bd79794f-0a40-4621-a2fd-3f5946e9f39d-bluemix:4dad3384b7cda9dc34feb72e7b092fd3ddac6afd71055fe840eaba27538a1023@bd79794f-0a40-4621-a2fd-3f5946e9f39d-bluemix.cloudant.com');

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