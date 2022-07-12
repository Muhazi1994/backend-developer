
router.post('/login/manual', loginManual, createToken)
const loginManual = () => {
  const payload = {
    id, email, name
 }
}

router.get('/login/google', loginGoogle, createToken)
const loginGoogle = () => {
  const payload = {google_id, name}
}

router.get('/login/fb', loginFb, createToken)
const loginFb = (req, res, next) => {
  const payload = {fb_id, name}
  req.payload = payload
  next()
}

const getUserProfile = async (req, res, next) => {
  const {id, google_id, fb_id}
  const userData = await user.findOne({
    where: {
      [Op.or]: [
        {id},
        {google_id},
        {fb_id}
      ]
    }
  })
}