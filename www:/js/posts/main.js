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
            this._applicationDbContext.init('ahs.dds.posts'); // Intialize the ApplicationDbContext with the connection string as parameter value

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
                    post.Boss = Utils.trim(this.querySelectorAll('[name="txtBoss"]')[0].value);
                    post.Datum = Utils.trim(this.querySelectorAll('[name="txtDatum"]')[0].value);
                    post.Uur = Utils.trim(this.querySelectorAll('[name="txtUur"]')[0].value);
                    post.UurEnd = Utils.trim(this.querySelectorAll('[name="txtUurEnd"]')[0].value);
                
                    // Add Post via the ApplicationDbContext to the localstorage
                    var addedPost = self._applicationDbContext.addPost(post);
                    if(addedPost != null) {
                        self.updateUIPostsList();
                        window.location = 'dog.html';
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
                        strHTML += '<div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone  dogInfoBox mdl-shadow--2dp tweet' + ((post.DeletedAt != null)?' tweet--softdeleted':'') + '" data-id="' + post.Id + '">';
                        strHTML += '<div class="mdl-card__supporting-text">';
                        strHTML += '<h6 class="dogInfoTitle">' + post.Title + '</h6><br/>';
                        strHTML += '<p class="dogInfo">' + 'Naam Baasje: ' + post.Boss + '</p>';
                        strHTML += '<p class="dogInfo">' + 'Datum: ' + post.Datum + '</p>';
                        strHTML += '<p class="dogInfo">' + 'Start uur: ' + post.Uur + '</p>';
                        strHTML += '<p class="dogInfo">' + 'Eind uur: ' + post.UurEnd + '</p>';
                        strHTML += '</div>';
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
                post.Title = 'Kito';
                post.Boss = 'James';
                post.Datum = '12-12-12';
                post.Uur = '12:12';
                post.UurEnd = '12:14';
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
 console.log('test');
    App.init();
});