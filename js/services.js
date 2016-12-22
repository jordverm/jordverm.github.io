/*
ApplicationDbContext
--------------------
1) Database transactions to the database --> localstorage
2) Cache
*/


var ApplicationDbContext = {
    "init": function(strConnection) {
        this._strConnection = strConnection; // Connection string to the key in the localstorage
        this._dbData = {
            "info": {
                "title": "Users",
                "description": "Users",
                "version": "1.0.",
                "modified": "2016-12-17",
                "author": "AHS - GDM - MMP"
            },
            "activeuser": null,
            "lecturers": [],
            "tinderizedlecturers": [],
            "timetable": [],
            "settings": []
        };
         
        this._dbData2 = {
            "info": {
                "title": "FROUFROU: CMS Application",
                "version": "1.0.",
                "modified": "2016-11-15",
                "author": "Philippe De Pauw - Waterschoot"
            },
            "settings": {},
            "posts": [],
            "categories": [],
            "tags": []
        };



        // JSON-string: The data as value of the previous connection string (key in the localstorage)
        // Save the data in the localstorage. First check if the data is present in the database. If present -> GET THE DATA. If not --> SAVE _dbData in the database
        if(Utils.store(this._strConnection) != null) {
            this._dbData = Utils.store(this._strConnection);
        } else {
            Utils.store(this._strConnection, this._dbData);
        }

        if(Utils.store(this._strConnection) != null) {
            this._dbData2 = Utils.store(this._strConnection);
        } else {
            UtilsPosts.store(this._strConnection, this._dbData2);
        }
    },
    "getLecturers": function() {
        // Get all lecturers
        var lecturers = this._dbData.lecturers;
        
        if(lecturers == null || (lecturers != null && lecturers.length == 0)) {
            return null;
        }
        return lecturers;
    },
    "getTinderizeLecturersByUserId": function(userId) {
        // Get all lecturers
        var tinderizedlecturers = this._dbData.tinderizedlecturers;
        if(tinderizedlecturers != null) {
           tinderizedlecturers = _.filter(tinderizedlecturers, function(tinderizeLecturer) { return tinderizeLecturer.UserId == userId; });
        }

        var lecturers = this.getLecturers();

        if(tinderizedlecturers == null || (tinderizedlecturers != null && tinderizedlecturers.length == 0)) {
            return lecturers;
        } else {
            var self = this;
            _.forEach(tinderizedlecturers, function(tinderizedlecturer) {
                lecturers.splice(self.findLecturerIndexById(tinderizedlecturer.LecturerId), 1);
            });
        }

        return lecturers;
    },
    "getLecturerById": function(id) {
        // Get lecturer by id
        var index = this.findLecturerIndexById(id);
        if(index == -1) {
            return null;
        }
        return this._dbData.lecturers[index];
    },
    "getLecturerByUserName": function(userName) {
        // Find the index of the lecturer by id
        var lecturers = this.getLecturers();
        if(lecturers == null) {
            return null;
        }
        return _.find(lecturers, function(lecturer) { return lecturer.UserName == userName; });
    },
    "setActiveUser": function(user) {
        this._dbData.activeuser = user;
        this.save();
    },
    "addLecturer": function(lecturer) {
        // Add a new lecturer (CREATE -> DB INSERT)
        if(lecturer != null && (lecturer.Id == undefined || this.getLecturerById(lecturer.Id) == null)) {
            lecturer.Id = Utils.guid();
            lecturer.CreatedAt = new Date().getTime();
            this._dbData.lecturers.push(lecturer);
            this.save();
            return lecturer;
        }
        return null;
    },
    "updateLecturer": function(lecturer) {
        // Update an existing lecturer (UPDATE -> DB UPDATE)
        var index = this.findLecturerIndexById(lecturer.Id);
        if(index == -1) {
            return false;
        }
        lecturer.UpdatedAt = new Date().getTime();
        this._dbData.lecturers[index] = lecturer;
        this.save();
        return true;
    },
    "deleteLecturer": function(id) {
        // Delete an existing lecturer (DELETE -> DB DELETE)
        var index = this.findLecturerIndexById(id);
        if(index == -1) {
            return false;
        }
        this._dbData.lecturers.splice(index, 1);
        this.save();
        return true;
    },
    "softDeleteLecturer": function(id) {
        // Soft Delete an existing lecturer (UPDATE -> DB UPDATE)
        // Field: DeletedAt = Snapshot in time
        var index = this.findLecturerIndexById(id);
        if(index == -1) {
            return false;
        }
        var lecturer =  this._dbData.lecturers[index];
        lecturer.UpdatedAt = new Date().getTime();
        lecturer.DeletedAt = new Date().getTime();
        this._dbData.lecturers[index] = lecturer;
        this.save();
        return true;
    },
    "softUndeleteLecturer": function(id) {
        // Soft UnDelete an existing lecturer (UPDATE -> DB UPDATE)
        // Field: DeletedAt = null
        var index = this.findLecturerIndexById(id);
        if(index == -1) {
            return false;
        }
        var lecturer =  this._dbData.lecturers[index];
        lecturer.UpdatedAt = new Date().getTime();
        lecturer.DeletedAt = null;
        this._dbData.lecturers[index] = lecturer;
        this.save();
        return true;
    },
    "addTinderizeLecturer": function(tinderizedLecturer) {
        // Add a new lecturer (CREATE -> DB INSERT)
        if(tinderizedLecturer != null) {
            tinderizedLecturer.CreatedAt = new Date().getTime();
            this._dbData.tinderizedlecturers.push(tinderizedLecturer);
            this.save();
            return tinderizedLecturer;
        }
        return null;
    },
    "save": function() {
        // Save _dbData into the database (localstorage)
        Utils.store(this._strConnection, this._dbData);
        return true;
    },
    "findLecturerIndexById": function(id) {
        // Find the index of the lecturer by id
        var lecturers = this.getLecturers();
        if(lecturers == null) {
            return -1;
        }
        return _.findIndex(lecturers, function(lecturer) { return lecturer.Id == id; });
    },
    "findLecturerIndexByIdOldSchool": function(id) {
        // Find the index of the lecturer by id
        var lecturers = this.getLecturers();
        if(lecturers == null) {
            return -1;
        }

        var match = false, i = 0, lecturer = null;
        while(!match && i < lecturers.length) {
            lecturer = lecturers[i];
            if(lecturer.Id == id) {
                match = true;
            } else {
                i++;
            }
        }

        if(!match) {
            return -1;
        }
        return i;
    },

    "getPosts": function() {
        var posts = this._dbData2.posts;
        if(posts == null || (posts != null && posts.length == 0)) {
            return null;
        }
        return posts;
    },
    "getPostById": function(id) {
        var index = this.findPostIndexById(id);
        if(index == -1) {
            return null;
        }
        return this._dbData2.posts[index];
    },
    "addPost": function(post) {
        if(post != null && (post.Id == undefined || this.getPostById(post.Id) == null)) {
            post.Id = Utils.guid();
            post.CreatedAt = new Date().getTime();
            this._dbData2.posts.push(post);
            this.save();
            return post;
        }
        return null;
    },
    "updatePost": function(post) {
        var index = this.findPostIndexById(post.Id);
        if(index == -1) {
            return false;
        }
        post.UpdatedAt = new Date().getTime();
        this._dbData2.posts[index] = post;
        this.save();
        return true;
    },
    "deletePost": function(id) {
        var index = this.findPostIndexById(id);
        if(index == -1) {
            return false;
        }
        this._dbData2.posts.splice(index, 1);
        this.save();
        return true;
    },
    "softDeletePost": function(id) {
        var index = this.findPostIndexById(id);
        if(index == -1) {
            return false;
        }
        var post =  this._dbData2.posts[index];
        post.UpdatedAt = new Date().getTime();
        post.DeletedAt = new Date().getTime();
        this._dbData2.posts[index] = post;
        this.save();
        return true;
    },
    "softUnDeletePost": function(id) {
         var index = this.findPostIndexById(id);
        if(index == -1) {
            return false;
        }
        var post =  this._dbData2.posts[index];
        post.UpdatedAt = new Date().getTime();
        post.DeletedAt = null;
        this._dbData2.posts[index] = post;
        this.save();
        return true;
    }, 
    "save": function() {
        Utils.store(this._strConnection, this._dbData2); // Write the _dbData into the localstorage via the key
        return true; // Always true in modern webbrowsers
    },
    "findPostIndexById": function(id) {
        var posts = this.getPosts();
        if(posts == null) {
            return -1;
        }

        var match = false, i = 0, post = null;
        while(!match && i < posts.length) {
            post = posts[i];
            if(post.Id == id) {
                match = true;
            } else {
                i++;
            }
        }

        if(!match) {
            return -1;
        }
        return i;
    }
};


/*
UserManager
--------------------
1) Login, logout a User
2) Cache
*/
var UserManager = {
    "init": function(applicationDbContext) {
        this._applicationDbContext = applicationDbContext;
    },
    "login": function(userName, passWord) {
        var lecturer = this._applicationDbContext.getLecturerByUserName(userName);
        if(lecturer == null) {
            return null;
        }
        if(lecturer.PassWord != passWord) {
            return false;
        }
        this._applicationDbContext.setActiveUser(lecturer);
        return lecturer;
    },
    "logout": function() {
        this._applicationDbContext.setActiveUser(null);
        return true;
    }
}