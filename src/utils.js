module.exports = {
  /**
   * Checks if key exists
   * in Object
   */

  existInObj: function(value, object) {
    var key
    for(key in object){
      if(object.hasOwnProperty(key)){
        if(key === value) return true;
      }
    }
    return false;
  },

/**
 * Appends object to other objects
 *
 */
  append: function(object) {
    if (typeof object !== 'object') {
      throw 'Parameter is not an Object'
    }
    var key
    for(var i = 1,length = arguments.length; i < length; i++){
      for(key in arguments[i]){
        if(arguments[i].hasOwnProperty(key)){
          if(!this.existInObj(key, object)){
            object[key] = arguments[i][key]
            continue
          }
        }
      }
    }
    return object;
  }
}
