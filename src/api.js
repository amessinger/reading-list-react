import { useContext, useEffect } from 'react';
import { dataTypeUrls } from './config';

export function useLoadDataType(type, context) {
  const {
    [type]: [, setData]
  } = useContext(context);

  useEffect(() => {
    fetch(dataTypeUrls[type])
      .then(response => response.json())
      .then(payload => {
        setData(payload[type]);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
