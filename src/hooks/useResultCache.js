import { useCallback } from "react";


function useResultCache() {
//   const saveResultCache = useCallback((key, result) => {
//     const current = JSON.parse(sessionStorage.getItem(key));
//     sessionStorage.setItem(key, JSON.stringify({ ...current, ...result }));
//   }, [])

// const getResultCache = useCallback((key) => {
//     return JSON.parse(sessionStorage.getItem(key));
//   }, []);
  const setResultCache = useCallback((key, result) => {
    const current = JSON.parse(sessionStorage.getItem(key));
    // console.log('key', key);
    // console.log( 'CURRENT',current);
    sessionStorage.setItem(key, JSON.stringify({ ...current, ...result }));
  },[])

  const getResultCache = useCallback((key) => {
    return JSON.parse(sessionStorage.getItem(key));
  }, [])



  return { setResultCache, getResultCache };
}

export default useResultCache;