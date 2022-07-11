var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');
var managementClient = require('../services/management');

router.post('/user/password', requiresAuth(), async function (req, res) {
    const id = req.oidc.user.sub;
    const password = req.body.password
    var passwordSuccessfullUpdated = await managementClient.updateUserPassword(id, password);
    if(passwordSuccessfullUpdated) {
        res.render('password-change-success', {
            title: 'Success!',
            isAuthenticated: req.oidc.isAuthenticated()
          });
    }
    else {
        res.render('password-change-error', {
            title: 'Error!',
            isAuthenticated: req.oidc.isAuthenticated()
          });
    }
});

module.exports = router;
