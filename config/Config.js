var Config		=	require('./config.json');
module.exports	=	{
	db: {
		name: Config.db.name,
		user: Config.db.user,
		pwd: Config.db.password,
		secret : Config.db.secret
	},
	app: {
		name: Config.app.name,
		version: Config.app.version,
		port: process.env.PORT
	}
};