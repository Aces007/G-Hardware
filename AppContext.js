import React, { useState, createContext, useContext, useEffect } from 'react';
// import { supabase } from './supabase';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    
    return (
        <AppContext.Provider >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);