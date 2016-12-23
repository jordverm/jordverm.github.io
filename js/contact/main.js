function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(function(){
       
    var App = {

        "init": function() {
            this._unitTesting = false; // Unit Testing the ApplicationDbContext or not

            this._applicationDbContext = ApplicationDbContext; // Reference to the ApplicationDbContext object
            this._applicationDbContext.init('ahs.dds.contact'); // Intialize the ApplicationDbContext with the connection string as parameter value

            this._frmPostCreate = document.querySelector('#frm-post-create'); // Cache Form Post Create
            this._listPosts = document.querySelector('.list-posts'); // Cache List Posts

            this.registerEventListeners(); // Register all Event Listeners
            
            if(this._unitTesting) {
                this.unitTestPosts(); // Unit Testing: Posts
            }

            //this.updateUIPostsList(); // Update UI for list of posts
        },
        "registerEventListeners": function() {

            // Event Listeners for Form Post Create
            if(this._frmPostCreate != null) {
                var self = this; // Hack for this keyword within an event listener of another object
                
                this._frmPostCreate.addEventListener('submit', function(ev) {
                    ev.preventDefault();
                    
                    var post = new Post(); // Create a new Post Object
                    post.Naam = Utils.trim(this.querySelectorAll('[name="txtNaam"]')[0].value);
                    post.Email = Utils.trim(this.querySelectorAll('[name="txtEmail"]')[0].value);
                    post.Vraag = Utils.trim(this.querySelectorAll('[name="txtVraag"]')[0].value);
                
                    // Add Post via the ApplicationDbContext to the localstorage
                    var addedPost = self._applicationDbContext.addPost(post);
                    if(addedPost != null) {
                        //self.updateUIPostsList();
                         window.location = 'index.html';
                    }
                    
                    return false;
                });
            }

        },
        "unitTestPosts": function() {
            // TEST
            if(this._applicationDbContext.getPosts() == null) {
                // CREATE POST
                var post = new Post();
                post.Naam = 'Kito';
                post.Email = 'James@james.com';
                post.Vraag = 'Ik heb een vraag over ...';

                var postAdded = this._applicationDbContext.addPost(post);
                console.log(postAdded);
            } else {
                // UPDATE A POST
                var id = this._applicationDbContext.getPosts()[0].Id;
                var post = this._applicationDbContext.getPostById(id);
                if(post != null) {
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
});