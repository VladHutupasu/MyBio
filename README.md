# 💼 CV Website

[MyBio](https://05011997.xyz) is a website aimed for creating a landing page serving the purpose of a digital CV.

## 📦 Installation

Before running the app, you need to install the necessary dependencies. Navigate to the directory containing the app in your terminal and run the following command:

```bash
pnpm install
```

## 🏃‍♀️ Running the App

To run the app, navigate to the directory containing the app in your terminal and run the following command:

```bash
pnpm start
```

## 🚀 Deployment

```bash
 pnpm firebase login:ci -> get $FIREBASE_TOKEN
 pnpm version patch
 pnpm build --prod
 pnpm firebase deploy --token $FIREBASE_TOKEN
```
