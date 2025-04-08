// changelog.config.js
const compareFunc = require('compare-func');
module.exports = {
    writerOpts: {
      groupBy: 'date', // Agrupa por fecha
      commitGroupsSort: 'title',
      commitsSort: ['date', 'scope'],
      noteGroupsSort: 'title',
      notesSort: compareFunc,
    },
  };