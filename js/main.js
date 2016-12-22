function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(function(){
/*
    var App = {
        "init": function() {
            this._unitTesting = false; // Unit Testing the ApplicationDbContext or not

            this._applicationDbContext = ApplicationDbContext; // Reference to the ApplicationDbContext object
            this._applicationDbContext.init('ahs.dds.cms'); // Intialize the ApplicationDbContext with the connection string as parameter value

            this._frmPostCreate = document.querySelector('#frm-post-create'); // Cache Form Post Create
            this._listPosts = document.querySelector('.list-posts'); // Cache List Posts

            this.registerEventListeners(); // Register all Event Listeners
            
            if(this._unitTesting) {
                this.unitTestPosts(); // Unit Testing: Posts
            }

            this.updateUIPostsList(); // Update UI for list of posts
        },
        "registerEventListeners": function() {

            // Event Listeners for Form Post Create
            if(this._frmPostCreate != null) {
                var self = this; // Hack for this keyword within an event listener of another object
                
                this._frmPostCreate.addEventListener('submit', function(ev) {
                    ev.preventDefault();
                    
                    var post = new Post(); // Create a new Post Object
                    post.Title = Utils.trim(this.querySelectorAll('[name="txtTitle"]')[0].value);
                    post.Synopsis = Utils.trim(this.querySelectorAll('[name="txtSynopsis"]')[0].value);
                    post.Story = Utils.trim(this.querySelectorAll('[name="txtStory"]')[0].value);
                
                    // Add Post via the ApplicationDbContext to the localstorage
                    var addedPost = self._applicationDbContext.addPost(post);
                    if(addedPost != null) {
                        self.updateUIPostsList();
                    }
                    
                    return false;
                });
            }

        },
        "updateUIPostsList": function() {
            var posts = this._applicationDbContext.getPosts(); // Get all posts via the ApplicationDbContext

            if(this._listPosts != null) {

                if(posts != null && posts.length > 0)
                {
                    var strHTML = '', post = null;
                    for(var i=0; i < posts.length;i++) {
                        post = posts[i]; // Get post from the array of posts by certain index i
                        strHTML += '<div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone  mdl-shadow--2dp tweet' + ((post.DeletedAt != null)?' tweet--softdeleted':'') + '" data-id="' + post.Id + '">';
                        strHTML += '<div class="mdl-card__supporting-text">';
                        strHTML += '<h4>' + post.Title + '</h4>';
                        strHTML += '<p>' + post.Synopsis + '</p>';
                        strHTML += '</div>';
                        strHTML += '<button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn-' + post.Id + '">';
                        strHTML += '<i class="material-icons">more_vert</i>';
                        strHTML += '</button>';
                        strHTML += '<ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn-' + post.Id + '">';
                        strHTML += '<li class="mdl-menu__item">Edit</li>';
                        strHTML += '<li class="mdl-menu__item">';
                        strHTML += (post.DeletedAt == null || post.DeletedAt == undefined)?'Soft-delete':'Soft-undelete';
                        strHTML += '</li>';
                        strHTML += '<li class="mdl-menu__item">Delete</li>';
                        strHTML += '</ul>';
                        strHTML += '</div>';
                    }
                    this._listPosts.innerHTML = strHTML;
                    componentHandler.upgradeAllRegistered(); // Update Material Design Lite Event Listeners for all new elements into the DOM
                }
            }
        },
        "unitTestPosts": function() {
            // TEST
            if(this._applicationDbContext.getPosts() == null) {
                // CREATE POST
                var post = new Post();
                post.Title = 'Nintendo NES Classic Review - Schattig, maar komt iets tekort';
                post.Synopsis = 'Hij is klein, hij is schattig en hij verschijnt op precies het juiste moment. Rara wat is dat? Dat moet de NES Classic zijn, die het vast goed gaat doen in de komende cadeautjesperiode. Althans: als hij leverbaar is. Nintendo heeft een perfect moment uitgekozen om het kleine hebbedingetje op de markt te brengen, en er is dan ook veel belangstelling voor de miniconsole. Overigens is er wat verwarring over de naam van het ding, want Nintendo hanteert verschillende varianten. Op de doos wordt het aangeduid als Nintendo Classic Mini, op de site heeft Nintendo het over de NES Classic Edition en in persberichten wordt het apparaatje aangeduid als Nintendo Classic Mini: Nintendo Entertainment System. Wij houden het voorlopig maar op NES Classic.';
                post.Story = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. An quod ita callida est, ut optime possit architectari voluptates? Nunc haec primum fortasse audientis servire debemus. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Qui autem esse poteris, nisi te amor ipse ceperit? Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Duo Reges: constructio interrete. Mihi enim erit isdem istis fortasse iam utendum. Quid sequatur, quid repugnet, vident. </p><p>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. Id enim natura desiderat. Graece donan, Latine voluptatem vocant. Odium autem et invidiam facile vitabis. Etenim si delectamur, cum scribimus, quis est tam invidus, qui ab eo nos abducat? Verba tu fingas et ea dicas, quae non sentias? Quae cum magnifice primo dici viderentur, considerata minus probabantur. Honesta oratio, Socratica, Platonis etiam. </p><p>Scio enim esse quosdam, qui quavis lingua philosophari possint; Quod quidem iam fit etiam in Academia. Hoc simile tandem est? Quae autem natura suae primae institutionis oblita est? Quid dubitas igitur mutare principia naturae? </p><p>Quid de Pythagora? Cur deinde Metrodori liberos commendas? Hoc ipsum elegantius poni meliusque potuit. Cui Tubuli nomen odio non est? Age, inquies, ista parva sunt. Ut pulsi recurrant? Etenim semper illud extra est, quod arte comprehenditur. Equidem, sed audistine modo de Carneade? </p><p>Aliter enim explicari, quod quaeritur, non potest. Mihi enim satis est, ipsis non satis. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Si enim ad populum me vocas, eum. Sed ad bona praeterita redeamus. Inde sermone vario sex illa a Dipylo stadia confecimus. Non quaero, quid dicat, sed quid convenienter possit rationi et sententiae suae dicere. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Isto modo, ne si avia quidem eius nata non esset. Quacumque enim ingredimur, in aliqua historia vestigium ponimus. </p>'
                var postAdded = this._applicationDbContext.addPost(post);
                console.log(postAdded);
            } else {
                // UPDATE A POST
                var id = this._applicationDbContext.getPosts()[0].Id;
                var post = this._applicationDbContext.getPostById(id);
                if(post != null) {
                    post.Title = 'Nintendo NES Classic Review - Schattig, maar komt iets tekort';
                    var result = this._applicationDbContext.updatePost(post);
                    console.log(result);
                }
                // SOFT DELETE OR UNDELETE A POST
                post = this._applicationDbContext.getPostById(id);
                if(post != null) {
                    var result = (post.DeletedAt == null || post.DeletedAt == undefined)?this._applicationDbContext.softDeletePost(post.Id):this._applicationDbContext.softUnDeletePost(post.Id);
                    console.log(result);
                }
                // DELETE A POST
                post = this._applicationDbContext.getPostById(id);
                if(post != null) {
                    var result = this._applicationDbContext.deletePost(post.Id)
                    console.log(result);
                }
            }
        }
    };

    App.init();
});*/

    

    
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

/*
  var AppUsers = {
        "init": function() {
            this._unitTesting = false; // Unit Testing the features in ApplicationDbContext or not
            this._widthHandlebarsAndLoDash = true; // Use Handlebars Template Engine And LoDash or Not

            this.URLRANDOMUSERME = 'http://api.randomuser.me/?results=500&callback=json_callback';// Cache the url with random users in variable URLRANDOMUSERME

            this._applicationDbContext = ApplicationDbContext; // Reference to the ApplicationDbContext object
            this._applicationDbContext.init('ahs.gdm.mmp.lecturerama'); // Initialize the ApplicationDbContext object via the methode init. Do not forget the connection string as a parametervalue of this function
            this._userManager = UserManager; // Reference to the UserManager object
            this._userManager.init(this._applicationDbContext);// Initialize the UserManager object via the methode init. Do not forget the reference to the this._applicationDbContext variable as a parametervalue of this function

            this._frmLogin = document.querySelector('#frm-login'); // Cache Form Login
            this.registerEventListeners(); // Register the Event Listeners for all present elements

      this._hbsCache = {};// Handlebars cache for templates
      this._hbsPartialsCache = {};// Handlebars cache for partials

            this._activeUser = null; // Active User


            if(this._unitTesting || this._applicationDbContext.getLecturers() == null) {
                this.unitTests();
            }
        },
        "registerEventListeners": function() {

            // Event Listeners for Form Login
            if(this._frmLogin != null) {
                var self = this; // Hack for this keyword within an event listener of another object

                this._frmLogin.addEventListener('submit', function(ev) {
                    ev.preventDefault();

                    var userName = Utils.trim(this.querySelectorAll('[name="txtUserName"]')[0].value);
                    var passWord = Utils.trim(this.querySelectorAll('[name="txtPassWord"]')[0].value);
                    var result = self._userManager.login(userName, passWord);
                    document.querySelector('.onderTitel').innerHTML = "Niet Ingelogd";
                    if(result == null) {

                    } else if(result == false) {

                    } else {
                        self._activeUser = result; // User is Logged in
                        self.updateUI();
                         document.querySelector('.onderTitel').innerHTML = "Ingelogd";
                         window.location="index.html";
                    }
                    
                    return false;
                });
            }

        },
        "updateUI": function() {
            if( this._widthHandlebarsAndLoDash) {
                this.updateUILecturers('list-lecturers', '#template-list-lecturers');
            } else {
                this.updateUIOldSchoolLecturers();
            }
        },
        "updateUIOldSchoolLecturers": function() {
            if(this._applicationDbContext.getTinderizeLecturersByUserId(this._activeUser.Id) != null) {
                var tempStr = '';
                var ch = window.innerHeight - 110;
                
                var lecturers = this._applicationDbContext.getTinderizeLecturersByUserId(this._activeUser.Id), lecturer = null;
                for(var i=0;i<lecturers.length;i++) {
                    var lecturer = lecturers[i];
                    tempStr += '<div class="lecturer" data-id="' + lecturer.Id + '">';
                    tempStr += '<div class="lecturer__meta">' + '<span class="lecturer__gender">' + Genders.properties[lecturer.Gender].name + '</span>' + '<span class="lecturer__age">' + Utils.getAge(new Date(lecturer.DayOfBirth)) + '</span>' + '</div>';
                    tempStr += '<picture class="lecturer__picture">';
                    tempStr += '<img src="' + lecturer.Picture + '" />';
                    tempStr += '</picture>';
                    tempStr += '<h3 class="lecturer__name">' + lecturer.FirstName + ' ' + lecturer.SurName + '</h3>';
                    tempStr += '<div class="lecturer__actions">';
                    tempStr += '<span class="material-icons like" data-id="' + lecturer.Id + '" data-tinderize="1">&#xE87D;</span>';
                    tempStr += '<span class="material-icons dislike" data-id="' + lecturer.Id + '" data-tinderize="2">&#xE043;</span>';
                    tempStr += '</div>';
                    tempStr += '</div>';
                };

                document.querySelector('.list-lecturers-content').innerHTML = tempStr;
                
                this.registerLecturerEventListeners(); // Register EventListeners for all like and dislike buttons
            }
        },
        "updateUILecturers": function(hbsTmplName, hbsTmplId) {
            if(!this._hbsCache[hbsTmplName]) {
        var src = document.querySelector(hbsTmplId).innerHTML;// Get the contents from the specified hbs template
        this._hbsCache[hbsTmplName] = Handlebars.compile(src);// Compile the source and add it to the hbs cache
      } 
      document.querySelector('.list-lecturers-content').innerHTML = this._hbsCache[hbsTmplName](this._applicationDbContext.getTinderizeLecturersByUserId(this._activeUser.Id));// Write compiled content to the appropriate container

            this.registerLecturerEventListeners(); // Register EventListeners for all like and dislike buttons
        },
        "registerLecturerEventListeners": function() {
            var self = this;

            var lecturerElements = document.querySelectorAll('.lecturer');
            if(lecturerElements != null && lecturerElements.length > 0) {
                var lecturerElement = null;
                for(var i=0;i<lecturerElements.length;i++) {
                    lecturerElement = lecturerElements[i];
                    lecturerElement.querySelector('.like').addEventListener('click', function(ev) {
                        self.addTinderizeLecturer(this.dataset.id, this.dataset.tinderize);
                    });
                    lecturerElement.querySelector('.dislike').addEventListener('click', function(ev) {
                        self.addTinderizeLecturer(this.dataset.id, this.dataset.tinderize);
                    });
                }
            }
        },
        "addTinderizeLecturer": function(lecturerId, tinderize) {
            var tinderizeLecturer = new TinderizeLecturer();
            tinderizeLecturer.UserId = this._activeUser.Id;
            tinderizeLecturer.LecturerId = lecturerId;
            tinderizeLecturer.Tinderize = tinderize;
            var tinderizeLecturerAdded = this._applicationDbContext.addTinderizeLecturer(tinderizeLecturer);

            if(tinderizeLecturerAdded != null) {
                var lecturerElement = document.querySelector(`.lecturer[data-id="${lecturerId}"]`);

                if(lecturerElement != null) {
                    lecturerElement.parentElement.removeChild(lecturerElement);
                }
            }
        },
        "unitTests": function() {

            var self = this; // Closure

            //Unit Testing the Lecturers
            if(this._applicationDbContext.getLecturers() == null) {

                // Load JSON from corresponding RandomUserMe API with certain URL
                Utils.getJSONPByPromise(this.URLRANDOMUSERME).then(
                    function(data) {
                        var users = data.results, lecturer = null, user = null;
                        for(var i=0;i<users.length;i++) {
                            user = users[i];
                            lecturer = new Lecturer();
                            lecturer.FirstName = user.name.first;
                            lecturer.SurName = user.name.last;
                            lecturer.DayOfBirth = new Date(user.dob);
                            lecturer.UserName = user.login.username;
                            lecturer.PassWord = user.login.password;
                            lecturer.Email = user.email;
                            lecturer.Picture = user.picture.large;
                            switch(user.gender) {
                                case 'male': lecturer.Gender = Genders.MALE;break;
                                case 'female': lecturer.Gender = Genders.FEMALE;break;
                                default: lecturer.Gender = Genders.NOTKNOWN;break;
                            }
                            var lecturerAdded = self._applicationDbContext.addLecturer(lecturer);
                        }
                    },
                    function(status) {
                        console.log(status);
                    }
                );

            } else {
                // Update a lecturer
                var id = this._applicationDbContext.getLecturers()[0].Id;
                var lecturer = this._applicationDbContext.getLecturerById(id);
                if(lecturer != null) {
                    lecturer.FirstName = 'Olivia';
                    var result = this._applicationDbContext.updateLecturer(lecturer);
                    console.log(result);
                }

                // Soft delete or undelete a lecturer
                lecturer = this._applicationDbContext.getLecturerById(id);
                if(lecturer != null) {
                    var result = (lecturer.DeletedAt == null || lecturer.DeletedAt == undefined)?this._applicationDbContext.softDeleteLecturer(lecturer.Id):this._applicationDbContext.softUnDeleteLecturer(lecturer.Id);
                    console.log(result);
                }

                // Delete a lecturer
                lecturer = this._applicationDbContext.getLecturerById(id);
                if(lecturer != null) {
                    var result = this._applicationDbContext.deleteLecturer(lecturer.Id)
                    console.log(result);
                }
            }

        }
    };

*/

  var app = new AllVoorzieningen();
  var app2 = new Woonzorgcentra(); // Make an instance of the AllVoorzieningen
  //AppPosts.init();
  //AppUsers.init();
  app.init();
  app2.init(); // Initialize the app
 });
