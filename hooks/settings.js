import React, {createContext, useContext, useState, useReducer} from 'react';

const initialSettings = { lang: 'en'};
const Settings = createContext(
  initialSettings, 
  (prev, next) => prev.lang !== next.lang
);



export const SettingProvider = ({locale='', children}) => {
  const [lang, setLocale] = useState(lcoale);
  return (
    <Settings.Provider value={{ lang, setLocale}}>
      {children}
    </Settings.Provider>
  );
};

export const useSetting = () => {
  const setting = useContext(Settings);

  return 
}



