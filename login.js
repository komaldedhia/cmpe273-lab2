
/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		99999 : { name: 'Foo', email: 'foo@bar.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	
		/*
		for (var sid in this.sessionMap)
		{
			console.log('List '+sid);
		}*/
	
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var sessionId = new Date().getTime();
	console.log( 'In login emIL '+ _email+' NAME '+_name+ ' Sessid '+sessionId);
	this.sessionMap[sessionId] = { name: _name, email: _email } ;
	
	return sessionId;
};

/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {
	console.log('logout::' + sessionId);
   /*
	* TODO: Remove the given sessionId from the sessionMap
	*/
	
            delete this.sessionMap[sessionId];
   
};

Login.prototype.regenerate = function(sessionId) {
	//console.log('logout::' + sessionId);
   /*
	* TODO: Remove the given sessionId from the sessionMap
	*/
			var _name=this.sessionMap[sessionId].name;
			var _email=this.sessionMap[sessionId].email;
            delete this.sessionMap[sessionId];
            console.log('in regenerate emIL '+_email+'NAME '+_name);
            var newSessionId = this.login(_name,_email);
            return newSessionId;
        }
    
// Export the Login class
module.exports = new Login();
      


        
    
