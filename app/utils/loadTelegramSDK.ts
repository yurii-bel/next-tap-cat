import useStore from "../store/store";

export const loadTelegramSDK = async () => {
  if (typeof window !== "undefined") {
    const WebApp = (await import("@twa-dev/sdk")).default;
    const telegram = WebApp;

    if (telegram) {
      telegram.ready();

      // Get the user data
      const user = telegram.initDataUnsafe?.user;
      if (user) {
        const setUser = useStore.getState().setUser;
        setUser({
          id: user.id,
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
        });
      }
    }
  }
};
