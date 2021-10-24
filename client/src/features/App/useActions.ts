import { useEffect, useState } from "react";
import { ConnectionState } from "../../types/Api";
import socketService from "../../services/SocketService";

const useActions = () => {
  const [wsConnectionStatus, setWSConnectionStatus] =
    useState<ConnectionState>("idle");

  useEffect(() => {
    setWSConnectionStatus("pending");

    socketService.init().then(
      () => {
        setWSConnectionStatus("resolved");
      },
      (error) => {
        setWSConnectionStatus("rejected");
        console.error(error);
      }
    );

    return () => {
      socketService.disconnect();
    };
  }, []);

  return {
    wsConnectionStatus,
  };
};

export default useActions;
