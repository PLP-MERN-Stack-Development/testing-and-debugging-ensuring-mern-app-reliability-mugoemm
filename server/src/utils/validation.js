exports.validateBug = (bug) => {
  if (!bug || !bug.title || !bug.description) {
    const err = new Error('Title and description are required');
    err.status = 400;
    throw err;
  }
};
