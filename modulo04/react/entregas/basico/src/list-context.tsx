import React from "react";

interface ListContextModel {
    page: number;
    setPage: (page: number)=> void;
    target: string;
    setTarget: (target: string) => void;
  }
  
  export const ListContext = React.createContext<ListContextModel>({
    target: '',
    setTarget: (target: string) => {},
    page: 0,
    setPage: (page: number) => {}
  });
  
  export const ListContextProvider :React.FC = (props) => {
    const {children} = props;
    const [target, setTarget] = React.useState<string>('lemoncode');
    const [page, setPage] = React.useState<number>(1);
  
    const updateTarget = (newTarget :string) => {
      setTarget(newTarget);
    }

    return <>
      <ListContext.Provider value = {{target, setTarget, page, setPage}}>
        {children}
        
      </ListContext.Provider>
    </>
  }
  