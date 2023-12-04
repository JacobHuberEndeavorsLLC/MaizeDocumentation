import { createContext, useContext, useState } from 'react';

export const VersionContext = createContext(null);

export const useVersion = () => useContext(VersionContext);