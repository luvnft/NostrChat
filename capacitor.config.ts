import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.nostrchat.app',
  appName: 'XO',
  webDir: 'build',
  backgroundColor: '#000000',
  server: {
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'always',
    allowsLinkPreview: false
  }
};

export default config;
