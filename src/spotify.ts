export interface ISpotifyEntry {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface IArtist extends ISpotifyEntry {
  type: "artist";
}

export interface IUser extends ISpotifyEntry {
  type: "user";
}

export interface IPlaylist extends ISpotifyEntry {
  type: "playlist";
  collaborative: boolean;
  description: string;
  followers: {
    href: any;
    total: number;
  };
  images: IImage[];
  name: string;
  owner: IUser;
  public: boolean;
  snapshot_id: string;
  tracks: ITracks;
}

export interface ITracks extends ISpotifyEntry {
  items: ITrack[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface ITrack extends ISpotifyEntry {
  type: "track";
  added_at: string;
  added_by: IUser;
  is_local: boolean;
  track: ITrackData;
}

export interface ITrackData extends ISpotifyEntry {
  type: "track";
  album: IAlbum;
  artists: IArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ns: number;
  explicit: boolean;
  external_ids: { [type: string]: string };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
}

export interface IAlbum extends ISpotifyEntry {
  type: "album";
  album_type: "album" | string;
  artists: IArtist[];
  available_markets: string[];
  images: IImage[];
  name: string;
}

export interface IImage {
  height: number;
  url: string;
  width: number;
}

// export class SpotifyApi {
//     constructor(
//         private clientId: string,
//         private clientSecret: string,
//         private redirectUri?: string,
//     ) {
//     }
// }
