export * from './lib/videogame-tracker-domain.module';

export * from './lib/entities/game';

export * from './lib/infrastructure/game.data.service';

export * from './lib/+state/game/game.actions';

export * from './lib/application/game.facade';

export * from './lib/application/console.facade';

export * from './lib/infrastructure/console.data.service';

import * as ConsoleActions from './lib/+state/console/console.actions';

import * as ConsoleFeature from './lib/+state/console/console.reducer';

import * as ConsoleSelectors from './lib/+state/console/console.selectors';

export * from './lib/entities/console.models';

export { ConsoleActions, ConsoleFeature, ConsoleSelectors };
