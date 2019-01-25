// app/routes.js

module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login & signUp link) ========
	// =====================================
	app.get('/', (req, res) => res.render('pages/home'))
	app.get('/home', (req, res) => res.render('pages/home'))
    
    // process the login form
	app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/menu', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup form if there is an error
        failureFlash : true // allow flash messages
    }),
    function(req, res) {
		sess = req.session;
		sess.username = req.body.usernameSignin;

        console.log("EMAIL --> "+sess.email);
        if (req.body.remember) {
          req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
          req.session.cookie.expires = false;
    }});

	// =====================================
	// MENU ===============================
	// =====================================
	// show the menu links
	app.get('/menu', function(req, res) {
		sess = req.session;
		console.log("Username: "+ sess.cookie.maxAge);
		// Cookies that have been signed
		console.log('Signed Cookies: ', req.signedCookies)
		res.render('pages/menu'); // load the home.html file
	});

	// =====================================
	// SIGNUP ==============================
	// =====================================
	app.get('/signup', (req, res) => res.render('pages/signup'))

	// =====================================
	// ADD ==============================
	// =====================================
	// show the create shareMoneyTeam form
	app.get('/create', (req, res) => res.render('pages/create'))

	// =====================================
	// SEE =========================
	// =====================================
	// show money spent
	app.get('/see', isLoggedIn, (req, res) => res.render('pages/see'))

	// =====================================
	// ACCOUNT =========================
	// =====================================
	// show account parameters
	app.get('/account', isLoggedIn, (req, res) => res.render('pages/account'))

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