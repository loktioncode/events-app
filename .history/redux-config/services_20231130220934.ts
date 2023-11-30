import axios from "axios";

const instance = axios.create({
  baseURL: "https://rest.bandsintown.com",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '123'
},
});

export const artistsEventsAPI = async (artistname: string) => {
  const { data } = await instance.get(`/artists/${artistname}/events`);
  return data;
};

export const eventsAPI = async () => {
    const { data } = await instance.get("/artists/");
    return data;
  };
