import { useEffect, useState } from "react";

export const ActividadesPage = () => {
  const [eventsData, setEventsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://upon-spray-distribution-societies.trycloudflare.com/api/events");
      setEventsData(await data.json());
    };

    fetchData();
  }, []);

  return (
    <div>
      ActividadesPage <pre>{JSON.stringify(eventsData, null, 2)}</pre>
    </div>
  );
};
