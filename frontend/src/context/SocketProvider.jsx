import React, { createContext, useEffect, useState } from 'react'
import {io} from 'socket.io-client'

export const SocketContext = createContext();

const SocketProvider = ({children})=>{
    const [socket,setSocket] = useState(null);

    useEffect(()=>{
       setSocket(io(`${import.meta.env.VITE_BASE_URL}`));
   },[])

   console.log(socket)

     useEffect( ()=>{
        if(!socket) return
        socket.on('connect', ()=>{
            console.log('connected to server')
        });

        socket.on('disconnect', ()=>{
             console.log('disconnected from server');
        });

        return ()=>{
            socket.off('connect');
             socket.off('disconnect');
            // socket.disconnect();
        }

     }, [socket]);

    //  const sendMessage = (eventName, message)=>{
    //     socket.emit(eventName,message);
    //  };

    //  const receiveMessage = (eventName, callback)=>{
    //     socket.on(eventName,callback);
    //  };

     return ( 
     <SocketContext.Provider value={{socket}}> 
     {children}
      </SocketContext.Provider> ); 

    //  return (
    //     <SocketContext.Provider value={{sendMessage,receiveMessage}}>
    //         {children}
    //     </SocketContext.Provider>
    //  );
}

export default SocketProvider;
