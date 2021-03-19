const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == undefined || members.length == 0) {
    return false;
  }
  else {
      let arrLetters = [];
      for (let i = 0; i < members.length; i++) {
          if (typeof(members[i]) == 'string') {
              arrLetters.push(members[i].trim().substr(0, 1).toUpperCase());
          }        
      }
      arrLetters.sort();
      let team = '';
      for (i = 0; i < arrLetters.length; i++) {
          team += arrLetters[i];
      }
      return team;
  }
};
