// src/modules/meeting/module/meeting.model.ts
import { DataTypes, Model, type InferAttributes, type InferCreationAttributes, type CreationOptional } from "sequelize";
import { sequelize } from "../../config/database.js";



export class Meeting extends Model<InferAttributes<Meeting>, InferCreationAttributes<Meeting>> {
  declare id: CreationOptional<string>;
  declare title: string;
  declare userId: string;
  declare startTime: Date;
  declare endTime: Date;
}

Meeting.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "meetings",
    timestamps: true,
  }
);