// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// ✅ تهيئة Firebase (قيم ثابتة للمشروع)
firebase.initializeApp({
  apiKey: "AIzaSyBZDFrAARgCTXF_L5KFqD_EOQm_5nF_uTg",
  authDomain: "smsark-alaqary.firebaseapp.com",
  projectId: "smsark-alaqary",
  messagingSenderId: "165621685338",
  appId: "1:165621685338:web:295441459d4d5443e9cc63"
});

// ✅ تهيئة Messaging
const messaging = firebase.messaging();

// ✅ استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] ✅ Background message received:', payload);

  const { title = 'إشعار', body = 'لديك رسالة جديدة' } = payload?.notification || {};

  self.registration.showNotification(title, {
    body,
    icon: '/logo192.png', // تأكد إن الصورة موجودة فعلاً في public
  });
});
