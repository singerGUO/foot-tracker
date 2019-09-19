# foot-tracker




## Overview 

This project contains foot-tracking mobile application built with React Native.



## Built With

* [React-native](https://facebook.github.io/react-native/) - main framework for building front end.
* [React Hooks and the Context API](https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8) - used to manage data flow and application states of the website
* [Express](https://expressjs.com/) - main framework for building the backend server
* [MongoDB](https://www.mongodb.com/) - stored game updates in backend server
* [bcrypt](https://www.npmjs.com/package/bcrypt) - one-way hashed user passwords
* [JWT](https://jwt.io/) - generated JSON web token to authenticate users
* [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage) - Automated Sign in by storing JWT on device
* [ngrok](https://ngrok.com/) - allowing phones and server to work on different network
* [Axios](https://www.npmjs.com/package/axios) - make http request from node.js
 


## UI Mock Up 


![IMG_0216](https://user-images.githubusercontent.com/35857115/65223191-7c1fd300-da75-11e9-85c4-cdabf7c5b1f9.jpeg)




## Running the Prototype 

1. Download or clone GitHub repository 


2. Download and install the EXPO CLI on your desktop. Follow [this guide](https://docs.expo.io/versions/latest/introduction/installation/) for detailed instructions. 


3. Download and install the [EXPO mobile client](https://expo.io/tools#client) on your phone (or you can use an iOS simulator through Xcode or Android simulator through Android Studio)


4. [First time only]: If this is the first time executing the project, you will need to execute: 

`yarn install`


7. open new terminal and run `cd track-server` and execute 'npm run dev'

8. open new terminal and run `nrok http 3000` ,copy and first forwarding address from pop-up screen and place it to placeholder in tracker.js 

6. Execute: 

`npm start` 

