import { useEffect, useState } from "react";

export function useMounted() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(false);
  }, []);

  return {
    mounted,
  };
}
