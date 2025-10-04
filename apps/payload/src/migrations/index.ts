import * as migration_20250927_100319 from './20250927_100319';

export const migrations = [
  {
    up: migration_20250927_100319.up,
    down: migration_20250927_100319.down,
    name: '20250927_100319'
  },
];
