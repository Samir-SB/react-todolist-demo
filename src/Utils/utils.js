import { useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todolistDemo.items';

export function fetchData() {
  const ls = localStorage.getItem(LOCAL_STORAGE_KEY);
  return !!ls ? JSON.parse(ls) : [];
}
export function storeData(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function UseStoreData(data) {
  useEffect(() => {
    storeData(data);
  }, [data]);
}
