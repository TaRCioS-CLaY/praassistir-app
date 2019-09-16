import axios from 'axios';

    //Exemplo: https://api.themoviedb.org/3/movie/now_playing?api_key=497693be1ea61a95b2f17f338072dd50&language=pt-BR&page=1&region=BR
    const api: string = '497693be1ea61a95b2f17f338072dd50';
    const lingua: string = 'pt-BR';
    const regiao: string = 'BR';
    const urlBase: string = 'https://api.themoviedb.org/3';
    const urlImg: string = 'https://image.tmdb.org/t/p/w500';
/*    "poster_sizes": [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ],
  */
    export const emCartaz = (): Promise<any> => {
        return axios.get(`${urlBase}/movie/now_playing?api_key=${api}&language=${lingua}&page=1&region=${regiao}`)
        .then(resposta => resposta.data.results)
        .then((lista) => {
            lista.forEach(filme => {
                filme.poster_path = urlImg + filme.poster_path
            });
        return lista});
    }
