import {ArtistModel} from "@core/models/artist.model";

export interface TrackModel {
    _id: string | number | undefined;
    name: string;
    album: string;
    cover: string;
    artist?: ArtistModel;
    url: string;
}
