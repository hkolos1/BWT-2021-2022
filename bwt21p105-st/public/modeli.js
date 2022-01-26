const sequelize = require('sequelize');

module.exports = (baza) => {
    baza.Student = baza.define('Student', {
        index: {
            primaryKey: true,
            type: sequelize.STRING,
        },
        ime: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        prezime: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        }
    }, {
        tableName: 'Student',
        timestamps: false,
    });

    baza.Grupa = baza.define('Grupa', {
        naziv: {
            primaryKey: true,
            type: sequelize.STRING,
        },
    }, {
        tableName: 'Grupa',
        timestamps: false,
    });

    baza.Vjezba = baza.define('Vjezba', {
        id: {
            primaryKey: true,
            type: sequelize.INTEGER,
            autoIncrement: true,
        },
        broj: {
            type: sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        tacnost: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        promjena: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        greske: {
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            }
        }
    }, {
        tableName: 'Vjezba',
        timestamps: false,
    });

    baza.Grupa.hasMany(baza.Student, { foreignKey: 'grupa' });
    baza.Student.hasMany(baza.Vjezba, { foreignKey: 'index' });
}
