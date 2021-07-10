import { Server } from 'miragejs';

function buildConfig() {
  return {
    ws: {
      region: 'eu',
      channel: 'user_05d52b50-9842-4a5c-acef-a1bb361f9e68-project_83',
      auth_url: 'ws/auth',
    },
    inbox: { features: { no_magicbell_branding: { enabled: true } } },
    channels: {
      webPush: {
        enabled: false,
      },
    },
  };
}

function buildNotifications({ page = 1 }) {
  const isFirstPage = page === 1;

  return {
    total: 3,
    total_pages: 1,
    per_page: 10,
    current_page: page,
    notifications: [
      {
        id: '2e2bf03e-f2a9-4751-be01-5ecfde902d12',
        title: 'Tom mentioned you in a coment',
        content: 'Hi @Dan, could you please get me the files this client is requesting?',
        action_url: null,
        seen_at: null,
        read_at: null,
      },
      {
        id: '2b92bf16-5eb5-46a7-8145-153ecf924dad',
        title: "The project 'Refactor the code' is due soon",
        content: 'A friendly reminder that your project is due soon.',
        action_url: null,
        seen_at: null,
        read_at: null,
      },
      {
        id: '70161a53-8123-48da-8ae0-ad52a73203b2',
        title: 'A new lead just came in',
        content: 'Grab it before someone else does. This is a good lead.',
        action_url: null,
        seen_at: new Date(),
        read_at: new Date(),
      },
    ],
    unseen_count: 2,
    unread_count: 2,
  };
}

export function mockMagicBellAPI() {
  return new Server({
    routes() {
      this.get('https://api.magicbell.io/config', buildConfig());
      this.post('https://api.magicbell.io/ws/*', {
        keyName: '0ugvOA.85mHKQ',
        timestamp: 1612536473106,
        nonce: 'f55a1d8c22c304dfb59599e8f9dff3fe',
        mac: 'wymLnXnoufQO8pL5dAlXRDgMyXEwLPhru81HtaVk1NM=',
      });
      this.get('https://api.magicbell.io/notifications', (req, res) =>
        buildNotifications({ page: parseInt(res.queryParams?.page) }),
      );
      this.post('https://api.magicbell.io/notifications/read', {});
      this.post('https://api.magicbell.io/notifications/seen', {});
      this.post('https://api.magicbell.io/notifications/*/read', {});
      this.post('https://api.magicbell.io/notifications/*/unread', {});
      this.delete('https://api.magicbell.io/notifications/*', {});

      this.post('https://rest.ably.io:443/*', {});
      this.get('https://rest.ably.io:443/comet/connect', {});

      this.passthrough();
    },
  });
}
