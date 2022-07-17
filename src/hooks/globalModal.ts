import { useEffect, useState } from "react";
import store, { MODAL } from "state";

type HookState = {
  modal?: MODAL;
};

export default function useGlobalModal() {
  const { modal: currentModal } = store.getState();
  const [modal, setModal] = useState(currentModal);
  const hideModal = () => showModal(MODAL.IDLE);
  const showModal = (m: MODAL) => store.modal(m);

  const onUpdate = (s: HookState) => {
    if (s.modal) setModal(s.modal);
  };

  useEffect(() => store.subscribeToKeys(onUpdate, ["modal"]), [modal]);
  return { modal, showModal, hideModal, MODAL };
}
