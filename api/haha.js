module.exports = (req, res) => {
  res.end(process.env.VERCEL_REGION)
}
