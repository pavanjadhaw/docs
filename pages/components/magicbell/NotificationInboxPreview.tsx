import MagicBell, { FloatingNotificationInbox } from '@magicbell/magicbell-react';
import React from 'react';
import HighlightedCode from '../code/HighlightedCode';

export default function NotificationInboxPreview({ code }: { code: string }) {
  return (
    <div className="w-full rounded-md overflow-hidden relative z-0 mb-4 bg-gray-200">
      <div className="py-3 px-4 rounded-t-md font-mono text-xs uppercase text-gray-700 border-b border-white font-bold">
        Preview
      </div>
      <div className="p-4 md:p-8 h-full flex flex-wrap xl:flex-nowrap">
        <div className="w-full xl:w-1/2" style={{ minHeight: '510px' }}>
          <div className="inline-block ml-6 bg-white p-4 rounded shadow-inner">
            <MagicBell
              apiKey="MAGICBELL_API_KEY"
              userEmail="jon@example.com"
              defaultIsOpen={true}
              theme={{
                icon: { borderColor: '#232323' },
                header: { backgroundColor: '#7fccc4', textColor: '#f2faf9' },
                footer: { backgroundColor: '#7fccc4', textColor: '#f2faf9' },
              }}
            >
              {(props) => (
                <FloatingNotificationInbox
                  height={440}
                  width={390}
                  placement="bottom-start"
                  closeOnClickOutside={false}
                  layout={['header', 'content']}
                  popperOptions={{
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [-42, 30],
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
        <div className="w-full mt-8 -mb-4 xl:mt-0 xl:w-1/2">
          {code && (
            <HighlightedCode className="language-js" hideHeader>
              {code}
            </HighlightedCode>
          )}
        </div>
      </div>
    </div>
  );
}
