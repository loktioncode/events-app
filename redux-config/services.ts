

export const getArtistsEvents = async (artist_name: string) => {
  const data = await fetch(`https://rest.bandsintown.com/artists/${artist_name}/events?app_id=12345`);
  return data.json();
};

