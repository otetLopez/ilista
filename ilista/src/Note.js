/**
 * Note Class referes to the note being created by the user 
 * @param {int} id 
 * @param {string} title
 * @param {string} content 
 */

 export function Note(id, title, content) {
    var id = id;
    var title = title;
    var content = content;

    Object.defineProperties(this, {
        "id": {
            get: function () {
                return id;
            },
            set: function (value) {
                id = value;
            }
        },
        "title": {
            get: function () {
                return title;
            },
            set: function (value) {
                title = value;
            }
        },
        "content": {
            get: function () {
                return content;
            },
            set: function (value) {
                content = value;
            }
        } 
    });
 }

