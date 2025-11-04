module.exports = (err, req, res, next) => {
  // Log error in development
  if (process.env.NODE_ENV !== 'production') {
    console.error('🔥 Error:', err.message);
  }
  const status = err.status || 500;
  res.status(status).json({ error: err.message });
};
