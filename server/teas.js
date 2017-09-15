// module.exports = function(sequelize, DataTypes) {
// 	var Tea = sequelize.define("Tea", {
// 		name: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			validate: {
// 				len: [1]
// 			}
// 		},
// 		description: {
// 			type: DataTypes.TEXT,
// 			allowNull: false,
// 			defaultValue: false
// 		},
// 		benefits: {
// 			type: DataTypes.TEXT,
// 			allowNull: true,
// 			validate: {
// 				len: [1]
// 			}
// 		},
// 		tag: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			validate: {
// 				len: [1]
// 			}
// 		},
// 		category: {
// 			type: DataTypes.ENUM('white', 'green', 'oolong', 'black', 'pu-erh', 'herbal', 'fruit'),
// 			allowNull: false,
// 			validate: {
// 				len: [1]
// 			}
// 		},
// 		products: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			validate: {
// 				len: [1]
// 			}
// 		}
// 	});
// 	return Tea;
// };
