import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.example.myapp',
    appName: 'AutDash',
    webDir: '.output/public',
    server: {
        // ipconfig getifaddr en0
        url: 'http://192.168.1.157:3000',
        cleartext: true,
    },
    plugins: {
      SplashScreen: {
        launchShowDuration: 2000,
        launchAutoHide: true,
        androidScaleType: 'CENTER_CROP',
        splashFullScreen: true,
        splashImmersive: true,
      },
      Keyboard: {
        resize: 'body',
        resizeOnFullScreen: true,
      },
      StatusBar: {
        style: 'dark',
      },
    },
  };

export default config;
