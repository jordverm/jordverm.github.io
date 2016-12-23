---

---
function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(function(){
    
    function AllVoorzieningen() {

    // URL of the Search API
    // LINK ONLINE http://www.scheidsrechterstielt.be/assets/hondenvoorziening.json
    this.API_URL = './json/hondenvoorziening.json';
    // The results within the JSON-object
    this._alleVoorzieningen;
    // UI generated
    this._uiGenerated = false;

    // Initialize App
    this.init = function() {
      console.log('1. Initialize the app');

      this.loadData();
    }

    // Load the data from the API
    this.loadData = function() {
      console.log('2. Load the Data');

      var that = this;// Hack --> Closure

      var xhr = new XMLHttpRequest();
      xhr.open('get', this.API_URL, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
          if(xhr.status == 200) {
              var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
              that._alleVoorzieningen = data;
              that.updateUI();
              //console.log(data);
          } else {
              reject(status);
          }
      }
      xhr.onerror = function() {
          reject(Error('Network Error!'));
      }
      xhr.send();

      // Load JSON from corresponding RandomUserMe API with certain URL
                

      

    };

    // Update the User Interface (UI)
    this.updateUI = function() {
      console.log('3. Update UI');

      if(!this._uiGenerated) {
        this.generateCardsUI(); // Call the function generateCardsUI
        this._uiGenerated = true;
      }

    };

    // Generate the albums as a table with rows
    this.generateCardsUI = function() {
      console.log('4. Generate UI with cards');
      var tempStr = '';
      console.log(this._alleVoorzieningen.hondenvoorzieningen.length);  
      for(var i=0; i<this._alleVoorzieningen.hondenvoorzieningen.length;i++) {
        
        var event = this._alleVoorzieningen.hondenvoorzieningen[i];
        tempStr += '<div class="grid__bp0-column-12 grid__bp2-column-6 grid__bp3-column-3 first"><div><article class="voorzieningen hideme">' + '<h7 class="voorzieningenTitle">' + event.straat +' '+ event.huisnummer + '</h7><br/>' + event.gemeente +  ', ' + event.postcode + '<br/>' + 'Gent ID: '+ event.gentid +'</article></div></div>'
      };
      document.querySelector('.locaties').innerHTML = tempStr;
    };
  };

function Woonzorgcentra() {

    // URL of the Search API
    // LINK ONLINE http://www.scheidsrechterstielt.be/assets/hondenvoorziening.json
    this.API_URL = './json/Woonzorgcentra.json';
    // The results within the JSON-object
    this._woonzorgcentra;
    // UI generated
    this._uiGenerated = false;

    // Initialize App
    this.init = function() {
      console.log('1. Initialize the app');

      this.loadData();
    }

    // Load the data from the API
    this.loadData = function() {
      console.log('2. Load the Data');

      var that = this;// Hack --> Closure

      var xhr = new XMLHttpRequest();
      xhr.open('get', this.API_URL, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
          if(xhr.status == 200) {
              var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
              /*data = data.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });*/
              that._woonzorgcentra = data;
              that.updateUI();
              //console.log(data);
          } else {
              reject(status);
          }
      }
      xhr.onerror = function() {
          reject(Error('Network Error!'));
      }
      xhr.send();

      // Load JSON from corresponding RandomUserMe API with certain URL
                

      

    };

    // Update the User Interface (UI)
    this.updateUI = function() {
      console.log('3. Update UI');

      if(!this._uiGenerated) {
        this.generateCardsUI(); // Call the function generateCardsUI
        this._uiGenerated = true;
      }

    };

    // Generate the albums as a table with rows
    this.generateCardsUI = function() {
      console.log('4. Generate UI with cards');
      var tempStr = '';
      console.log(this._woonzorgcentra.woonzorgen.length);  
      for(var i=0; i<this._woonzorgcentra.woonzorgen.length;i++) {
        
        var event = this._woonzorgcentra.woonzorgen[i];
        tempStr += '<div class="grid__bp0-column-12 grid__bp2-column-6 grid__bp3-column-3"><div><article class="voorzieningen hideme">' + '<h7 class="voorzieningenTitle">' + event.naam + '</h7><br/>' + event.straat + ' '+ event.huisnummer +'<br/> ' + event.gemeente +  ', ' + event.postcode + '<br/></article></div></div>';
      };
      document.querySelector('.oudjes').innerHTML = tempStr;
    };
  };


  var app = new AllVoorzieningen();
  var app2 = new Woonzorgcentra(); // Make an instance of the AllVoorzieningen
  app.init();
  app2.init(); // Initialize the app
 });
