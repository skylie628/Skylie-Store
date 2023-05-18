import admin from "../config/connectFirebase";
export  const  getProductImage = (pathname)  => new Promise( async(resolve,reject) => {
    const storageRef = admin.storage().bucket().file(pathname); 
    storageRef.getSignedUrl({ action: 'read', expires: '03-17-2025' }).then((url) => {
        resolve(url)
     }).catch((err)=> {reject(err)})}
     )
