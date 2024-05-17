export interface IgeolocationResponse {
    name:         string;
    local_names?: LocalNames;
    lat:          number;
    lon:          number;
    country:      string;
    state:        string;
}

export interface LocalNames {
    he?: string;
    ru?: string;
    uk?: string;
    es:  string;
    el?: string;
    en?: string;
    eu?: string;
}


