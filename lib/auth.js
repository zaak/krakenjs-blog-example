/**
 * A helper method to add the user to the response context so we don't have to manually do it.
 * @param req
 * @param res
 * @param next
 */
exports.injectUser = function() {
	return function injectUser(req, res, next) {

		//console.log(res.locals);

		//res.locals.user = {
		//	id: 1337,
		//	username: 'FooUser'
		//};

		next();
	};
};