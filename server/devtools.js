import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools';

export default function createDevToolsWindow(store) {
    const name = 'Redux DevTools';
    const win = window.open(
        null,
        name,
        'menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=450,height=600'
    );

    if (!win) {
        console.error(
            'Couldn\'t open Redux DevTools due to a popup blocker. ' +
            'Please disable the popup blocker for the current page.'
        );
        return;
    }

    win.location.reload();

    win.document.title = name;

    setTimeout(() => React.render(
        <DebugPanel top right bottom left>
            <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>,
        win.document.body.appendChild(document.createElement('div'))
    ), 10);
}