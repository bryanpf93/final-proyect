import _ from 'lodash';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const BACKDROP_BASE_URL = process.env.REACT_APP_BACKDROP_BASE_URL;

export const mapperMedia = (data, type, favorites = []) => {
    const { id, backdrop_path, poster_path, overview, media_type } = data;
    const mediaType = media_type || type;
    const title = mediaType === 'movie' ? data.title : data.name;
    const date = mediaType === 'movie' ? data.release_date : data.first_air_date;
    const route = mediaType === 'movie' ? `movies` : `tv`;

    return {
        id,
        to: `/${route}/${id}`,
        image: poster_path ? `${IMAGE_BASE_URL}${poster_path}` : '',
        backdrop: backdrop_path ? `${BACKDROP_BASE_URL}${backdrop_path}` : '',
        title,
        description: overview,
        date: date,
        type: mediaType,
        favorite: !!favorites.find(f => f.id === id)
    };
}

export const mapperTrailer = (videos) => {
    let key = '';
    if (Array.isArray(videos) && videos.length > 0) {
        const trailers = videos.filter(video => video.type === "Trailer");
        if (trailers.length === 0) {
            key = videos[0].key;
        } else {
            const trailerES = trailers.find(video => video.iso_639_1 === "es");
            key = trailerES ? trailerES.key : trailers[0].key;
        }
    }
    return key ? `https://www.youtube.com/embed/${key}?autoplay=1` : '';
}