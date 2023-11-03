import { useEffect } from "react";

const Cats = (setCats) => {

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=4&has_breeds=1&api_key=live_GmThRaHgn9VohAryRwmvHCgeKuC19fmO8hmwNwiSsBayy1SaFXFSogCkUCSLLSmU"
        );
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setCats(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCats();
  }, []);

  return;
};

export default Cats;