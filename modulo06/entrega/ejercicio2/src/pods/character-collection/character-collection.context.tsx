import React from "react";

interface CharacterCollectionContextModel {
    target: string;
    setTarget: (target: string) => void;
    page: number;
    setPage: (page: number)=> void;
 }

export const CharacterCollectionContext = React.createContext<CharacterCollectionContextModel>({
    target: '',
    setTarget: (target: string) => {},
    page: 1,
    setPage: (page: number) => {}
 });

export const CharacterCollectionContextProvider :React.FC = (props) => {
    const {children} = props;
    const [target, setTarget] = React.useState<string>('');
    const [page, setPage] = React.useState<number>(1);

    return <>
      <CharacterCollectionContext.Provider value = {{target, setTarget, page, setPage}}>
        {children}

      </CharacterCollectionContext.Provider>
    </>
}
