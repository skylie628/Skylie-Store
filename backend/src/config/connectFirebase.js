const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountFirebase.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "skylie-store.appspot.com" }); 
export default admin;