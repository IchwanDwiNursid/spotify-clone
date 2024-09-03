import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (song: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const subscripModal = useSubscribeModal();

  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscripModal.onOpen();
    }

    player.setId(id);
    player.setIds(song.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;
