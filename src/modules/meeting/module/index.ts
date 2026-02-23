import { Meeting } from "./meeting.model.js";
import {User} from "./user.model.js"


User.hasMany(Meeting, { foreignKey: "userId" });
Meeting.belongsTo(User, { foreignKey: "userId" });

