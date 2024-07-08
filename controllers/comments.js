const getCommentsHandler = (req, res) => {
  console.log('load comments PAGE');
  res.send(
    '<h2>COMMENTS PAGE</h2><ul><li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li><li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li></ul>'
  );
};
const getSingleCommentHandler = (req, res) => {
  console.log('load single comment PAGE');
  res.send(
    '<h2>Single comment</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
  );
};
const postCommentHandler = (req, res) => {
  console.log('load post comment PAGE');
  res.send('<h2>Add new post</h2><input/><button>ADD POST</button>');
};
const deleteSingleCommentHandler = (req, res) => {
  console.log('load delete comment PAGE');
  res.send(
    '<h2>Delete comment PAGE</h2><ul>Comment list<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<button>DELETE</button></li><li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<button>DELETE</button></li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<button>DELETE</button></li></ul>'
  );
};

module.exports = {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentHandler,
  deleteSingleCommentHandler,
};
