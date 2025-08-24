import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWoIJIkGwzMHawTUi5I74aWzyhgYPLNxw",
  authDomain: "daniela-reyes-alonso.firebaseapp.com",
  projectId: "daniela-reyes-alonso",
  storageBucket: "daniela-reyes-alonso.firebasestorage.app",
  messagingSenderId: "544867160250",
  appId: "1:544867160250:web:ecfd1947398025ab757283"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // 🔹 Inicializar Firebase
    provideFirestore(() => getFirestore()), // 🔹 Agregar Firestore
    provideAuth(() => getAuth()) // 🔹 Agregar Auth
  ]
};
