importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: 'AIzaSyA21oWW-1mClnsNAktXNdi2IAOyY-clt48',
    appId: '1:907495421370:web:458cf918691b7552785983',
    messagingSenderId: '907495421370',
    projectId: 'work-hub-c31ef',
    authDomain: 'work-hub-c31ef.firebaseapp.com',
    storageBucket: 'work-hub-c31ef.firebasestorage.app',
    databaseURL: 'https://work-hub-c31ef-default-rtdb.firebaseio.com',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/assets/icons/app.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
