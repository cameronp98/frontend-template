import './styles.scss'

// fetch info
fetch('http://localhost:8080/', {
  headers: {
    'content-type': 'application/json'
  }
})
  .then((info) => {
    console.log('info: ' + info);
  })
  .catch((error) => {
    console.error(error);
  });

