import * as migration_20250522_060309_updating_media from './20250522_060309_updating_media';

export const migrations = [
  {
    up: migration_20250522_060309_updating_media.up,
    down: migration_20250522_060309_updating_media.down,
    name: '20250522_060309_updating_media'
  },
];
