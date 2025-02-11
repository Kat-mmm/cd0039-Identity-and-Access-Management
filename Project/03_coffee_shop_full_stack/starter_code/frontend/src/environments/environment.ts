/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-katmmm.us.auth0.com', // the auth0 domain prefix
    audience: 'Coffee', // the audience set for the auth0 app
    clientId: 'P2NOIp2wgLz0pFtGrFTE8MHO2HqAc135', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};
