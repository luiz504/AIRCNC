// index,show,store,update,delete
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ Error: 'User not found' });
    }
    const { id } = user;

    return res.json({ id, email });
  }
}
export default new SessionController();
