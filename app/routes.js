// app/routes.js

module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login & signUp forms) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('home.html'); // load the home.html file
    });
    
    // process the login form
	app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/menu', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup form if there is an error
        failureFlash : true // allow flash messages
    }),
    function(req, res) {
		sess = req.session;
		sess.username=req.body.usernameSignin;

        console.log("EMAIL --> "+sess.email);
        if (req.body.remember) {
          req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
          req.session.cookie.expires = false;
    }});

    // process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/menu', // redirect to the secure profile section
		failureRedirect : '/', // redirect back to the signup form if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// MENU ===============================
	// =====================================
	// show the menu links
	app.get('/menu', function(req, res) {
		sess = req.session;
		console.log("Username: "+sess.cookie.maxAge);
		// Cookies that have been signed
		console.log('Signed Cookies: ', req.signedCookies)
		res.render('menu.html'); // load the home.html file
	});

	// =====================================
	// ADD ==============================
	// =====================================
	// show the signup form
	app.get('/create', function(req, res) {
		res.render('create.html'); // load the add.html file
	});

	// =====================================
	// SEE =========================
	// =====================================
	// show money spent
	app.get('/see', isLoggedIn, function(req, res) {
		res.render('see.html'); // load the see.html file
	});

	// =====================================
	// ACCOUNT =========================
	// =====================================
	// show account parameters
	app.get('/account', isLoggedIn, function(req, res) {
		res.render('account.html'); // load the account.html file
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}