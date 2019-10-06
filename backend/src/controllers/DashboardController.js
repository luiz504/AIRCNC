import Spot from '../models/Spot';

import User from '../models/User';

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers;

    const userCheck = await User.find({ user: user_id });

    if (!userCheck) {
      return res.status(401).json({ Error: 'User not found' });
    }

    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
}
export default new DashboardController();
