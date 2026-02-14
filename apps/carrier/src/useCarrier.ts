import { useState, useEffect } from "react";

export const useCarrier = (id?: string) => {
  const [loading, setLoading] = useState(false);
  const [carrier, setCarrier] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    // placeholder - load carrier by id
    setCarrier(null);
    setLoading(false);
  }, [id]);

  return { carrier, loading };
};

export default useCarrier;
