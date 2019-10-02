import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const userCheck = await User.findOne({ email });

    if (userCheck) {
      return res.status(401).json({ Error: 'User already exists' });
    }

    const { id } = await User.create({ email });

    return res.json({ id, email });
  }
}
export default new UserController();
