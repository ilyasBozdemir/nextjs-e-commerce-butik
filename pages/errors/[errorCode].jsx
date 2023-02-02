import React from 'react';

function Error({ errorCode }) {
  let errorMessage;

  switch (errorCode) {
    case 404:
      errorMessage = 'Sayfa bulunamadı';
      break;
    case 401:
      errorMessage = 'Erişim yetkiniz yok';
      break;
    case 403:
      errorMessage = 'Erişim yasak';
      break;
    case 500:
      errorMessage = 'Sunucuda bir hata oluştu';
      break;
    default:
      errorMessage = 'Bilinmeyen hata';
  }

  return <h1>{errorMessage}</h1>;
}

export default Error;
