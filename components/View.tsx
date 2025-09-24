/**
 * @overview Simple styling component to ensure the layout is consistent.
 *
 * Copyright © 2021-2024 Hoagie Club and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree or at https://github.com/HoagieClub/stuff/blob/main/LICENSE.
 *
 * Permission is granted under the MIT License to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the software. This software is provided "as-is", without warranty of any kind.
 */

import { ReactNode } from 'react';

import { majorScale, Pane } from 'evergreen-ui';

// View is an extremely simple component to make sure that the layout is consistent
export default function View({ children }: { children: ReactNode }) {
    return (
        <Pane
            width='100%'
            height='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Pane width='100%' maxWidth='1200px' paddingX={majorScale(5)}>
                {children}
            </Pane>
        </Pane>
    );
}
