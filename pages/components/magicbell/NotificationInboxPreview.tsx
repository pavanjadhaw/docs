import MagicBell, { FloatingNotificationInbox } from '@magicbell/magicbell-react';
import React from 'react';

export default function NotificationInboxPreview({ code }: { code: string }) {
  return (
    <div
      className="w-full rounded-md overflow-hidden relative z-0 mb-4"
      style={{ background: '#1e2035' }}
    >
      <div className="py-3 px-4 rounded-t-md font-mono text-xs text-gr uppercase text-white font-bold mb-2">
        Preview
      </div>
      <div className="px-4 h-full">
        <div style={{ minHeight: '430px' }}>
          <div className="inline-block ml-12">
            <MagicBell
              apiKey="MAGICBELL_API_KEY"
              userEmail="jon@example.com"
              defaultIsOpen={true}
              theme={{
                icon: { borderColor: 'rgb(229, 231, 235)' },
                header: { backgroundColor: '#7fccc4', textColor: '#f2faf9' },
                footer: { backgroundColor: '#7fccc4', textColor: '#f2faf9' },
              }}
            >
              {(props) => (
                <FloatingNotificationInbox
                  height={350}
                  width={400}
                  placement="bottom-start"
                  closeOnClickOutside={false}
                  layout={['header', 'content']}
                  popperOptions={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [-24, 16],
                        },
                      },
                    ],
                  }}
                  {...props}
                />
              )}
            </MagicBell>
          </div>
        </div>
      </div>
    </div>
  );
}
