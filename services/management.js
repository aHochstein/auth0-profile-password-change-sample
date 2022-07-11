const ManagementClient = require('auth0').ManagementClient;

const client = new ManagementClient({
  domain: process.env.MANAGEMENT_DOMAIN,
  clientId: process.env.MANAGEMENT_CLIENT_ID,
  clientSecret:  process.env.MANAGEMENT_CLIENT_SECRET,
  scope: 'update:users',
});

const updateUserPassword = async(id, password) => {
  try {
    var response = await client.updateUser( { id }, { password })
      return true
  }
  catch(e) {
    // Should handle 400 Password is too weak etc
    return false           
  }
}

module.exports.updateUserPassword = updateUserPassword